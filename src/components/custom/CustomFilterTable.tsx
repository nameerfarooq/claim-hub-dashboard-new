import { useEffect, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
} from '@tanstack/react-table'
import { rankItem } from '@tanstack/match-sorter-utils'
import type { InputHTMLAttributes } from 'react'
import Table from '@/components/ui/Table'
import type {
    ColumnDef,
    ColumnSort,
    FilterFn,
    ColumnFiltersState,
} from '@tanstack/react-table'
import Sorter from '../ui/Table/Sorter'
import { Button, Dropdown, Input, Pagination, Select, Tag } from '../ui'
import FilterDialog from './FilterDialog'
import DatePickerRange from '../ui/DatePicker/DatePickerRange'
import { TbCheck } from 'react-icons/tb'

interface DebouncedInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'onChange' | 'size' | 'prefix'
    > {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
}

interface Option {
    value: number
    label: string
}

interface CustomFileterTableProps<TData> {
    data: TData[]
    columns: ColumnDef<TData>[]
    filter: Boolean
}

const { Tr, Th, Td, THead, TBody } = Table

function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: DebouncedInputProps) {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <div className="flex justify-end">
            <div className="w-full flex items-center mb-4">
                <Input
                    {...props}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the itemRank info
    addMeta({
        itemRank,
    })

    // Return if the item should be filtered in/out
    return itemRank.passed
}
function CustomFileterTable<TData>({
    data,
    columns,
    filter = false,
}: CustomFileterTableProps<TData>) {
    const [rowSelection, setRowSelection] = useState({})
    const [sorting, setSorting] = useState<ColumnSort[]>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = useState('')

    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            rowSelection,
            sorting,
            columnFilters,
            globalFilter,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        debugHeaders: true,
        debugColumns: false,
    })

    const totalData = table.getFilteredRowModel().rows.length // Use filtered data length

    const pageSizeOption: Option[] = [
        { value: 10, label: '10 / page' },
        { value: 20, label: '20 / page' },
        { value: 30, label: '30 / page' },
        { value: 40, label: '40 / page' },
        { value: 50, label: '50 / page' },
    ]

    const onPaginationChange = (page: number) => {
        table.setPageIndex(page - 1) // Update page index
    }

    const onSelectChange = (option: Option | null) => {
        if (option) {
            table.setPageSize(Number(option.value)) // Update page size
        }
    }

    const [selectedTags, setSelectedTags] = useState<string[]>(['Past Due', 'Due'])

    const handleToggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag)) // Remove if already selected
        } else {
            setSelectedTags([...selectedTags, tag]) // Add if not selected
        }
    }

    const tags = [
        { id: 1, title: 'Past Due' },
        { id: 2, title: 'Draft' },
        { id: 3, title: 'Due' },
    ]

    return (
        <>
            <div className="flex flex-row w-full justify-between items-center gap-[10px]">
                <div className="flex flex-row gap-3 items-center w-fit">
                        <Dropdown
                            className="w-full h-full"
                            toggleClassName="bg-gray-100 border border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex px-3 focus:bg-gray-100 cursor-pointer rounded-xl min-h-[46px] w-full"
                            placement="bottom-start"
                            renderTitle={
                                <div className="inline-flex items-center gap-1">
                                    {selectedTags.length > 0 && selectedTags.map((tag) => (
                                        <Tag
                                            key={tag}
                                            className={`${tag === 'Past Due' ? 'bg-red-100' : tag === 'Draft' ? 'bg-blue-100' : tag === 'Due' ? 'bg-green-100' : 'bg-sky-100'}`}
                                        >
                                            {tag}
                                        </Tag>
                                    ))}
                                </div>
                            }
                        >
                            {tags.map((tag) => (
                                <Dropdown.Item
                                    key={tag.id}
                                    onClick={() => handleToggleTag(tag.title)}
                                    className="flex items-center justify-start w-full"
                                >
                                    <div className="w-2/12">
                                        {selectedTags.includes(tag.title) && (
                                            <TbCheck
                                                size={20}
                                                className="text-green-500"
                                            />
                                        )}
                                    </div>
                                    {tag.title}
                                </Dropdown.Item>
                            ))}
                        </Dropdown>
                        <DatePickerRange placeholder='All' />
                        <button className='text-black underline text-nowrap'>Clear Filters</button>
                </div>
                <div className="w-[200px]">
                    <DebouncedInput
                        value={globalFilter ?? ''}
                        className="p-2 font-lg bg-primary-subtle"
                        placeholder="Quick search..."
                        onChange={(value) => setGlobalFilter(String(value))}
                    />
                </div>
            </div>
            <div className="min-h-[60vh]">
                <Table>
                    <THead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <Th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className:
                                                        header.column.getCanSort()
                                                            ? 'cursor-pointer select-none flex flex-row items-center gap-1'
                                                            : '',
                                                    onClick:
                                                        header.column.getCanSort()
                                                            ? header.column.getToggleSortingHandler()
                                                            : undefined,
                                                }}
                                            >
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext(),
                                                )}
                                                {header.column.getCanSort() && (
                                                    <Sorter
                                                        sort={header.column.getIsSorted()}
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </THead>
                    <TBody>
                        {table.getRowModel().rows.map((row) => (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <Td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </TBody>
                </Table>
            </div>
            <div className="flex items-center justify-between mt-4">
                <Pagination
                    pageSize={table.getState().pagination.pageSize}
                    currentPage={table.getState().pagination.pageIndex + 1}
                    total={totalData}
                    onChange={onPaginationChange}
                />
                <div style={{ minWidth: 130 }}>
                    <Select<Option>
                        size="sm"
                        isSearchable={true}
                        value={pageSizeOption.find(
                            (option) =>
                                option.value ===
                                table.getState().pagination.pageSize,
                        )}
                        options={pageSizeOption}
                        onChange={onSelectChange}
                    />
                </div>
            </div>
        </>
    )
}

export default CustomFileterTable

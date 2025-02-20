import { Avatar, Button, Card, Tag, Tooltip } from '@/components/ui'
import RowSelection from '@/components/custom/AdvancedTable'
import Checkbox from '@/components/ui/Checkbox'
import { useRef, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import type { CheckboxProps } from '@/components/ui/Checkbox'
import { TbArrowDownToArc, TbCopyCheck, TbProgressBolt } from 'react-icons/tb'
import EditPencilIcon from '@/assets/icons/EditPencil'
import ViewEyeIcon from '@/assets/icons/ViewEye'
import { MdDeleteOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import CustomFileterTable from '@/components/custom/CustomFilterTable'

type CheckBoxChangeEvent = ChangeEvent<HTMLInputElement>

interface IndeterminateCheckboxProps extends Omit<CheckboxProps, 'onChange'> {
    onChange: (event: CheckBoxChangeEvent) => void
    indeterminate: boolean
    onCheckBoxChange?: (event: CheckBoxChangeEvent) => void
    onIndeterminateCheckBoxChange?: (event: CheckBoxChangeEvent) => void
}

function IndeterminateCheckbox({
    indeterminate,
    onChange,
    ...rest
}: IndeterminateCheckboxProps) {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (typeof indeterminate === 'boolean' && ref.current) {
            ref.current.indeterminate = !rest.checked && indeterminate
        }
    }, [ref, indeterminate])

    return <Checkbox ref={ref} onChange={(_, e) => onChange(e)} {...rest} />
}

const Invoice = () => {
    const tableData = [
        {
            id: '1028',
            client: 'Alexander Hernandez Sotol (Hurricane)',
            number: '#1028',
            date: 'Feb 16, 2025',
            subject: 'Tarp',
            total: '$15,668.22',
            balance: '$15,668.22',
            status: 'Past due'
        },
        {
            id: '1029',
            client: 'Alexander Hernandez Sotol (Hurricane)',
            number: '#1029',
            date: 'Feb 16, 2025',
            subject: 'Dryout',
            total: '$6,365.45',
            balance: '$6,365.45',
            status: 'Past due'
        },
        {
            id: '1025',
            client: 'Julio Tello (Hurricane)',
            number: '#1025',
            date: 'Feb 14, 2025',
            subject: 'Dryout',
            total: '$7,256.30',
            balance: '$7,256.30',
            status: 'Past due'
        },
        {
            id: '1026',
            client: 'Julio Tello (Hurricane)',
            number: '#1026',
            date: 'Feb 14, 2025',
            subject: 'Tarp',
            total: '$15,733.87',
            balance: '$15,733.87',
            status: 'Past due'
        },
        {
            id: '1040',
            client: 'Ivana Soleil Delao 9002 Bana Villa Court',
            number: '#1040',
            date: 'Feb 13, 2025',
            subject: 'Dryout',
            total: '$7,935.48',
            balance: '$7,935.48',
            status: 'Past due'
        },
        {
            id: '1032',
            client: 'Lakeview Loan Servicing',
            number: '#1032',
            date: 'Feb 12, 2025',
            subject: 'Dryout',
            total: '$9,375.24',
            balance: '$9,375.24',
            status: 'Past due'
        }
    ];

    const columns = [
        {
            id: 'select',
            header: ({ table }) => (
                <IndeterminateCheckbox
                    {...{
                        checked: table.getIsAllRowsSelected(),
                        indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                />
            ),
            cell: ({ row }) => (
                <div className="px-1">
                    <IndeterminateCheckbox
                        {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                        }}
                    />
                </div>
            ),
        },
        {
            header: 'Client',
            accessorKey: 'client',
            enableSorting: true,
        },
        {
            header: 'Invoice Number',
            accessorKey: 'number',
            enableSorting: true,
        },
        {
            header: 'Due Date',
            accessorKey: 'date',
            enableSorting: true,
            cell: ({ row }) => <div className='text-nowrap'>{row.original.date}</div>,
        },
        {
            header: 'Subject',
            accessorKey: 'subject',
            enableSorting: true,
            cell: ({ row }) => (
                <Tag
                    className={` ${
                        row.original.subject === 'Tarp'
                            ? 'bg-sky-100'
                            : row.original.subject === 'Dryout'
                              ? 'bg-red-100'
                              : row.original.subject === 'Fire'
                                ? 'bg-red-100'
                                : row.original.subject === 'Mold Testing'
                                  ? 'bg-green-100'
                                  : row.original.subject === 'Storm'
                                    ? 'bg-sky-100'
                                    : ''
                    }`}
                >
                    {row.original.subject}
                </Tag>
            ),
        },
        {
            header: 'Status',
            accessorKey: 'status',
            enableSorting: true,
            cell: ({ row }) => (
                <Tag
                    className={` ${
                        row.original.status === 'Draft'
                            ? 'bg-sky-100'
                            : row.original.status === 'Bad Debt'
                              ? 'bg-red-100'
                              : row.original.status === 'Paid'
                                ? 'bg-green-100'
                                : ''
                    }`}
                >
                    {row.original.status}
                </Tag>
            ),
        },
        {
            header: 'TOTAL',
            accessorKey: 'total',
            enableSorting: true,
        },
        {
            header: 'Balance',
            accessorKey: 'balance',
            enableSorting: true,
        },
        {
            header: 'Actions',
            accessorKey: 'actions',
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex items-center gap-1">
                    <button onClick={() => handleView(row.original)}>
                        <EditPencilIcon />
                    </button>
                    <button onClick={() => handleEdit(row.original)}>
                        <ViewEyeIcon />
                    </button>
                    <button onClick={() => handleDelete(row.original)}>
                        <MdDeleteOutline size={20} className="text-black" />
                    </button>
                </div>
            ),
        },
    ]

    const nav = useNavigate()

    const handleView = (rowData: any) => {
        console.log('View:', rowData)
        // Add logic
    }

    const handleEdit = (rowData: any) => {
        console.log('Edit:', rowData)
        // Add logic
    }

    const handleDelete = (rowData: any) => {
        console.log('Delete:', rowData)
        // Add logic
    }

    return (
        <Card bodyClass="flex flex-col gap-[30px]">
            <section className="flex flex-col gap-4 w-full">
                <div>
                    <div className="flex flex-row w-full justify-between items-center mb-[10px]">
                        <p className="text-2xl font-bold">Invoices</p>
                        <Button
                            // onClick={() => {
                            //     nav('/claims-pipeline')
                            // }}
                            variant="default"
                        >
                            New Invoice
                        </Button>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4 w-full rounded-[20px]">
                        <Card
                            bordered={true}
                            className="!shadow-none min-w-[250px]"
                            bodyClass="h-full flex flex-col items-start"
                        >
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-col gap-[15px]">
                                    <p className="text-lg font-bold">
                                        Overview
                                    </p>
                                    <div className="flex flex-col gap-1 text-xs">
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="flex flex-row gap-2 items-center">
                                                <div className="rounded-full size-[12px] bg-red-500" />
                                                <p className="text-gray-500">
                                                    Past Due (0)
                                                </p>
                                            </div>
                                            <p className="text-gray-500 ml-2">
                                                $0
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="flex flex-row gap-2 items-center">
                                                <div className="rounded-full size-[12px] bg-yellow-500" />
                                                <p className="text-gray-500">
                                                    Sent but not due (0)
                                                </p>
                                            </div>
                                            <p className="text-gray-500 ml-2">
                                                $0
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="flex flex-row gap-2 items-center">
                                                <div className="rounded-full size-[12px] bg-slate-800" />
                                                <p className="text-gray-500">
                                                    Draft (0)
                                                </p>
                                            </div>
                                            <p className="text-gray-500 ml-2">
                                                $0
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card
                            bordered={true}
                            className="!shadow-none min-w-[250px]"
                            bodyClass="h-full flex flex-col items-start"
                        >
                            <div className="flex flex-col justify-between items-center h-full">
                                <div className="flex flex-col gap-[15px] h-full">
                                    <div>
                                        <p className="text-lg font-bold">
                                            Issued
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Past 30 days
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs h-full">
                                        <div className="h-full"></div>
                                        <div className="mt-auto h-fit">
                                            <p className="text-gray-500">
                                                Data could not load
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card
                            bordered={true}
                            className="!shadow-none min-w-[250px]"
                            bodyClass="h-full flex flex-col items-start"
                        >
                            <div className="flex flex-col justify-between items-center h-full">
                                <div className="flex flex-col gap-[15px] h-full">
                                    <div>
                                        <p className="text-lg font-bold">
                                            Average Invoice
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Past 30 days
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs h-full">
                                        <div className="h-full"></div>
                                        <div className="mt-auto h-fit">
                                            <p className="text-gray-500">
                                                Data could not load
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card
                            bordered={true}
                            className="!shadow-none min-w-[250px]"
                            bodyClass="h-full flex flex-col items-start"
                        >
                            <div className="flex flex-col justify-between items-center h-full">
                                <div className="flex flex-col gap-[15px] h-full">
                                    <div>
                                        <p className="text-lg font-bold flex flex-row items-center gap-1">
                                            Avg time to paid{' '}
                                            <Tooltip
                                                title="Tooltip text"
                                                className="bg-white border"
                                            >
                                                {' '}
                                                <p className="text-xs rounded-full border border-black size-[18px] text-center">
                                                    ?
                                                </p>{' '}
                                            </Tooltip>{' '}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Past 30 days
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs h-full">
                                        <div className="h-full"></div>
                                        <div className="mt-auto h-fit">
                                            <p className="text-gray-500">
                                                Data could not load
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-[15px]">
                <p className="text-lg font-bold">All invoices</p>
                <div>
                    <CustomFileterTable
                        filter={true}
                        data={tableData}
                        columns={columns}
                    />
                </div>
            </section>
        </Card>
    )
}

export default Invoice

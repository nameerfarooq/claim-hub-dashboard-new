import { Button, Tag } from '@/components/ui'
import React from 'react'
import { TbCloudDownload, TbDots } from 'react-icons/tb'
import user from '@/assets/Images/user.png'
import RowSelection from '@/components/custom/AdvancedTable'
import Checkbox from '@/components/ui/Checkbox'
import { useRef, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import type { CheckboxProps } from '@/components/ui/Checkbox'
import AddUserIcon from '@/assets/icons/AddUser'
import EditPencilIcon from '@/assets/icons/EditPencil'
import ViewEyeIcon from '@/assets/icons/ViewEye'
import { MdDeleteOutline } from 'react-icons/md'

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

const Equipment = () => {
    const tableData = [
        {
            id: 1,
            name: 'Dehumidifier X100',
            place: 'Warehouse A',
            availability: ['Available', 'Clean'],
            lastTech: 'John Smith',
            whenAvailable: 'Now',
        },
        {
            id: 2,
            name: 'Air Scrubber Pro',
            place: 'Jobsite #3045',
            availability: ['In Use'],
            lastTech: 'Maria Lopez',
            whenAvailable: '01/12/2025',
        },
        {
            id: 3,
            name: 'Moisture Meter Z20',
            place: 'Truck #3',
            availability: ['Maintenance'],
            lastTech: 'Chris Brown',
            whenAvailable: '01/15/2025',
        },
        {
            id: 4,
            name: 'Thermal Camera T200',
            place: 'Warehouse B',
            availability: ['Available'],
            lastTech: 'Emily Davis',
            whenAvailable: 'Now',
        },
        {
            id: 5,
            name: 'Air Mover Max',
            place: 'Jobsite #2010',
            availability: ['In Use'],
            lastTech: 'Michael Johnson',
            whenAvailable: '02/01/2025',
        },
        {
            id: 6,
            name: 'Moisture Detector MD5',
            place: 'Truck #5',
            availability: ['Available', 'Clean'],
            lastTech: 'Sarah Wilson',
            whenAvailable: 'Now',
        },
        {
            id: 7,
            name: 'Dehumidifier X200',
            place: 'Warehouse C',
            availability: ['Maintenance'],
            lastTech: 'David Martinez',
            whenAvailable: '02/10/2025',
        },
        {
            id: 8,
            name: 'Air Scrubber Lite',
            place: 'Jobsite #4050',
            availability: ['In Use'],
            lastTech: 'Laura Garcia',
            whenAvailable: '01/20/2025',
        },
        {
            id: 9,
            name: 'Thermal Camera T100',
            place: 'Truck #2',
            availability: ['Available'],
            lastTech: 'James Anderson',
            whenAvailable: 'Now',
        },
        {
            id: 10,
            name: 'Air Mover Pro',
            place: 'Warehouse D',
            availability: ['Maintenance'],
            lastTech: 'Jessica Lee',
            whenAvailable: '02/05/2025',
        },
    ]

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
            header: 'Name',
            accessorKey: 'name',
            enableSorting: true,
        },
        {
            header: 'Place',
            accessorKey: 'place',
            enableSorting: true,
        },
        {
            header: 'Availability',
            accessorKey: 'availability',
            enableSorting: true,
            cell: ({ row }) => (
                <div className="flex items-center gap-1">
                    {row.original.availability.map((item, index) => (
                        <Tag
                            key={index}
                            className={`px-2 py-1 rounded-full ${
                                item === 'Available'
                                    ? 'bg-sky-200'
                                    : item === 'In Use'
                                      ? 'bg-red-200'
                                      : item === 'Maintenance'
                                        ? 'bg-yellow-200'
                                        : item === 'Clean'
                                          ? 'bg-green-200'
                                          : ''
                            }`}
                        >
                            {item}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            header: 'Last Technician',
            accessorKey: 'lastTech',
            enableSorting: true,
        },
        {
            header: 'When Available',
            accessorKey: 'whenAvailable',
            enableSorting: true,
        },
        {
            header: 'Actions',
            accessorKey: 'actions',
            enableSorting: false, // Disable sorting for the Actions column
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
        <main className="bg-white p-4 rounded-2xl border border-gray-200 h-full flex flex-col gap-[20px]">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold">Equipment Lists</h1>
                <div className="flex flex-row gap-[10px]">
                    <Button variant="default" icon={<TbCloudDownload />}>
                        Download
                    </Button>
                    <button className="flex items-center gap-2 border border-primary rounded-xl px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-deep">
                        <span>
                            <AddUserIcon />
                        </span>
                        Add new
                    </button>
                </div>
            </div>
            <div>
                <RowSelection data={tableData} columns={columns} />
            </div>
        </main>
    )
}

export default Equipment

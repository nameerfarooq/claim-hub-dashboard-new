import { Button } from '@/components/ui'
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
import { useNavigate } from 'react-router-dom'

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

const Processing = () => {
    const tableData = [
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            city: 'New York',
            phone: '(618) 474-9169',
            source: 'Lorem',
            category: 'Residential',
            type: 'Repair',
            insurance: 'Lorem',
            priority: 'High',
            lastTouched: '12/12/24 - 01:25:49', // Placeholder for action
        },
        {
            id: 2,
            name: {
                media: user,
                fullName: 'Michael Thompson',
            },
            city: 'Los Angeles',
            phone: '(310) 555-0123',
            source: 'Ipsum',
            category: 'Commercial',
            type: 'Maintenance',
            insurance: 'Ipsum',
            priority: 'Medium',
            lastTouched: '11/11/24 - 02:15:30',
        },
        {
            id: 3,
            name: {
                media: user,
                fullName: 'Sophia Williams',
            },
            city: 'Chicago',
            phone: '(312) 555-4567',
            source: 'Dolor',
            category: 'Residential',
            type: 'Installation',
            insurance: 'Dolor',
            priority: 'Low',
            lastTouched: '10/10/24 - 03:45:12',
        },
        {
            id: 4,
            name: {
                media: user,
                fullName: 'David Johnson',
            },
            city: 'Houston',
            phone: '(713) 555-6789',
            source: 'Sit',
            category: 'Commercial',
            type: 'Repair',
            insurance: 'Sit',
            priority: 'High',
            lastTouched: '09/09/24 - 04:30:45',
        },
        {
            id: 5,
            name: {
                media: user,
                fullName: 'Emily Davis',
            },
            city: 'San Francisco',
            phone: '(415) 555-0987',
            source: 'Amet',
            category: 'Residential',
            type: 'Maintenance',
            insurance: 'Amet',
            priority: 'Medium',
            lastTouched: '08/08/24 - 05:20:10',
        },
        {
            id: 6,
            name: {
                media: user,
                fullName: 'Ethan Moore',
            },
            city: 'Seattle',
            phone: '(206) 555-2468',
            source: 'Consectetur',
            category: 'Commercial',
            type: 'Installation',
            insurance: 'Consectetur',
            priority: 'Low',
            lastTouched: '07/07/24 - 06:15:25',
        },
        {
            id: 7,
            name: {
                media: user,
                fullName: 'Charlotte Brown',
            },
            city: 'Denver',
            phone: '(303) 555-7891',
            source: 'Adipiscing',
            category: 'Residential',
            type: 'Repair',
            insurance: 'Adipiscing',
            priority: 'High',
            lastTouched: '06/06/24 - 07:45:00',
        },
        {
            id: 8,
            name: {
                media: user,
                fullName: 'Oliver Martinez',
            },
            city: 'Miami',
            phone: '(305) 555-3412',
            source: 'Elit',
            category: 'Commercial',
            type: 'Maintenance',
            insurance: 'Elit',
            priority: 'Medium',
            lastTouched: '05/05/24 - 08:00:18',
        },
        {
            id: 9,
            name: {
                media: user,
                fullName: 'Amelia Harris',
            },
            city: 'Austin',
            phone: '(512) 555-6678',
            source: 'Sed',
            category: 'Residential',
            type: 'Installation',
            insurance: 'Sed',
            priority: 'Low',
            lastTouched: '04/04/24 - 09:25:35',
        },
        {
            id: 10,
            name: {
                media: user,
                fullName: 'James Wilson',
            },
            city: 'Dallas',
            phone: '(972) 555-1234',
            source: 'Do',
            category: 'Commercial',
            type: 'Repair',
            insurance: 'Do',
            priority: 'High',
            lastTouched: '03/03/24 - 10:10:00',
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
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <img
                        src={row.original.name.media}
                        alt={row.original.name.fullName}
                        className="w-8 h-8 rounded-full"
                    />
                    <span>{row.original.name.fullName}</span>
                </div>
            ),
        },
        {
            header: 'City',
            accessorKey: 'city',
            enableSorting: true,
        },
        {
            header: 'Phone',
            accessorKey: 'phone',
            enableSorting: true,
        },
        {
            header: 'Source',
            accessorKey: 'source',
            enableSorting: true,
        },
        {
            header: 'Category',
            accessorKey: 'category',
            enableSorting: true,
        },
        {
            header: 'Type',
            accessorKey: 'type',
            enableSorting: true,
        },
        {
            header: 'Insurance',
            accessorKey: 'insurance',
            enableSorting: true,
        },
        {
            header: 'Priority',
            accessorKey: 'priority',
            enableSorting: true,
            cell: ({ row }) => (
                <p
                    className={`rounded-xl w-fit px-2 py-1 ${
                        row.original.priority === 'High'
                            ? 'bg-red-300'
                            : row.original.priority === 'Medium'
                              ? 'bg-primary-light'
                              : 'bg-success-light'
                    }`}
                >
                    {' '}
                    {row.original.priority}{' '}
                </p>
            ),
        },
        {
            header: 'Last Touched',
            accessorKey: 'lastTouched',
            enableSorting: true,
        },
        {
            header: 'Actions',
            accessorKey: 'actions',
            enableSorting: false, // Disable sorting for the Actions column
            cell: ({ row }) => (
                <div className="flex items-center gap-1">
                    <button onClick={() => handleEdit(row.original)}>
                        <EditPencilIcon />
                    </button>
                    <button onClick={() => handleView(row.original)}>
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
        nav('/overview')
        console.log('View:', rowData)
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
                <h1 className="text-2xl font-bold">Claims : Processing</h1>
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

export default Processing

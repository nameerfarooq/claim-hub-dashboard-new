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
import { CSVLink } from 'react-csv'

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

const Leads = () => {
    const tableData = [
        {
            id: 1,
            name: {
                media: user,
                fullName: 'John Smith',
            },
            phone: '(305) 555-7890',
            email: 'john.smith@email.com',
            source: 'Google Ads',
            type: 'Water',
            provider: 'State Farm',
            policyNum: 'FL-123456',
            pa: 'None',
            city: 'Miami',
            status: 'New',
            lastTouched: '2024-06-28',
            createDate: '2024-06-27',
        },
        {
            id: 2,
            name: {
                media: user,
                fullName: 'Linda Garcia',
            },
            phone: '(786) 555-3456',
            email: 'linda.garcia@email.com',
            source: 'Referral',
            type: 'Fire',
            provider: 'Allstate',
            policyNum: 'None',
            pa: 'Sophia Rivera',
            city: 'Fort Lauderdale',
            status: 'In Progress',
            lastTouched: '2024-06-25',
            createDate: '2024-06-22',
        },
        {
            id: 3,
            name: {
                media: user,
                fullName: 'Mark Johnson',
            },
            phone: '(954) 555-6789',
            email: 'mark.johnson@email.com',
            source: 'Website',
            type: 'Mold',
            provider: 'Progressive',
            policyNum: 'None',
            pa: 'None',
            city: 'Boca Raton',
            status: 'Follow-up',
            lastTouched: '2024-06-29',
            createDate: '2024-06-20',
        },
        {
            id: 4,
            name: {
                media: user,
                fullName: 'Susan Lee',
            },
            phone: '(407) 555-1234',
            email: 'susan.lee@email.com',
            source: 'Insurance',
            type: 'Storm',
            provider: 'USAA',
            policyNum: 'US-765432',
            pa: 'Sophia Rivera',
            city: 'Orlando',
            status: 'Converted',
            lastTouched: '2024-06-26',
            createDate: '2024-06-15',
        },
        {
            id: 5,
            name: {
                media: user,
                fullName: 'James Brown',
            },
            phone: '(561) 555-2345',
            email: 'james.brown@email.com',
            source: 'Direct Call',
            type: 'General Inquiry',
            provider: 'None',
            policyNum: 'None',
            pa: 'David Martinez',
            city: 'West Palm Beach',
            status: 'Closed',
            lastTouched: '2024-06-20',
            createDate: '2024-06-10',
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
                    <button className="w-fit font-semibold text-black">
                        {row.original.name.fullName}
                    </button>
                </div>
            ),
        },
        {
            header: 'Phone',
            accessorKey: 'phone',
            enableSorting: true,
            cell: ({ row }) => (
                <p className="text-nowrap">{row.original.phone}</p>
            ),
        },
        {
            header: 'Email',
            accessorKey: 'email',
            enableSorting: true,
        },
        {
            header: 'Source',
            accessorKey: 'source',
            enableSorting: true,
        },
        {
            header: 'Type',
            accessorKey: 'type',
            enableSorting: true,
        },
        {
            header: 'Insurance Provider',
            accessorKey: 'provider',
            enableSorting: true,
        },

        {
            header: 'Policy Number',
            accessorKey: 'policyNum',
            enableSorting: true,
        },

        {
            header: 'PA Associated',
            accessorKey: 'pa',
            enableSorting: true,
            cell: ({ row }) => <button> {row.original.pa} </button>,
        },

        {
            header: 'City',
            accessorKey: 'city',
            enableSorting: true,
        },
        {
            header: 'Status',
            accessorKey: 'status',
            enableSorting: true,
            cell: ({ row }) => (
                <Tag
                    className={`${
                        row.original.status === 'Closed'
                            ? 'bg-red-100'
                            : row.original.status === 'Converted'
                              ? 'bg-green-100'
                              : row.original.status === 'Follow-up'
                                ? 'bg-purple-100'
                                : row.original.status === 'In Progress'
                                  ? 'bg-yellow-100'
                                  : 'bg-sky-100'
                    }`}
                >
                    {row.original.status}
                </Tag>
            ),
        },
        {
            header: 'Last Touched',
            accessorKey: 'lastTouched',
            enableSorting: true,
        },
        {
            header: 'Created Date',
            accessorKey: 'createDate',
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
                <h1 className="text-2xl font-bold">Leads</h1>
                <div className="flex flex-row gap-[10px]">
                    <CSVLink
                        className="w-fit"
                        filename="leadsList.csv"
                        data={tableData}
                    >
                        <Button variant="default" icon={<TbCloudDownload />}>
                            Download
                        </Button>
                    </CSVLink>
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

export default Leads

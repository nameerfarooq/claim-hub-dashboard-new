import { Button, Tag } from '@/components/ui'
import { TbCloudDownload } from 'react-icons/tb'
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

const Main = () => {
    const tableData = [
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Michael Torres',
            },
            role: 'PA (Project Administrator)',
            company: 'Rapid Fix Restoration',
            number: '(305) 555-1234',
            email: 'michael.t@rapidfix.com',
            status: 'Active',
            method: 'Phone',
            city: 'Miami',
            claim: ['P-402', 'P-104'],
            createDate: '2024-06-15',
            lastContact: '2024-06-28',
        },
        {
            id: 2,
            name: {
                media: user,
                fullName: 'Sarah Collins',
            },
            role: 'Worker (Electrician)',
            company: 'Collins Electrical',
            number: '(786) 555-5678',
            email: 'sarah.c@collins.com',
            status: 'Active',
            method: 'SMS',
            city: 'Fort Lauderdale',
            claim: ['P-102'],
            createDate: '2024-06-20',
            lastContact: '2024-07-01',
        },
        {
            id: 3,
            name: {
                media: user,
                fullName: 'David Nguyen',
            },
            role: 'Engineer',
            company: 'NG Structural',
            number: '(954) 555-7890',
            email: 'david.n@ngstructural.com',
            status: 'Active',
            method: 'Email',
            city: 'Boca Raton',
            claim: ['P-103', 'P-105'],
            createDate: '2024-06-22',
            lastContact: '2024-06-30',
        },
        {
            id: 4,
            name: {
                media: user,
                fullName: 'Rachel Adams',
            },
            role: 'Insurance Rep',
            company: 'StateSure Insurance',
            number: '(407) 555-9876',
            email: 'radams@statesure.com',
            status: 'Active',
            method: 'WhatsApp',
            city: 'Orlando',
            claim: ['P-104'],
            createDate: '2024-06-18',
            lastContact: '2024-06-29',
        },
        {
            id: 5,
            name: {
                media: user,
                fullName: 'Carlos Ramirez',
            },
            role: 'Worker (Plumber)',
            company: 'Independent Contractor',
            number: '(561) 555-6543',
            email: 'carlos.ramirez@independent.com',
            status: 'Inactive',
            method: 'SMS',
            city: 'West Palm Beach',
            claim: [],
            createDate: '2024-06-12',
            lastContact: '2024-06-20',
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
            header: 'Full Name',
            accessorKey: 'name',
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <img
                        src={row.original.name.media}
                        alt={row.original.name.fullName}
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold">
                        {row.original.name.fullName}
                    </span>
                </div>
            ),
        },
        {
            header: 'Role',
            accessorKey: 'role',
            enableSorting: true,
        },
        {
            header: 'Company',
            accessorKey: 'company',
            enableSorting: true,
        },
        {
            header: 'Phone Numer',
            accessorKey: 'number',
            enableSorting: true,
        },
        {
            header: 'Email',
            accessorKey: 'email',
            enableSorting: true,
        },
        {
            header: 'Status',
            accessorKey: 'status',
            enableSorting: true,
            cell: ({ row }) => (
                <Tag
                    className={`${row.original.status === 'Active' ? 'bg-green-200' : 'bg-red-200'}`}
                >
                    {row.original.status}
                </Tag>
            ),
        },
        {
            header: 'Preferred Contact Method',
            accessorKey: 'method',
            enableSorting: true,
        },
        {
            header: 'Assigned Claim',
            accessorKey: 'claim',
            enableSorting: true,
            cell: ({ row }) => (
                <div className="flex flex-row gap-2">
                    {row.original.claim.map((claim: string, index: number) => (
                        <p
                            key={index}
                            className="bg-gray-100 p-1 rounded-lg text-nowrap"
                        >
                            {claim}
                        </p>
                    ))}
                </div>
            ),
        },
        {
            header: 'Created Date',
            accessorKey: 'createDate',
            enableSorting: true,
        },
        {
            header: 'Last Contacted',
            accessorKey: 'lastContact',
            enableSorting: true,
        },
        {
            header: 'Actions',
            accessorKey: 'actions',
            enableSorting: false, // Disable sorting for the Actions column
            cell: ({ row }) => {
                const rowData = row.original // Extracting original data once

                return (
                    <div className="flex items-center gap-1">
                        <button onClick={() => handleEdit(rowData)}>
                            <EditPencilIcon />
                        </button>
                        <button onClick={() => handleView(rowData)}>
                            <ViewEyeIcon />
                        </button>
                        <button onClick={() => handleDelete(rowData)}>
                            <MdDeleteOutline size={20} className="text-black" />
                        </button>
                    </div>
                )
            },
        },
    ]

    const nav = useNavigate()

    const handleView = (rowData: any) => {
        nav('/contact-details', { state: { item: rowData } })
    }

    const handleEdit = (rowData: any) => {
        console.log('Edit:', rowData)
        nav('/contact-edit', { state: { item: rowData } })
    }

    const handleDelete = (rowData: any) => {
        console.log('Delete:', rowData)
        // Add logic
    }

    return (
        <main className="bg-white p-4 rounded-2xl border border-gray-200 h-full flex flex-col gap-[20px]">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold">Contacts</h1>
                <div className="flex flex-row gap-[10px]">
                    <CSVLink
                        className="w-fit"
                        filename="contactsList.csv"
                        data={tableData}
                    >
                        <Button variant="default" icon={<TbCloudDownload />}>
                            Download
                        </Button>
                    </CSVLink>
                    <button
                        onClick={() => nav('/contact-create')}
                        className="flex items-center gap-2 border border-primary rounded-xl px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-deep"
                    >
                        <span>
                            <AddUserIcon />
                        </span>
                        Add new
                    </button>
                </div>
            </div>
            <div>
                <RowSelection
                    filter={false}
                    data={tableData}
                    columns={columns}
                />
            </div>
        </main>
    )
}

export default Main

import { Button, Tag, Tooltip } from '@/components/ui'
import React from 'react'
import user from '@/assets/Images/user.png'
import RowSelection from '@/components/custom/AdvancedTable'
import Checkbox from '@/components/ui/Checkbox'
import { useRef, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import type { CheckboxProps } from '@/components/ui/Checkbox'
import AddUserIcon from '@/assets/icons/AddUser'
import EditPencilIcon from '@/assets/icons/EditPencil'
import ViewEyeIcon from '@/assets/icons/ViewEye'
import { MdDeleteOutline, MdOutlineTask } from 'react-icons/md'
import Coin from '@/assets/icons/Coin'
import { Link, useNavigate } from 'react-router-dom'

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

const Orders = () => {
    const tableData = [
        {
            id: '#95954',
            date: '28-11-2024',
            status: 'Draft',
            total: '$4367.15',
        },
        {
            id: '#95423',
            date: '27-11-2024',
            status: 'Approved',
            total: '$7823.42',
        },
        {
            id: '#95954',
            date: '28-11-2024',
            status: 'Draft',
            total: '$4367.15',
        },
        {
            id: '#95423',
            date: '27-11-2024',
            status: 'Approved',
            total: '$7823.42',
        },
        {
            id: '#95954',
            date: '28-11-2024',
            status: 'Draft',
            total: '$4367.15',
        },
        {
            id: '#95423',
            date: '27-11-2024',
            status: 'Approved',
            total: '$7823.42',
        },
        {
            id: '#95954',
            date: '28-11-2024',
            status: 'Draft',
            total: '$4367.15',
        },
        {
            id: '#95423',
            date: '27-11-2024',
            status: 'Approved',
            total: '$7823.42',
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
            header: 'ID',
            accessorKey: 'id',
            enableSorting: true,
            cell: ({ row }) => (
                <span className="font-semibold">{row.original.id}</span>
            ),
        },
        {
            header: 'DATE',
            accessorKey: 'date',
            enableSorting: true,
        },
        {
            header: 'STATUS',
            accessorKey: 'status',
            enableSorting: true,
            cell: ({ row }) => (
                <Tag
                    className={`${row.original.status === 'Approved' ? 'bg-green-200' : 'bg-red-200'}`}
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
            header: 'Actions',
            accessorKey: 'actions',
            enableSorting: false, // Disable sorting for the Actions column
            cell: ({ row }) => {
                const rowData = row.original // Extracting original data once

                return (
                    <div className="flex items-center gap-1">
                        <Tooltip title="Edit" className="bg-white shadow-md">
                            <button onClick={() => handleEdit(rowData)}>
                                <EditPencilIcon />
                            </button>
                        </Tooltip>
                        <Tooltip title="View" className="bg-white shadow-md">
                            <button onClick={() => handleView(rowData)}>
                                <ViewEyeIcon />
                            </button>
                        </Tooltip>
                        <Tooltip title="Remove" className="bg-white shadow-md">
                            <button onClick={() => handleDelete(rowData)}>
                                <MdDeleteOutline
                                    size={20}
                                    className="text-black"
                                />
                            </button>
                        </Tooltip>
                        <Tooltip title="Pricing" className="bg-white shadow-md">
                            <button onClick={() => handleDelete(row.original)}>
                                <Coin />
                            </button>
                        </Tooltip>
                    </div>
                )
            },
        },
    ]
    const nav = useNavigate()
    const handleView = (rowData: any) => {
        nav('/overview/order-details')
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
                <h1 className="text-2xl font-bold">Orders List</h1>
                <div className="flex flex-row gap-[10px]">
                    <Link
                        to="/overview/create-job-order"
                        className="flex items-center gap-2 border border-primary rounded-xl p-4 font-bold text-white bg-primary hover:bg-primary-deep"
                    >
                        <span>
                            <AddUserIcon />
                        </span>
                        Create new
                    </Link>
                </div>
            </div>
            <div>
                <RowSelection data={tableData} columns={columns} />
            </div>
        </main>
    )
}

export default Orders

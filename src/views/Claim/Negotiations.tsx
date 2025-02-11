import { Button, Tag, Tooltip } from '@/components/ui'
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

const Negotiations = () => {
    const tableData = [
        {
            id: 1,
            claimId: 'C-1001',
            name: {
                media: user,
                fullName: 'John Smith',
            },
            type: ['Water', 'Hurricane'],
            city: 'Miami',
            status: 'In Progress',
            stage: 'Negotiation',
            subStage: 'Qualification',
            lastUpdated: '2024-06-25',
            pa: 'Michael Torres',
        },
        {
            id: 2,
            claimId: 'C-1002',
            name: {
                media: user,
                fullName: 'Linda Garcia',
            },
            type: ['Hurricane'],
            city: 'Fort Lauderdale',
            status: 'Closed',
            stage: 'Negotiation',
            subStage: 'Close',
            lastUpdated: '2024-06-22',
            pa: 'Sophia Rivera',
        },
        {
            id: 3,
            claimId: 'C-1003',
            name: {
                media: user,
                fullName: 'Mark Johnson',
            },
            type: ['Storm'],
            city: 'Boca Raton',
            status: 'In Progress',
            stage: 'Negotiation',
            subStage: 'Intake',
            lastUpdated: '2024-06-27',
            pa: 'Michael Torres',
        },
        {
            id: 4,
            claimId: 'C-1004',
            name: {
                media: user,
                fullName: 'Susan Lee',
            },
            type: ['Water', 'Hurricane'],
            city: 'Orlando',
            status: 'In Progress',
            stage: 'Negotiation',
            subStage: 'Scheduling',
            lastUpdated: '2024-06-28',
            pa: 'David Martinez',
        },
        {
            id: 5,
            claimId: 'C-1005',
            name: {
                media: user,
                fullName: 'James Brown',
            },
            type: ['Fire'],
            city: 'West Palm Beach',
            status: 'In Progress',
            stage: 'Negotiation',
            subStage: Math.random() > 0.5 ? 'Mediation' : 'Payment Processed', // Random Mediation or Payment Processed
            lastUpdated: '2024-06-29',
            pa: 'Sophia Rivera',
        },
        {
            id: 6,
            claimId: 'C-1006',
            name: {
                media: user,
                fullName: 'Robert White',
            },
            type: ['Water', 'Hurricane'],
            city: 'Miami',
            status: 'In Progress',
            stage: 'Negotiation',
            subStage: 'Perform',
            lastUpdated: '2024-07-01',
            pa: 'David Martinez',
        },
        {
            id: 7,
            claimId: 'C-1007',
            name: {
                media: user,
                fullName: 'Amanda Scott',
            },
            type: ['Storm'],
            city: 'Fort Lauderdale',
            status: 'Hold',
            stage: 'Negotiation',
            subStage: 'Compliance',
            lastUpdated: '2024-06-30',
            pa: 'Michael Torres',
        },
        {
            id: 8,
            claimId: 'C-1008',
            name: {
                media: user,
                fullName: 'David Wilson',
            },
            type: ['Mold'],
            city: 'Boca Raton',
            status: 'In Progress',
            stage: 'Negotiation',
            subStage: 'Calculate Internal Labor',
            lastUpdated: '2024-07-02',
            pa: 'Sophia Rivera',
        },
        {
            id: 9,
            claimId: 'C-1009',
            name: {
                media: user,
                fullName: 'Emma Johnson',
            },
            type: ['Water', 'Hurricane'],
            city: 'Orlando',
            status: 'In Progress',
            stage: 'Negotiation',
            subStage: 'Collect Deposit',
            lastUpdated: '2024-07-03',
            pa: 'David Martinez',
        },
        {
            id: 10,
            claimId: 'C-1010',
            name: {
                media: user,
                fullName: 'Ethan Miller',
            },
            type: ['Hurricane'],
            city: 'Miami',
            status: 'Follow-Up',
            stage: 'Negotiation',
            subStage: 'Invoice Received (30 days)',
            lastUpdated: '2024-07-01',
            pa: 'Sophia Rivera',
        },
        {
            id: 11,
            claimId: 'C-1011',
            name: {
                media: user,
                fullName: 'Lucas Carter',
            },
            type: ['Storm'],
            city: 'West Palm Beach',
            status: 'In Progress',
            stage: 'Negotiation',
            subStage: Math.random() > 0.5 ? 'Mediation' : 'Payment Processed', // Random Mediation or Payment Processed
            lastUpdated: '2024-07-02',
            pa: 'Michael Torres',
        },
        {
            id: 12,
            claimId: 'C-1012',
            name: {
                media: user,
                fullName: 'Olivia Davis',
            },
            type: ['Fire'],
            city: 'Fort Lauderdale',
            status: 'In Progress',
            stage: 'Negotiation',
            subStage: Math.random() > 0.5 ? 'Mediation' : 'Payment Processed', // Random Mediation or Payment Processed
            lastUpdated: '2024-07-04',
            pa: 'David Martinez',
        },
        {
            id: 13,
            claimId: 'C-1013',
            name: {
                media: user,
                fullName: 'Henry Wilson',
            },
            type: ['Fire'],
            city: 'Boca Raton',
            status: 'Follow-Up',
            stage: 'Negotiation Out',
            subStage: 'Call Client for Feedback',
            lastUpdated: '2024-07-05',
            pa: 'Sophia Rivera',
        },
        {
            id: 14,
            claimId: 'C-1014',
            name: {
                media: user,
                fullName: 'Isabella Brown',
            },
            type: ['Fire'],
            city: 'Miami',
            status: 'Closed',
            stage: 'Negotiation Out',
            subStage: 'Recommendation Received',
            lastUpdated: '2024-07-06',
            pa: 'Michael Torres',
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
            header: 'Claim ID',
            accessorKey: 'claimId',
        },
        {
            header: 'Customer Name',
            accessorKey: 'name',
            cell: ({ row }) => (
                <button className="flex items-center gap-2">
                    <img
                        src={row.original.name.media}
                        alt={row.original.name.fullName}
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="text-black font-semibold">
                        {row.original.name.fullName}
                    </span>
                </button>
            ),
        },
        {
            header: 'Type',
            accessorKey: 'type',
            enableSorting: true,
            cell: ({ row }) => (
                <div className="flex items-center gap-1">
                    {row.original.type.map((item, index) => (
                        <Tag
                            key={index}
                            className={` ${
                                item === 'Water'
                                    ? 'bg-sky-100'
                                    : item === 'Hurricane'
                                      ? 'bg-red-100'
                                      : item === 'Fire'
                                        ? 'bg-red-100'
                                        : item === 'Mold'
                                          ? 'bg-green-100'
                                          : item === 'Storm'
                                            ? 'bg-sky-100'
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
            header: 'City',
            accessorKey: 'city',
            enableSorting: true,
        },
        // {
        //     header: 'Status',
        //     accessorKey: 'status',
        //     enableSorting: true,
        // },
        {
            header: 'Stage',
            accessorKey: 'stage',
            enableSorting: true,
            cell: ({ row }) => (
                <Tag
                    className={` ${
                        row.original.stage === 'Sales'
                            ? 'bg-sky-100'
                            : row.original.stage === 'Processing'
                              ? 'bg-red-100'
                              : row.original.stage === 'Job'
                                ? 'bg-yellow-100'
                                : row.original.stage === 'Accounting'
                                  ? 'bg-green-100'
                                  : 'bg-purple-100'
                    }`}
                >
                    {row.original.stage}
                </Tag>
            ),
        },
        {
            header: 'Sub-Stage',
            accessorKey: 'subStage',
            enableSorting: true,
            cell: ({ row }) => (
                <Tag
                    className={` ${
                        row.original.subStage === 'Qualification'
                            ? 'bg-sky-100'
                            : row.original.subStage === 'Close'
                              ? 'bg-red-100'
                              : row.original.subStage === 'Intake'
                                ? 'bg-yellow-100'
                                : row.original.subStage === 'Scheduling'
                                  ? 'bg-green-100'
                                  : row.original.subStage ===
                                      'Payment Processed'
                                    ? 'bg-pink-100'
                                    : row.original.subStage ===
                                        'Compliance'
                                      ? 'bg-orange-100'
                                      : 'bg-purple-100'
                    }`}
                >
                    {row.original.subStage}
                </Tag>
            ),
        },
        {
            header: 'Last Updated',
            accessorKey: 'lastUpdated',
            enableSorting: true,
        },

        {
            header: 'Assigned PA',
            accessorKey: 'pa',
            enableSorting: true,
            cell: ({ row }) => <button>{row.original.pa}</button>,
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
                    </div>
                )
            },
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
                <h1 className="text-2xl font-bold">Claims : Negotiations</h1>
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
                <RowSelection
                    filter={false}
                    data={tableData}
                    columns={columns}
                />
            </div>
        </main>
    )
}

export default Negotiations

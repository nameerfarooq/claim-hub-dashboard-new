import AddUserIcon from '@/assets/icons/AddUser'
import { Card, Table } from '@/components/ui'
import Td from '@/components/ui/Table/Td'
import Tr from '@/components/ui/Table/Tr'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    TbCheck,
    TbClipboardCheck,
    TbClock,
    TbCloudDownload,
    TbDots,
    TbTruck,
} from 'react-icons/tb'
import { BiListCheck } from 'react-icons/bi'
import { CiUser } from 'react-icons/ci'
import { CgSpinner } from 'react-icons/cg'
import { HiOutlineDocumentSearch } from 'react-icons/hi'
import { Button, Tag, Tooltip } from '@/components/ui'
import { MdOutlineTask } from 'react-icons/md'
import { BsCardChecklist, BsPersonCheck } from 'react-icons/bs'
import TBody from '@/components/ui/Table/TBody'

const OrderDetails = () => {
    const tabledata = [
        {
            name: 'PO',
            value: 'MN-8886-2',
        },
        {
            name: 'Labor',
            value: 'Assigned to minio, Start Date: 4-5-2024, End Date: 4-5-2024',
        },
        {
            name: 'Crew Instructions',
            value: 'R&R Fascia Per Scope',
        },
        {
            name: 'Production Note',
            value: 'Approved',
        },
    ]

    const stepsData = [
        {
            type: 'Lead',
            data: [
                {
                    date: '9-20-2023',
                    title: 'Draft',
                    status: true,
                    description: '3 Days',
                    icon: <CiUser size={24} />,
                },
                {
                    date: '9-23-2023',
                    title: 'Submitted',
                    status: true,
                    description: '26 Days',
                    icon: <TbClock size={24} />,
                },
                {
                    date: '10-19-2023',
                    title: 'Approved',
                    status: true,
                    description: '8 Months',
                    icon: <BiListCheck size={24} />, // Use IN_PROGRESS instead of 'in_progress'
                },
            ],
        },
        {
            type: 'Material',
            data: [
                {
                    date: '11-12-2023',
                    title: 'Ordered',
                    status: true,
                    description: '3 Days',
                    icon: (
                        <HiOutlineDocumentSearch
                            size={24}
                            className="text-white"
                        />
                    ),
                },
                {
                    date: '11-13-2023',
                    title: 'Delivery',
                    status: false,
                    description: '26 Days',
                    icon: <TbTruck size={24} />,
                },
            ],
        },
        {
            type: 'Labor',
            data: [
                {
                    date: '11-15-2023',
                    title: 'Assigned',
                    status: false,
                    description: '3 Days',
                    icon: <BsPersonCheck size={24} />,
                },
                {
                    date: '11-18-2023',
                    title: 'Start',
                    status: false,
                    description: '26 Days',
                    icon: <BsCardChecklist size={24} />,
                },
                {
                    date: '11-20-2023',
                    title: 'Completed',
                    status: true,
                    description: '8 Months',
                    icon: <TbClipboardCheck size={24} />, // Use IN_PROGRESS instead of 'in_progress'
                },
            ],
        },
        {
            type: 'Completed',
            data: [
                {
                    date: '9-20-2023',
                    title: 'Completed',
                    status: false,
                    description: '3 Days',
                    icon: <TbClipboardCheck size={24}/>,
                },
            ],
        },
    ]

    return (
        <main className="flex flex-col gap-[30px] w-full mx-auto">
            <div className="flex flex-row justify-between">
                <p className="text-2xl font-bold">Order Details</p>
                <Link
                    to="/overview/create-job-order"
                    className="flex items-center gap-2 border border-primary rounded-xl py-3 px-4 font-bold text-white bg-primary hover:bg-primary-deep"
                >
                    <span>
                        <AddUserIcon />
                    </span>
                    New Order
                </Link>
            </div>
            <Card>
                <div className="my-8">
                    <div className="w-full p-2 flex flex-row">
                        {stepsData.map((step, index) => (
                            <div key={index} className="flex flex-row w-full">
                                {step.type === 'Lead' && (
                                    <div className="flex flex-row gap-2 w-full justify-evenly border-r-2 border-dashed">
                                        {step.data.map((data, dataIndex) => (
                                            <div
                                                key={dataIndex}
                                                className="flex flex-col items-center justify-center  relative"
                                            >
                                                <div
                                                    className={`h-10 w-10 rounded-full flex items-center justify-center border-2 border-primary ${data.status === true ? 'bg-primary text-white' : 'text-primary bg-white'} `}
                                                >
                                                    {data.icon}
                                                </div>
                                                <p className="text-center font-bold pt-1">
                                                    {data.title}
                                                </p>
                                                <p className="text-center text-[12px] pt-1">
                                                    {data.date}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {step.type === 'Material' && (
                                    <div className="flex flex-row gap-2 w-full justify-evenly border-r-2 border-dashed">
                                        {step.data.map((data, dataIndex) => (
                                            <div
                                                key={dataIndex}
                                                className="flex flex-col items-center justify-center  relative"
                                            >
                                                <div
                                                    className={`h-10 w-10 rounded-full flex items-center justify-center border-2 text-green-400 border-green-400 ${data.status === true ? 'bg-green-400 text-white' : ' '} `}
                                                >
                                                    {data.icon}
                                                </div>
                                                <p className="text-center font-bold pt-1">
                                                    {data.title}
                                                </p>
                                                <p className="text-center text-[12px] pt-1">
                                                    {data.date}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {step.type === 'Labor' && (
                                    <div className="flex flex-row gap-2 w-full justify-evenly border-r-2 border-dashed">
                                        {step.data.map((data, dataIndex) => (
                                            <div
                                                key={dataIndex}
                                                className="flex flex-col items-center justify-center  relative"
                                            >
                                                <div
                                                    className={`h-10 w-10 rounded-full flex items-center justify-center border-2 border-red-500 ${data.status === true ? 'bg-red-500 text-white' : 'text-red-500 bg-white'} `}
                                                >
                                                    {data.icon}
                                                </div>
                                                <p className="text-center font-bold pt-1">
                                                    {data.title}
                                                </p>
                                                <p className="text-center text-[12px] pt-1">
                                                    {data.date}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {step.type === 'Completed' && (
                                    <div className="flex flex-row gap-2 w-full justify-evenly">
                                        {step.data.map((data, dataIndex) => (
                                            <div
                                                key={dataIndex}
                                                className="flex flex-col items-center justify-center  relative"
                                            >
                                                <div
                                                    className={`h-10 w-10 rounded-full flex items-center justify-center border-2 border-primary ${data.status === true ? 'bg-primary text-white' : 'text-primary bg-white'} `}
                                                >
                                                    {data.icon}
                                                </div>
                                                <p className="text-center font-bold pt-1">
                                                    {data.title}
                                                </p>
                                                <p className="text-center text-[12px] pt-1">
                                                    {data.date}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <Table>
                    {tabledata.map((data) => (
                        <TBody className='border-none'>
                            <Tr className="border-none">
                                <Td>
                                    <p className="text-[16px] font-bold text-nowrap">
                                        {data.name} :
                                    </p>
                                </Td>
                                <Td>
                                    {' '}
                                    <p
                                        className={` ${data.value === 'Approved' ? 'text-white bg-green-500 w-fit rounded-lg px-4 py-1' : ''} text-[16px] font-medium`}
                                    >
                                        {data.value}
                                    </p>
                                </Td>
                            </Tr>
                        </TBody>
                    ))}
                </Table>
            </Card>
        </main>
    )
}

export default OrderDetails

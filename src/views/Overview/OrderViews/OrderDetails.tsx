import AddUserIcon from '@/assets/icons/AddUser'
import { Card, Table } from '@/components/ui'
import Td from '@/components/ui/Table/Td'
import Tr from '@/components/ui/Table/Tr'
import React from 'react'
import { Link } from 'react-router-dom'

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
                <Table>
                    {tabledata.map((data) => (
                        <Tr className="border-none">
                            <Td>
                                <p className="py-2 text-[16px] font-bold text-nowrap">
                                    {data.name} :
                                </p>
                            </Td>
                            <Td>
                                {' '}
                                <p className="py-2 text-[16px] font-medium">
                                    {data.value}
                                </p>
                            </Td>
                        </Tr>
                    ))}
                </Table>
            </Card>
        </main>
    )
}

export default OrderDetails

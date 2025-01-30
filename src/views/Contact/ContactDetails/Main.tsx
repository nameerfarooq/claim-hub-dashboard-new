import { ConfirmDialog } from '@/components/shared'
import { Avatar, Button, Card, Tag, Tooltip } from '@/components/ui'
import React, { useState } from 'react'
import { HiOutlineTrash, HiPencil } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'

const CustomerInfoField = ({ title, value }) => {
    return (
        <div>
            <span className="font-semibold">{title}</span>
            <p className="heading-text font-bold">{value}</p>
        </div>
    )
}

const Main = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const location = useLocation()
    const { item } = location.state
    const nav = useNavigate()
    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    const handleDialogOpen = () => {
        setDialogOpen(true)
    }

    const handleDelete = () => {
        console.log('Delete:', item)
    }

    const handleEdit = (data) => {
        nav('/contact-edit', { state: { item: data } })
    }

    return (
        <div className="flex flex-col xl:flex-row gap-4">
            <div className="min-w-[330px] 2xl:min-w-[400px]">
                <Card className="w-full">
                    <div className="flex justify-end">
                        <button
                            className="close-button button-press-feedback"
                            type="button"
                            onClick={() => handleEdit(item)}
                        >
                            <Tooltip
                                className="bg-white shadow-md"
                                title="Edit contact"
                            >
                                <HiPencil />
                            </Tooltip>
                        </button>
                    </div>
                    <div className="flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto">
                        <div className="flex xl:flex-col items-center gap-4 mt-6">
                            <Avatar
                                size={90}
                                shape="circle"
                                src={item.name.media}
                            />
                            <h4 className="font-bold">{item.name.fullName}</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-10">
                            <CustomerInfoField
                                title="Company"
                                value={item.company}
                            />
                            <CustomerInfoField title="Role" value={item.role} />
                            <CustomerInfoField
                                title="Email"
                                value={item.email}
                            />
                            <CustomerInfoField
                                title="Phone"
                                value={item.number}
                            />
                            <CustomerInfoField
                                title="Last Contacted"
                                value={item.lastContact}
                            />
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {/* <Button
                                block
                                variant="solid"
                                onClick={handleSendMessage}
                            >
                                Send Messsage
                            </Button> */}
                            <Button
                                block
                                customColorClass={() =>
                                    'hover:border-error hover:ring-1 ring-error hover:text-error'
                                }
                                icon={<HiOutlineTrash />}
                                onClick={handleDialogOpen}
                            >
                                Delete
                            </Button>
                        </div>
                        <ConfirmDialog
                            isOpen={dialogOpen}
                            type="danger"
                            title="Delete customer"
                            onClose={handleDialogClose}
                            onRequestClose={handleDialogClose}
                            onCancel={handleDialogClose}
                            onConfirm={handleDelete}
                        >
                            <p>
                                Are you sure you want to delete this customer?
                                All record related to this customer will be
                                deleted as well. This action cannot be undone.
                            </p>
                        </ConfirmDialog>
                    </div>
                </Card>
            </div>
            <Card className="w-full">
                <div className="w-full p-4">
                    <h5>Claims</h5>
                    <div className="grid grid-flow-col gap-2">
                        {item.claim.map((i, index) => (
                            <div key={index} className="pt-4">
                                <Tag>{i}</Tag>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full grid grid-flow-col gap-4 p-4">
                    <Card className="bg-gray-100 shadow">
                        <h6>Status</h6>
                        <p>{item.status}</p>
                    </Card>
                    <Card className="bg-gray-100 shadow">
                        <h6>Preferred Contact Method</h6>
                        <p>{item.method}</p>
                    </Card>
                </div>
            </Card>
        </div>
    )
}

export default Main

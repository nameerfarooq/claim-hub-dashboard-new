import React, { useState } from 'react'
import CustomerForm, { CustomerFormSchema } from '../CustomerForm'
import { ConfirmDialog, Container } from '@/components/shared'
import { Button, Notification, toast } from '@/components/ui'
import { TbArrowNarrowLeft, TbTrash } from 'react-icons/tb'
import sleep from '@/utils/sleep'
import { useLocation, useNavigate } from 'react-router-dom'

const Main = () => {
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const nav = useNavigate()
    const handleFormSubmit = async (values: CustomerFormSchema) => {
        console.log('Submitted values', values)
        setIsSubmiting(true)
        await sleep(800)
        setIsSubmiting(false)
        toast.push(<Notification type="success">Changes Saved!</Notification>, {
            placement: 'top-center',
        })
        nav('/contact')
    }

    const handleConfirmDelete = () => {
        setDeleteConfirmationOpen(true)
        toast.push(
            <Notification type="success">Customer deleted!</Notification>,
            { placement: 'top-center' },
        )
        nav('/contact')
    }

    const handleDelete = () => {
        setDeleteConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDeleteConfirmationOpen(false)
    }

    const handleBack = () => {
        history.back()
    }

    return (
        <div>
            <>
                <CustomerForm
                    newCustomer={false}
                    onFormSubmit={handleFormSubmit}
                >
                    <Container>
                        <div className="flex items-center justify-between px-8">
                            <Button
                                className="ltr:mr-3 rtl:ml-3"
                                type="button"
                                variant="plain"
                                icon={<TbArrowNarrowLeft />}
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            <div className="flex items-center">
                                <Button
                                    className="ltr:mr-3 rtl:ml-3"
                                    type="button"
                                    customColorClass={() =>
                                        'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                                    }
                                    icon={<TbTrash />}
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant="solid"
                                    type="submit"
                                    loading={isSubmiting}
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </Container>
                </CustomerForm>
                <ConfirmDialog
                    isOpen={deleteConfirmationOpen}
                    type="danger"
                    title="Remove customers"
                    onClose={handleCancel}
                    onRequestClose={handleCancel}
                    onCancel={handleCancel}
                    onConfirm={handleConfirmDelete}
                >
                    <p>
                        Are you sure you want to remove this customer? This
                        action can&apos;t be undo.{' '}
                    </p>
                </ConfirmDialog>
            </>
        </div>
    )
}

export default Main

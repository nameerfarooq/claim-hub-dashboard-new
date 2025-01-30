import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { useScrumBoardStore } from '../store/scrumBoardStore'
import sleep from '@/utils/sleep'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import cloneDeep from 'lodash/cloneDeep'
import { createCardObject } from '../utils'
import type { ZodType } from 'zod'

// Define the form schema using Zod
type FormSchema = {
    title: string
}

const validationSchema = z.object({
    title: z.string().min(1, 'Ticket title is required!'),
})

const AddNewTicketContent = () => {
    const { columns, board, closeDialog, updateColumns, setSelectedBoard } =
        useScrumBoardStore()

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSchema>({
        defaultValues: {
            title: '',
        },
        resolver: zodResolver(validationSchema),
    })

    const onSubmit = async ({ title }: FormSchema) => {
        try {
            // Create a new card object
            const newCard = createCardObject()
            newCard.name = title || 'Untitled Card' // Fallback to 'Untitled Card' if title is empty

            // Clone the current columns to avoid direct state mutation
            const newData = cloneDeep(columns)
            newData[board].push(newCard)

            // Update the columns in the store
            updateColumns(newData)

            // Close the dialog and reset the selected board after a delay
            closeDialog()
            await sleep(1000)
            setSelectedBoard('')
        } catch (error) {
            console.error('Failed to add new ticket:', error)
            // Handle errors (e.g., show a toast notification)
        }
    }

    return (
        <div>
            <h5>Add New Ticket</h5>
            <div className="mt-8">
                <Form layout="inline" onSubmit={handleSubmit(onSubmit)}>
                    <FormItem
                        label="Ticket title"
                        invalid={Boolean(errors.title)}
                        errorMessage={errors.title?.message}
                    >
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="text"
                                    autoComplete="off"
                                    {...field}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem>
                        <Button variant="solid" type="submit">
                            Add
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}

export default AddNewTicketContent

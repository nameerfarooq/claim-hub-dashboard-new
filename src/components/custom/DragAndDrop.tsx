import { useMemo, useState, useEffect } from 'react'
import Table from '@/components/ui/Table'
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { MdDragIndicator } from 'react-icons/md'
import { StrictModeDroppable } from '@/components/shared'
import type { ColumnDef } from '@tanstack/react-table'
import type { DropResult } from '@hello-pangea/dnd'

const { Tr, Th, Td, THead, TBody } = Table

interface Task {
    id: number
    task: string
    status: string
    priority: string
    dueDate: string
}

interface DragAndDropProps {
    data: Task[]
    columns: ColumnDef<Task>[]
}

const DragAndDrop = ({
    data: initialData,
    columns: initialColumns,
}: DragAndDropProps) => {
    const [data, setData] = useState(initialData)

    const reorderData = (startIndex: number, endIndex: number) => {
        const newData = [...data]
        const [movedRow] = newData.splice(startIndex, 1)
        newData.splice(endIndex, 0, movedRow)
        setData(newData)
    }

    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result
        if (!destination) return
        reorderData(source.index, destination.index)
    }

    useEffect(() => {
        setData(initialData)
    }, [data])

    const columns = useMemo(() => {
        return [
            {
                id: 'dragger',
                header: '',
                accessorKey: 'dragger',
                cell: (props) => (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    <span {...(props as any).dragHandleProps}>
                        <MdDragIndicator />
                    </span>
                ),
            },
            ...initialColumns,
        ]
    }, [initialColumns])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Table className="w-full">
            <THead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <Th key={header.id} colSpan={header.colSpan}>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext(),
                                )}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </THead>
            <DragDropContext onDragEnd={handleDragEnd}>
                <StrictModeDroppable droppableId="table-body">
                    {(provided) => (
                        <TBody
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {table.getRowModel().rows.map((row) => (
                                <Draggable
                                    key={row.id}
                                    draggableId={row.id}
                                    index={row.index}
                                >
                                    {(provided, snapshot) => (
                                        <Tr
                                            ref={provided.innerRef}
                                            className={
                                                snapshot.isDragging
                                                    ? 'bg-blue-50 shadow-lg'
                                                    : ''
                                            }
                                            style={
                                                provided.draggableProps.style
                                            }
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {row
                                                .getVisibleCells()
                                                .map((cell) => (
                                                    <Td key={cell.id}>
                                                        {flexRender(
                                                            cell.column
                                                                .columnDef.cell,
                                                            cell.getContext(),
                                                        )}
                                                    </Td>
                                                ))}
                                        </Tr>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </TBody>
                    )}
                </StrictModeDroppable>
            </DragDropContext>
        </Table>
    )
}

export default DragAndDrop

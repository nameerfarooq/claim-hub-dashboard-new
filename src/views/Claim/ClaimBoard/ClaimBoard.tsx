import { useState } from 'react'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from '@hello-pangea/dnd'
import BoardColumn from './BoardColumn'
import type { Columns } from './types'
import { initialColumns } from './data'

const ClaimBoard = () => {
    const [columns, setColumns] = useState<Columns>(initialColumns)

    const onDragEnd = (result: DropResult) => {
        const { source, destination, draggableId, type } = result;
    
        if (!destination) return; 
    
        if (type === "COLUMN") {
            const newColumns = [...columns];
            const [movedColumn] = newColumns.splice(source.index, 1);
            newColumns.splice(destination.index, 0, movedColumn);
            setColumns(newColumns);
        } else {
            const sourceColumn = columns.find(col => col.id === source.droppableId);
            const destColumn = columns.find(col => col.id === destination.droppableId);
    
            if (!sourceColumn || !destColumn) return;
    
            const sourceTasks = [...sourceColumn.tasks];
            const [movedTask] = sourceTasks.splice(source.index, 1);
    
            if (!movedTask) return; 
    
            const destTasks = [...destColumn.tasks];
            destTasks.splice(destination.index, 0, movedTask);
    
            const newColumns = columns.map(col => {
                if (col.id === sourceColumn.id) {
                    return { ...col, tasks: sourceTasks }; 
                }
                if (col.id === destColumn.id) {
                    return { ...col, tasks: destTasks }; 
                }
                return col;
            });
    
            setColumns(newColumns);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board" direction="horizontal" type="COLUMN">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex gap-4 p-4 overflow-x-auto"
                    >
                        {columns.map((column, index) => (
                            <Draggable
                                key={column.id}
                                draggableId={column.id}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        className="min-w-[300px] bg-blue-50/50 p-4 rounded-lg"
                                    >
                                        <BoardColumn
                                            columnId={column.id}
                                            title={column.title}
                                            tasks={column.tasks}
                                            dragHandleProps={
                                                provided.dragHandleProps
                                            }
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default ClaimBoard

import React from 'react';
import './App.css';
import initialData from './insuranceData';
import Column from './column';
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'


const Container = styled.div`
  display:flex;
  flex-direction:column;
`

const App2 = () => {
  const [state, setState] = React.useState(initialData)

  const onDragEnd = result => {
    console.log('HOOK')
    console.log("Result DragEnd" , result)
    const { destination, source, draggableId,type } = result;
    console.log('type',type)
    if (!destination) {
      console.log("No destination")
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      console.log("don't Switch ")
      return;
    }

    if(type==='column'){
      console.log('change order')
      const newColumnOrder = Array.from(state.columnOrder)
      newColumnOrder.splice(source.index,1);
      newColumnOrder.splice(destination.index,0,draggableId) 

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      }

      setState(newState)
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];
    if (start === finish) {
      console.log("start", start)
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
      console.log("newTaskIds", newTaskIds)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }
      console.log("newColumn", newColumn)
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        }
      }
      console.log("newState", newState)

      setState(newState)
      return;
    }

    // Move from one list to another 
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    setState(newState)
  }
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId='all-columns' direction='vertical' type='column'>
        {provided => (
          <Container
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {state.columnOrder.map((columnId,index) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks} index={index}/>
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}


export default App2;

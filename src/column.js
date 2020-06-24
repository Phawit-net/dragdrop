import React, { Component } from 'react';
import styled from 'styled-components'
import Task from './task';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { MenuOutlined } from '@ant-design/icons';

const Container = styled.div`
    margin:8px;
    // border:1px solid lightgrey;
    border-radius : 2px;
    background-color:#fff;
`
const Div = styled.div`
  display:flex;
  // padding:8px;
  align-items:center;
  justify-content:space-between;
  border-bottom: 1px solid lightgrey;

`

const Title = styled.div`
    // padding:8px;
`
const TaskList = styled.div`
    padding:8px;
    background-color:${props => (props.isDraggingOver ? 'skyblue' : '#fff')};
`
//snapshot เป็นการcheck การdraggin เพื่อใช้ในการเปลี่ยน style css 

export default class Column extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index} isDragDisabled ={false}>
        {provided => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            data-react-beautiful-dnd-scroll-container={2}
          >
            <Div>
              <Title >{this.props.column.title}</Title>
              <MenuOutlined {...provided.dragHandleProps} />
            </Div>
           
            <Droppable droppableId={this.props.column.id}>
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task, index) =>
                    (<Task key={task.id} task={task} index={index} />))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    )
  }
} 
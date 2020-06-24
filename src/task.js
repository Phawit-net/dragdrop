import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { MenuOutlined } from '@ant-design/icons';
import { Input } from 'antd';


const Container = styled.div`
    padding:8px;
    // border:1px solid lightgrey;
    border-radius : 2px;
    margin-bottom:8px;
    background-color:${props => (props.isDragging ? 'lightgreen' : '#fff')};
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const Div = styled.div`
    display:flex;
`

const Handle = styled.div`
    width:20px;
    height:20px;
    background-color:orange;
    border-radius:4px;
    margin-right:8px;
`

export default class Task extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}

                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <Div>
                        {this.props.task.content}
                        <Input style={{ height:20 }}/>
                        {this.props.task.suffix}
                        </Div>
                        <MenuOutlined {...provided.dragHandleProps} style={{cursor:'grab'}}/>

                    </Container>
                )}
            </Draggable>
        )
    }
} 
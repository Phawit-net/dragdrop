import React from 'react';
import logo from './logo.svg';
import './App.css';
import initialData from './InitialData';
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd'
class App extends React.Component {
  state = initialData;

  onDragEnd = result =>{
    //onDragEnd function คือ ทำการ set State column ใหม่
    console.log("Result DragEnd" , result)
    // ผลลัพธ์ที่ออกมาของการ drag จะบอก destination = เป้าหมายของ column และ indexของ column 
    // source คือที่อยู่ตอนแรก เช่น ย้ายจาก index 0 , column 0  ไป index 1 , column 0
    const {destination , source , draggableId } = result;

    if(!destination){
      console.log("No destination")
      return;
    }

    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){
      console.log("don't Switch ")
      //ถ้า drag แต่ไม่ได้สลับที่(index) ก็จะไม่มีการset state เพื่อนrender ใหม่ มันจะไม่เปลี่ยนที่
      return;
    }

    const column = this.state.columns[source.droppableId];
    console.log("column",column)
    // เป็นการดึงค่า column ออกมา โดนใส่ค่า [id] เป็นการแสงค่า key:value ออกมา
    // เช่น columns['column-1']  => {id:'column-1' , taskIds:[...]ในนี้มีid ของ task ที่อยุ่ในcolumn นั้นๆ , title : 'To do'} 
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index,1)
    newTaskIds.splice(destination.index,0,draggableId)
    //ทำการสร้าง task ใหม่ เพื่อเราจะได้เรียงจัดลำดับใหม่ว่า อันไหนมาก่อน โดยใช้เป็น array 
    // เช่น ['task-2','task-1]  ได้ทำการสลับที่ 1 กับ 2 
    console.log("newTaskIds",newTaskIds)
    
    const newColumn = {
      ...column,
      taskIds : newTaskIds,
    }
    console.log("newColumn",newColumn)
    // เอามาสร้าง column ใหม่เพื่อที่จะได้ข้อมูลแบบเดิม(initial) เพื่อจะเอาไป setState
    const newState = {
      ...this.state,
      columns:{
        ...this.state.columns,
        [newColumn.id]:newColumn,
      }
    }
    console.log("newState",newState)

    this.setState(newState)
  }

  render() {
    return (
      <DragDropContext
        onDragEnd = {this.onDragEnd}
      >
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    );
  }
}

export default App;

const initialData = {
    tasks:{
        'task-1' : {id : 'task-1' , content: 'การรักษาแบบผู้ป่วยใน', suffix:''},
        'task-2' : {id : 'task-2' , content: 'เบี้ยเริ่มต้น', suffix:'ปี'},
        'task-3' : {id : 'task-3' , content: 'ทุนประกันสู้งสุด' , suffix:'บาท'},
    },
    columns :{
        'column-1' : {id :'column-1',title:'ความคุ้มครอง', taskIds : ['task-1']},
        'column-2' : {id :'column-2',title:'รายละเอียดหลัก', taskIds : ['task-2','task-3']},
    },
    columnOrder : ['column-1' , 'column-2'],
};

export default initialData



// const informationSchema = {
//     tasks:{
//         'task-1' : {id : 'task-1' , content: 'การรักษาแบบผู้ป่วยใน', suffix:''},
//         'task-2' : {id : 'task-2' , content: 'เบี้ยเริ่มต้น', suffix:'ปี'},
//         'task-3' : {id : 'task-3' , content: 'ทุนประกันสู้งสุด' , suffix:'บาท'},
//     },
//     columns :{
//         'column-1' : {id :'column-1',title:'ความคุ้มครอง', taskIds : ['task-1']},
//         'column-2' : {id :'column-2',title:'รายละเอียดหลัก', taskIds : ['task-2','task-3']},
//     },
//     columnOrder : ['column-1' , 'column-2'],
// };

// data = 
// {
// "informationSchema": [
//     {
//       "name": "ความคุ้มครอง",
//       "attributes": [
//         {
//           "label": "การสูญเสียอวัยวะจากอุบัติเหตุ",
//           "type": "string",
//           "unit": "บาท"
//         }
//       ]
//     },
//     {
//       "name": "รายละเอียดหลัก",
//       "attributes": [
//         {
//           "label": "เบี้ยเริ่มต้น",
//           "type": "number",
//           "unit": "ปี"
//         },
//         {
//           "label": "ทุนประกันสูงสุด",
//           "type": "number",
//           "unit": "บาท"
//         }
//       ]
//     }
//   ]
// }
//   const formattedSchoolTags = schoolTags.map((item) => ({
//     value: item,
//     label: item,
//   }))
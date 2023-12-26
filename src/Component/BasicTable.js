// import React, { useState } from "react";
// import { Button, Table } from 'antd';
// import { useDispatch } from 'react-redux';


 





// const  BasicTable = () => {
// const {state,setState}=useState()
//     const dispatch=useDispatch();

//     function Table(){
     
//         return dispatch => {
//             return new Promise((resolve, reject) => {
                
//                 fetch(`https://localhost:7240/api/Catagory`
//                     , {
//                         method: 'GET'
//                     }
//                 )
//                     .then(res => {
//                         return res.text()
//                     })
//                     .then(resJson => {
//                         if (resJson) {
//                             resolve(resJson.split('<TrackSummary>')[1].split('</TrackSummary>')[0]);
//                         }
                        
//                     })
//                     .catch(err => { return ""})
//             });
//         }


// };
//     // const columns =useMemo(() => COLUMNS,[])
//     // const data=useMemo(() => MOCK_DATA,[])
//     // const tableInstance=useTable({
//     //    columns,
//     //    data 
//     // })
 
//     // const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance
  
 
    


//     const dataSource = [
//         {
//           key: '1',
//           name: 'Mike',
//           age: 32,
//           address: '10 Downing Street',
//         },
//         {
//           key: '2',
//           name: 'John',
//           age: 42,
//           address: '10 Downing Street',
//         },
//         {
//             key: '3',
//             name: 'Messi',
//             age: 43,
//             address: '11 Downing Street',
//           },
//       ];
      
//       const columns = [
//         {
//           title: 'Name',
//           dataIndex: 'name',
//           key: 'name',
//         },
//         {
//           title: 'Age',
//           dataIndex: 'age',
//           key: 'age',
//         },
//         {
//           title: 'Address',
//           dataIndex: 'address',
//           key: 'address',
//         },
//       ];
//     return (
//     //     <>
//     //  <table {...getTableProps()}>
//     //     <thead>
//     //         {headerGroups.map((headerGroup) =>(
//     //          <tr{...headerGroup.getHeaderGroupProps()}>
//     //          {headerGroup.headers.map((column) => (
//     //           <th{...column.getHeaderProps()}>{column.render('Header')}</th>
//     //          ))}
//     //          </tr>
//     //         ))}
//     //     </thead>
//     //     <tbody {...getTableBodyProps()}>
          
//     //         {rows.map((row) =>{
//     //             prepareRow(row)
//     //             return(
//     //                 <tr{...row.getRowProps()}>
//     //                 {row.cells.map(cell => {
//     //                    return <td{...cell.getCellProps()}>{cell.remder('Cell')}</td>
                        
//     //                 })}
                    
//     //                 </tr>
//     //             )
//     //         })
//     //       }
           
//     //            <td></td>
           
//     //     </tbody>
//     //  </table>
//     //  </>
//     <>
//     <Button OnClick={Table}>
//     Click Me
//  </Button>
//     <Table dataSource={dataSource} columns={columns} />
//     </>
//     )
    
// }

// export default BasicTable;
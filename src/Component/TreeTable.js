
// import React, { useState } from 'react';
// import { Space, Switch, Table,Tree } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//     width: '12%',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     width: '30%',
//     key: 'address',
//   },
// ];
// const data= [
//   {
//     key: 1,
//     name: 'John Brown sr.',
//     age: 60,
//     address: 'New York No. 1 Lake Park',
//     children: [
//       {
//         key: 11,
//         name: 'John Brown',
//         age: 42,
//         address: 'New York No. 2 Lake Park',
//         disabled: true,
//       },
//       {
//         key: 12,
//         name: 'John Brown jr.',
//         age: 30,
//         address: 'New York No. 3 Lake Park',
//         disableCheckbox: true,
//         children: [
//           {
//             key: 121,
//             name: 'Jimmy Brown',
//             age: 16,
//             address: 'New York No. 3 Lake Park',
//             disabled: true,
//           },
//         ],
//       },
//       {
//         key: 13,
//         name: 'Jim Green sr.',
//         age: 72,
//         address: 'London No. 1 Lake Park',
//         children: [
//           {
//             key: 131,
//             name: 'Jim Green',
//             age: 42,
//             address: 'London No. 2 Lake Park',
//             disabled: true,
//             children: [
//               {
//                 key: 1311,
//                 name: 'Jim Green jr.',
//                 age: 25,
//                 address: 'London No. 3 Lake Park',
//                 disabled: true
//               },
//               {
//                 key: 1312,
//                 name: 'Jimmy Green sr.',
//                 age: 18,
//                 address: 'London No. 4 Lake Park',
//                 disableCheckbox: true,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     key: 2,
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     children: [
//         {
//             key:14,
//             name: 'Alex',
//             age:44,
//             address:'Karachi No.2 Sea view'
//         },
//     ],
//   },
// ];

// // rowSelection objects indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
//   onSelect: (record, selected, selectedRows) => {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     console.log(selected, selectedRows, changeRows);
//   },
// };
// const TreeTable = () => {
//     <Tree checkable defaultSelectedKeys={['1-11']} defaultExpandAll data={data} blockNode />
//   const [checkStrictly, setCheckStrictly] = useState(false);
//   return (
//     <>
       
//       <Space
//         align="left"
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
//       </Space>
     
//       <Table
//         columns={columns}
//         rowSelection={{
//           ...rowSelection,
//           checkStrictly,
//         }}
//         dataSource={data}
//       />
//     </>
//   );
// };
// export default TreeTable;
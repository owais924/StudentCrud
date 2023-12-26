import axios from "axios";
import { SmileOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Button, Table,Modal,Input,Form,message, Space,notification} from 'antd';

function StudentCrud () {

 

  const [state,setState]=useState({
    studentId:0,
    StudentName:'',
    PhoneNumber:'',
    StudentAddress:'',
    dataSource:[],
    // searchName:'',
    Addopen:false,
    Editopen:false,
    deleteOpen:false,
    ParentDataSource:[]
    
  })
  const{StudentName,PhoneNumber,StudentAddress,studentId,dataSource,Addopen,Editopen,deleteOpen,ParentDataSource}=state
// const [dataSource,SetDataSource]=useState([])
 const [searchName, setSearchName] = useState();

// const [loading, setLoading] = useState(false);


//   const [Addopen, setAddopen] = useState(false);
  
//   const [Editopen, setEditopen] = useState(false);
//   const [deleteOpen, setDeleteOpen] = useState(false);
 
//   const [visible, setVisible] = useState(false);
  const [api, contextHolder] = notification.useNotification();
 
  const openNotification = () => {
    api.open({
      message: 'Catagory Created Successfully',
     
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const { Search } = Input;

const SearchData =(e)=>{

  let search=e.target.value.toLowerCase();
  setSearchName(search)
   let data=[...ParentDataSource.filter((item) =>
  item.studentName.toLowerCase().includes(e.target.value.toLowerCase())
  )];
  // let data=dataSource.filter((item) =>
  //   item.studentName.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
console.log(data)
 
 setState({...state,dataSource:data})
}


const onSearch=(value)=>{
  SearchData(value);
}





 

 


   
 
  
  const handleInsert = (record) => {
    console.log('Add New Student', record);    
  
   setState({...state,StudentName:'',PhoneNumber:'',StudentAddress:'',Addopen:true})
   
 
  
  };
  

  // const handleOk = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setAddopen(false);
  //   }, 3000);
  // };

  const handleCancel = () => {
    setState({...state,Addopen:false,Editopen:false,DeleteOpen:false})
   
  };
 

           
    
  useEffect(() => {
    (async () => await Load())();
   
    
  }, []);
 
  async function Load() {
    
    const result = await axios.get("https://localhost:7240/api/Catagory/GetAll");
   
    console.log(result.data);
    
  
    setState({...state,dataSource:result.data.catagoriesList,ParentDataSource:result.data.catagoriesList})
  }
 

  const columns = [
            {
              title: 'studentId',
              dataIndex: 'studentId',
              key: 'studentId',
            },
            {
              title: 'phoneNumber',
              dataIndex: 'phoneNumber',
              key: 'phoneNumber',
            },
            {
              title: 'studentAddress',
              dataIndex: 'studentAddress',
              key: 'studentAddress',
            }, 
             {
                title: 'studentName',
                dataIndex: 'studentName',
                key: 'studentName',
              
              }, 
               {
                title: 'totalRowCount',
                dataIndex: 'totalRowCount',
                key: 'totalRowCount',
              },
              {
                title: 'Action',
                
                key: 'Action',
                render: (text, record) => (
                    <span>
                      <Button  type="primary" onClick={() => handleEdit(record)}>Edit</Button>
                      <Button  type="primary" danger  onClick={() => handleDelete(record)}>Delete</Button>
                     
                    </span>
                    
                  ),
              },
          ];
          const handleEdit = (record) => {
            console.log('Edit', record);    
          
            setState({...state,studentId:record.studentId,StudentName:record.studentName,PhoneNumber:record.phoneNumber,StudentAddress:record.studentAddress,Editopen:true})
         
           setTimeout(() => {
           // setEditopen(true);           
          
          }, 2000);
          
          
          };
        
          const handleDelete = (record) => {
            setState({...state,studentId:record.studentId,DeleteOpen:true});
            
          };
         

           const handleInputChange = (obj,e) => {

            

                setState({...state,[obj]:[e.target.value].toString()})      
        
        
         };

         
         const InsertData = async () => {
           
            if (StudentName =='' || PhoneNumber ==''  || StudentAddress ==''  ) {
              
                alert('Please fill in empty field.');
                return;
                
            }
            if (!/^\d+$/.test(PhoneNumber)) {
                alert('Phone number must contain only digits.');
                return;
              }
            try {
              
              const response = await axios.post('https://localhost:7240/api/Catagory/CreateCatagory', {
                studentName: StudentName,
                phoneNumber: PhoneNumber,
                studentAddress: StudentAddress
              });
               
              
              console.log('API Response:', response.data);
              
             Load(state => [...state, response.data]);
             setState({...state,Addopen:false})
             // setAddopen(false);
                //resetForm();

            
            } catch (error) {
              console.error('Error submitting data:', error);
            }
            api.open({
                message: 'Success Message ',
                description:
                  'Student Created Sucessfully',
                  icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                duration: 5,
              });
        
          };
          

              const EditClick = async() => {
              
                if (StudentName =='' || PhoneNumber ==''  || StudentAddress ==''  ) {
              
                    alert('Please fill in empty field.');
                    return;
                }
                if (!/^\d+$/.test(PhoneNumber)) {
                    alert('Phone number must contain only digits.');
                    return;
                  }
                  
                  await axios.put('https://localhost:7240/api/Catagory/UpdateCatagory', {
                      studentId: studentId,
                      studentName: StudentName,
                      phoneNumber: PhoneNumber,
                      studentAddress: StudentAddress
                    })
                    .then(response => {
                        console.log('Update successfully:', response.data);
                        
                        
                       Load(state => [...state, response.data]);
                       
                        setState({...state,Editopen:false})
                      
                        
                        
                    })
                    .catch(error => {
                        console.error('Error updating data:', error);
                    });
                    api.open({
                        message: 'Success Message ',
                        description:
                          'Student Updated Sucessfully',
                          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                        duration: 5,
                      });
                };
            
               
  const confirmDelete = () => {
    api.open({
        message: 'Success Message ',
        description:
          'Student Deleted Sucessfully',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        duration: 5,
      });
    
    axios.delete(`https://localhost:7240/api/Catagory/DeleteCatagory?id=${studentId}`,{
        studentId: studentId
      })
      .then(response => {
        console.log('Student Deleted Sucessfully:',response.data);
        Load(state => [...state, response.data]);
         setState({...state,DeleteOpen:false})
        
       
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        
      });
     };
       
    return (
        <>
           {contextHolder}
           
           <Space direction="vertical" style={{ position: 'absolute', top: 0, left: 0, padding: '16px' }}>
          <Search
          
          placeholder="Search by Name" 
          value={searchName}
          onChange={SearchData}
          allowClear
          enterButton
          size="large"
          onSearch={onSearch}
          
           />
         </Space>
           <Button type="primary"  onClick={() => handleInsert(true)}>
           Add New Student 
            </Button>
           
          <Modal
          
           open={Addopen}
           title="Add New Student"
           onClick={openNotification}
           onOk={InsertData} 
          onCancel={handleCancel}
          
          >
           
          
            

           <label>Student Name</label>
           <Input
            type="text"
        
           value={StudentName}
           onChange={(val)=>handleInputChange('StudentName',val)}
           ></Input>
       
      
         
       <label>Phone Number</label>
       
      <Input
        type="text"
        
        value={PhoneNumber}
        onChange={(val)=>handleInputChange('PhoneNumber',val)}
        ></Input>
      
      
      <label>Student Address</label>
      <Input
        type="text"
        
        value={StudentAddress}
        onChange={(val)=>handleInputChange('StudentAddress',val)}
        
        ></Input>
       
        
        </Modal>

          <Modal
          open={Editopen}
           title="Edit"
           onOk={EditClick}
           onClick={openNotification}
          onCancel={handleCancel}
         // afterOpenChange={onChange}
          >
         
       
         <label>Student Name</label>  
        
           <Input
        type="text"
        
        value={StudentName}
        onChange={(val)=>handleInputChange('StudentName',val)}
        ></Input>
      
      <label>Phone Number</label>
       <Input
        type="number"
        
        value={PhoneNumber}
        onChange={(val)=>handleInputChange('PhoneNumber',val)}
        ></Input>
       
       <label>Student Address</label>
      <Input
        type="text"
        
        value={StudentAddress}
        onChange={(val)=>handleInputChange('StudentAddress',val)}
        
        ></Input>
        
        
          </Modal>
          <Modal
           open={deleteOpen}
          title="Delete Student"
           onOk={confirmDelete}
           onClick={openNotification}
          onCancel={handleCancel}
          >
           <p>Are you sure you want to delete this student?</p>
          
         </Modal>
         
        
       
      
        
      
               
     <Table dataSource={dataSource} columns={columns} />
     
      </>



    );
  }
  
  export default StudentCrud;
import axios from "axios";
import { SmileOutlined } from '@ant-design/icons';
import { useState,useEffect } from "react";
import { Button, Table,Modal,Input,Space,notification} from 'antd';




function StudentProject () {
    const [searchName,setSearchName]=useState();
    
    const [state,setState] =useState({
        dataSource:[],
         studentId:0,
        StudentName:'',
        PhoneNumber:'',
        StudentAddress:'',
        AddOpen:false,
        EditOpen:false,
        OpenDelete:false,
        ParentdataSource:[]

    });
    const{dataSource,ParentdataSource,studentId,StudentName,PhoneNumber,StudentAddress,EditOpen,OpenDelete,AddOpen}=state
    const handleInsert =(record)=>{
        console.log('Add New Student',record);
     setState({...state,StudentName:'',PhoneNumber:'',StudentAddress:'',AddOpen:true})
   //  setAddOpen(true);
    };
    const handleInputChange=(obj,e)=>{
        setState({...state,[obj]:[e.target.value].toString()})
    };
    const handleCancel=()=>{
        setState({...state,EditOpen:false,OpenDelete:false,AddOpen:false})
       // setAddOpen(false)
    };
    const handleEdit =(record)=>{
        console.log('Edit',record);
        setState({...state,studentId:record.studentId,StudentName:record.studentName,PhoneNumber:record.phoneNumber,StudentAddress:record.studentAddress,EditOpen:true})
        setTimeout(() => {
        }, 2000);
    };
    const handledelete=(record)=>{
        setState({...state,studentId:record.studentId,OpenDelete:true})
    };
    const[api,contextHolder]=notification.useNotification();
    const useNotification=()=>{
        api.open({
            message:'Catagory Deleted Successfully',
            icon:<SmileOutlined style={{color:'#108ee9'}}/>,
        });
    };
    const {Search}=Input;
   
    const SearchData =(e)=>{

        let search=e.target.value.toLowerCase();
        setSearchName(search)
         let data=[...ParentdataSource.filter((item) =>
        item.studentName.toLowerCase().includes(e.target.value.toLowerCase())
        )];
        
      console.log(data)
       
       setState({...state,dataSource:data})
      }
    const onSearch=(value)=>{
       SearchData(value);
    }
    useEffect(() => {

        (async () => await Load())();
       
        
      }, []);
      
     async function Load()
     {
      const result= await axios.get('https://localhost:7240/api/Catagory/GetAll');
       console.log(result.data)
       setState({...state,dataSource:result.data.catagoriesList,ParentdataSource:result.data.catagoriesList,AddOpen:false,EditOpen:false,OpenDelete:false})
        
     }
  

     const InsertData = async()=>{
        if(StudentName =='' ||PhoneNumber==''||StudentAddress==''){
            alert("Please fill the empty fields:")
            return;
        }
        if (!/^\d+$/.test(PhoneNumber)) {
            alert('Phone number must contain only digits.');
            return;
          }
        try{

            const response =  await axios.post('https://localhost:7240/api/Catagory/CreateCatagory', {
                studentName:StudentName,
                phoneNumber:PhoneNumber,
                studentAddress:StudentAddress 
            });
            console.log('API Response:',response.data);
          //  
         // setState({...state})
          Load();
           //setAddOpen(false);
        
        }
        catch(error){
            console.error('Data Submitted error:',error);
        }
        api.open({
            message:'Success Message',
            description:'Student Created Successfully',
            icon:<SmileOutlined style={{color:'#108ee9'}}/>,
            duration:5
        });
         
     };
     const EditClick = async()=>{
        if(StudentName =='' ||PhoneNumber==''||StudentAddress==''){
            alert("Please fill the empty fields:")
            return;
        }
        if (!/^\d+$/.test(PhoneNumber)) {
            alert('Phone number must contain only digits.');
            return;
          }
       await axios.put('https://localhost:7240/api/Catagory/UpdateCatagory',{
        studentId:studentId,
        studentName:StudentName,
        phoneNumber:PhoneNumber,
        studentAddress:StudentAddress
       })
       .then(response =>{
        console.log('Updated Succesfully.',response.data);
        Load();
       // setState({...state,EditOpen:false})
       })
       .catch(error =>{
          console.error('error updating data',error);
       });
       api.open({
        message:'Success Message',
        description:'Student Updated Successfully:',
        icon:<SmileOutlined style={{color:'#108ee9'}}/>,
        duration:5
    });
 };
      
    const ConfirmDelete =() =>{
       axios.delete(`https://localhost:7240/api/Catagory/DeleteCatagory?id=${studentId}`,{
        studentId:studentId,
       })
       .then(response=>{
        console.log("Student Deleted Successfully:",response.data)
        Load();
       // setState({...state,OpenDelete:false})
       })
       .catch(error=>{
        console.error("Error Deleted data",error)
       });
       api.open({
        message:'Success Message',
        description:'Student Deleted Successfully:',
        icon:<SmileOutlined style={{color:'#108ee9'}}/>,
        duration:5
    });
}
    const columns=[
        {
            title:'studentId',
            dataIndex:'studentId',
            key:'studentId',
        },
        {
            title:'studentName',
            dataIndex:'studentName',
            key:'studentName',
        },
        {
            title:'phoneNumber',
            dataIndex:'phoneNumber',
            key:'phoneNumber',
        },
        {
            title:'studentAddress',
            dataIndex:'studentAddress',
            key:'studentAddress',
        },
        {
            title:'totalRowCount',
            dataIndex:'totalRowCount',
            key:'totalRowCount',
        },
        {
            title:'Action',
            key:'Action',
            render:(record) =>(
                <span>
                 <Button type="primary" onClick={()=> handleEdit(record)}>Edit</Button>
                 <Button type="primary" danger onClick={()=> handledelete(record)}>Delete</Button>
                </span>

            ),

        },

    ];
    return (
        <>
        {contextHolder}
        <Space direction="verticle" style={{position:'absolute', top:0,right:0,padding:'16px'}}>
            <Search
            placeholder="Search by name"
            value={searchName}
            onChange={SearchData}
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}/>
        </Space>
        <Button type="primary" onClick={()=>handleInsert(true)}  >Add New Student</Button>
        <Modal
        open={AddOpen}
        title="Add New Student"
        onClick={useNotification}
        onOk={InsertData}
        onCancel={handleCancel}>
            <label>StudentName</label>
         <Input
         type="text"
         value={StudentName}
         onChange={(val)=>handleInputChange('StudentName',val)}>
            
         </Input>
         <label>PhoneNumber</label>
         <Input
         type="text"
         value={PhoneNumber}
         onChange={(val)=>handleInputChange('PhoneNumber',val)}>
        
         </Input>
         <label>StudentAddress</label>
         <Input
         type="text"
         value={StudentAddress}
         onChange={(val)=>handleInputChange('StudentAddress',val)}>
         </Input>
        </Modal>
        <Modal
        open={EditOpen}
        title="Edit"
        onClick={useNotification}
        onOk={EditClick}
        onCancel={handleCancel}
        >
            <label>StudentName</label>
            <Input
             type="text"
             value={StudentName}
             onChange={(val)=>handleInputChange('StudentName',val)}>
            </Input>
            <label>PhoneNumber</label>
            <Input
             type="text"
             value={PhoneNumber}
             onChange={(val)=>handleInputChange('PhoneNumber',val)}>
            </Input>
            <label>StudentAddress</label>
            <Input
         type="text"
         value={StudentAddress}
         onChange={(val)=>handleInputChange('StudentAddress',val)}>
         </Input>

        </Modal>
        <Modal
        open={OpenDelete}
        title="Delete Student"
        onClick={useNotification}
        onOk={ConfirmDelete}
        onCancel={handleCancel}>
            <p>Are you sure you want to delete this student?</p>
        </Modal>
        <Table dataSource={dataSource} columns={columns} />
        </>
    );
}
export default StudentProject;
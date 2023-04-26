import axios from "axios"
import { useContext, useState } from "react";
import AuthContext from "../../Context/User/AuthContext";
import { useNavigate } from "react-router-dom";
function CreateTest() {
  const navigate = useNavigate();
  const {auth} = useContext(AuthContext);
  const {email} = auth;
  const [testInfo, setTestInfo] = useState({
    name:'',
    maxMarks:0,
    passMarks:0,
    startTime:'27-04-2023 11:59 AM',
    endTime:'27-04-2023 03:00 PM',
  });
  return (
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'75vw',paddingTop:'200px'}}>
    <form className='creat-test-form' style={{display:'flex',flexDirection:'column',height:'100%',width:'max-content'}}>
      <label>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input style={{padding:'10px',borderRadius:'10px'}} value={testInfo.name} onChange={(e) => setTestInfo(prev=>{return {...prev,name:e.target.value}})} name="name" type="text"/></label>
      <label>Max Marks&nbsp;&nbsp;:<input style={{padding:'10px',borderRadius:'10px'}} name="maxMarks" value={testInfo.maxMarks} onChange={(e) => setTestInfo(prev=>{return {...prev,maxMarks:e.target.value}})} type="number"/></label>
      <label>Pass Marks  &nbsp;:<input style={{padding:'10px',borderRadius:'10px'}} name="passMarks" value={testInfo.passMarks} onChange={(e) => setTestInfo(prev=>{return {...prev,passMarks:e.target.value}})} type="number"/></label>
      <label>Start Time&nbsp;&nbsp;&nbsp;:<input style={{padding:'10px',borderRadius:'10px'}} name="startTime" value={testInfo.startTime} onChange={(e) => setTestInfo(prev=>{return {...prev,startTime:e.target.value}})} type="text"/></label>
      <label>End Time &nbsp;&nbsp;&nbsp;&nbsp;:<input style={{padding:'10px',borderRadius:'10px'}} name="endTime" value={testInfo.endTime} onChange={(e) => setTestInfo(prev=>{return {...prev,endTime:e.target.value}})} type="text"/></label>
      <button style={{borderRadius:'10px'}}  onClick={(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({...testInfo,teacherEmail:email,testType: "MCQ",}))
        axios.post(`http://localhost:8000/createTest`,{...testInfo,teacherEmail:email,testType: "MCQ",})
        .then(function (response) {
          console.log(response,response.data.id,`test/${response.data.id}`)
        if(response.data.id){
          console.log(`test/${response.data.id}`)
          navigate(`/test/${response.data.id}`);
        }
        })
        .catch(function (error) {
          console.log(error);
        });
      }}>Create Test</button>
    </form>
  </div>
  )
}

export default CreateTest
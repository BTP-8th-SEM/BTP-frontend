import UpdateTest from "./UpdateTest";
import AuthContext from "../../Context/User/AuthContext";
import { useContext } from "react";
import TakeTest from "../ViewTest";
function Test() {
    const {auth} = useContext(AuthContext);
    const {role} = auth;
  return (
    <>
    {role=='teacher'?<UpdateTest /> : <TakeTest />}
    </>
  )
}

export default Test
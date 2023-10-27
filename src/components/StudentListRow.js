import Axios from'axios';
import {Link} from "react-router-dom";

function StudentListRow(props){
    const {_id,name,email,rollNo}=props.obj;
    const handleClick = () => {
        Axios.delete("https://crud1-yy21.onrender.com/students/delete-student/" + _id)
        .then((res) => {
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else    
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td class="d-flex justify-content-centet">
        <Link to={"/edit-student/"+_id} class="text-decoration-none text-light">
        <button class="btn btn-success me-3"> 
        Edit</button></Link>
        <button onClick={handleClick} class="btn btn-danger mx-3">Delete</button>
        </td>
        </tr>
    )
}
export default StudentListRow;
import axios from "axios"



const DeleteUser= async (id)=>{
    const url =(`https://users-crud1.herokuapp.com/users/${id}`)
    const req = await axios.delete(url)
    return req

}
export default DeleteUser
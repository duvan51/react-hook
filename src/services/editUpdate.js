import axios from "axios"

const editUpdated = async (id, todoObject)=>{
    
    const url =(`https://users-crud1.herokuapp.com/users/${id}`)
    const req = await axios.put(url, todoObject)
    return req



}
export default editUpdated
import axios from "axios"


const GetUsers= async ()=>{
    const URLs = ("http://users-crud1.herokuapp.com/users/")
    const req = await axios.get(URLs)
    return req


}
export default GetUsers;
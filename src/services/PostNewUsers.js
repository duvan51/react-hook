import axios from "axios"


const PostNewUsers= async (newUser)=>{
    const URLs = ("https://users-crud1.herokuapp.com/users/")
    const req = await axios.post(URLs, newUser)
    return req


}
export default PostNewUsers;
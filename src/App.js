import './App.css';
import UserTable from './components/UserTable.js';
import {useState, useEffect} from 'react'
import AddUserForm from './components/AddUserForm.js';
import GetUsers from './services/GetUsers.js'
import PostNewUsers from './services/PostNewUsers.js'
import DeleteUsers from './services/DeleteUser.js'
import  editUpdate from './services/editUpdate.js'
import Edit from './components/Edit.js'

function App() {
  //services for
  const [datos, setDatos]= useState([])
  const [newUser, setNewUser]= useState({})
  const [idDelete, setIdDelete]=useState(0)

  //edit users
  const [editing, setEditing]=useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: null, 
    first_name:" ", 
    last_name:" ", 
    email:" ", 
    password: " ", 
    birthday:" "
  })
  


  useEffect(()=> {
    GetUsers()
    .then(response => {
        setDatos(response.data); 
    })
    .catch(err =>{
         console.log(err,"este es un error del get");
    })

    PostNewUsers()
    .then(response=>{
    
    })
  },[]) 
 // add users
  useEffect(()=> {
    if(newUser.email){
      PostNewUsers(newUser)
    .then((res)=>{
      setDatos([...datos, res.data])
      setNewUser({})
      
      
    })
    }else {
     
    }
  },[newUser, datos]) 



// delete users
  useEffect(()=> {

    if(idDelete){
      DeleteUsers(idDelete)
    .then((res)=>{
      console.log("se elimino este id: ", idDelete);
      console.log("hola");
    })
    }
    
  },[idDelete])
  const filterUers=()=>{
    
  }

  const handlerOnCreateusers = (event)=>{
    setNewUser(event)
   
  }

//edit users
// useEffect(()=> {
//   editUpdate()
//   .then((us)=>{
//     setEditing(true);
//     setCurrentUser({
//       id: us.id, 
//       first_name:us.first_name, 
//       last_name:us.last_name, 
//       email:us.email, 
//       password:us.password, 
//       birthday:us.birthday
//     })

//   })

// },[])



const editRow = (us) => {
  setEditing(true);
  setCurrentUser({
    id: us.id, 
    first_name:us.first_name, 
    last_name:us.last_name, 
    email:us.email, 
    password:us.password, 
    birthday:us.birthday

  })
}

//delete users

const handledelete=(id)=>{
  setIdDelete(id)
} 




  return (
    <div className="App">
      <h1>CRUD</h1>
      <div className="tableCrud">
      {
            editing ? (
              <div className="add users">
                <h2>EDIT USERS</h2>
                <Edit 
                currentUser={currentUser}
                />
              </div>
           
            ):(
               <div className="add users">
               <h2>ADD USERS</h2>
               <AddUserForm addUsers= {handlerOnCreateusers} />
             </div>
            )
        }
        <div className="viewsUsers">
          <h2>VIEW USERS</h2>
          <UserTable 
            datos={datos} 
            onDelete={handledelete} 
            setEditing={setEditing}
            editRow={editRow}
            />
        </div>       
      </div>
    </div>
  );
}

export default App;

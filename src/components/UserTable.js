import './usertable.css'
const UserTable = ({datos, onDelete, setEditing, editRow}) =>{

  
return(    
    
    <div className="containerTarjts">
       { datos.map(us=>(
        <div className="tarjets" key={us.id}>
            <div className="tarjetsBody">
                <div className="tarjetsBodyMain">
                    <div className="tarjetsBodyMainName">
                        {us.first_name}-{us.last_name}   
                    </div>
                    <div className="tarjetsBodyMainEmail">
                        {us.email}
                    </div>
                    <div className="tarjetsBodyBirthday">   
                        🎉{us.birthday}
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="delete" onClick={()=>onDelete(us.id)}>
                    <i class="fi fi-sr-trash"></i>
                </button>
                <button className="edit" onClick={()=>(setEditing(true))} >
                    <i class="fi fi-br-edit"></i>
                </button>
            </div>

           
        </div>

        ))}
    </div>
    
)   
}
export default UserTable
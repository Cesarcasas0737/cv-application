import { useState } from "react";


function GenInfo(){
    
    const [name,setName] = useState('John Doe');
    const [edit, setEdit] = useState(false);

    function resetGenInfo(){
        setName('John Doe');
    }

    function handleNameChange(e){
        setName(e.target.value);
    }

    
    //make into component?
    const handleEditChange = () => {
        
        setEdit(!edit);
        
    }
    

    function displayPrompt(){
        return(
        <>
        <button onClick={resetGenInfo}>Reset</button>
        {edit ?(
            <div>
                   
            <label>
                First name:{' '}
                
                <input
                value={name}
                onChange={handleNameChange}
                />
            </label>
            </div>           
        ):(
            <div>
            No longer editing 
            </div>
        )}
            

            <div>{name}</div>
            
        </>
        )
    }
     
    //make this into a component instead.
    function editing(){
        
        return(
            <>
            {displayPrompt()}
            <button onClick={handleEditChange}>edit</button>
            </>
        )
    }
    
    return(
        <>
        {editing()}
        </>
    )
}

export default GenInfo;
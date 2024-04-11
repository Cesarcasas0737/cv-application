import { useState } from "react";



//remove all forms of state, needs to get state from parent not this
export default function EditGenInfo(){
    
    const [name,setName] = useState('John Doe');
    const [edit, setEdit] = useState(false);
    
    //const [holdOGName,setOGName] = useState('');

    //want somthing to take in props?

    function resetGenInfo(){
        setName('John Doe');
    }

    function handleNameChange(e){
        setName(e.target.value);
    }
    
    const handleEditChange = () => {   
        setEdit(!edit);
    }
    
    /*
    function holdValues(){
        setOGName(name);

    }

    function deployCanelValues(){
        holdValues();
        setName(setOGName)
        handleEditChange();
    }
    */

    //Event listern when 
    

    

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
            
            <button onClick={console.log('stuff')}>cancel</button>
            <button onClick={handleEditChange}>Submit</button>
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


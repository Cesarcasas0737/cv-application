export default function EditGenInfo({personInfo,setPersonInfo}){


    function handleNameChange(e){
        setPersonInfo({
            ...personInfo,
            name: e.target.value
        })
    }

    function handleEmailChange(e){
        setPersonInfo({
            ...personInfo,
            email: e.target.value
        })
    }

    function handlePhoneChange(e){
        setPersonInfo({
            ...personInfo,
            phone: e.target.value
        })
    }

    return(
        <>
        <div className="edit-form-container">
            <label>
                Name:
                <input
                    value ={personInfo.name}
                    onChange={handleNameChange}  
                />
            </label>

            <label>
                Email:
                <input
                    value ={personInfo.email}
                    onChange={handleEmailChange}  
                />
            </label>

            <label>
                Phone number:
                <input
                    value ={personInfo.phone}
                    onChange={handlePhoneChange}  
                />
            </label>
        </div>
            
        </>
    )
}
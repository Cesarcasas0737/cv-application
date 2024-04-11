

export default function EditExperience({personInfo,setPersonInfo}){

    
    function handleTitleChange(e){
        setPersonInfo({
            ...personInfo,
            experience: {
                ...personInfo.experience,
                title: e.target.value

            }
        })
    }

    function handleDutiesChange(e){
        setPersonInfo({
            ...personInfo,
            experience: {
                ...personInfo.experience,
                duties: e.target.value

            }
        })
    }

    function handleDateChange(e, field) {
        setPersonInfo({
            ...personInfo,
            experience: {
                ...personInfo.experience,
                date: {
                    ...personInfo.experience.date,
                    [field]: e.target.value
                }
            }
        });
    }

    return(
        <>
            <label>
                Title:
                <input
                    value ={personInfo.experience.title}
                    onChange={handleTitleChange}  
                />
            </label>

            <label>
                Duties:
                <input
                    value ={personInfo.experience.duties}
                    onChange={handleDutiesChange}  
                />
            </label>

            <label>
                Start Date:
                <input
                    value={personInfo.experience.date.start}
                    onChange={(e) => handleDateChange(e,'start')}
                />
            </label>

            <label>
                End Date:
                <input
                    value={personInfo.experience.date.end}
                    onChange={(e) => handleDateChange(e,'end')}
                />
            </label>
        </>
    )
}
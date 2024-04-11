
export default function EditEducation({personInfo,setPersonInfo})  {


    function handleUniChange(e){
        setPersonInfo({
            ...personInfo,
            education: {
                ...personInfo.education,
                university: e.target.value

            }
        })
    }

    function handleDegreeChange(e){
        setPersonInfo({
            ...personInfo,
            education: {
                ...personInfo.education,
                degree: e.target.value

            }
        })
    }

    function handleDateChange(e, field) {
        setPersonInfo({
            ...personInfo,
            education: {
                ...personInfo.education,
                date: {
                    ...personInfo.education.date,
                    [field]: e.target.value
                }
            }
        });
    }

    return(
        <>
            <label>
                Uni:
                <input
                    value ={personInfo.education.university}
                    onChange={handleUniChange}  
                />
            </label>

            <label>
                Degree:
                <input
                    value ={personInfo.education.degree}
                    onChange={handleDegreeChange}  
                />
            </label>

            <label>
                Start Date:
                <input
                    value={personInfo.education.date.start}
                    onChange={(e) => handleDateChange(e,'start')}
                />
            </label>

            <label>
                End Date:
                <input
                    value={personInfo.education.date.end}
                    onChange={(e) => handleDateChange(e,'end')}
                />
            </label>
        </>
    )
}

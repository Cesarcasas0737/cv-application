export default function DisplayEducation({
    education
}) {

    return(
        <>

        <div className="subHeader">
            <h2>Education</h2>
        </div>

        <div className="boldNText">
            <strong>{education.university}</strong>
            <p>{education.degree}</p>  
        </div>
        

        <div className="startEndDate">
            <p>{education.date.start} - {education.date.end}</p>
        </div>
        
        </>
    )
}
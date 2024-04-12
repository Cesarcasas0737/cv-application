export default function DisplayExperience({
    experience
}) {

    return(
        <>
        <div className="subHeader">
            <h2>Experience</h2>
        </div>

        <div className="boldNText">
            <strong>{experience.title}</strong>
            <p>{experience.duties}</p>
        </div>
        

        <div className="startEndDate">
            <p>{experience.date.start} - {experience.date.end}</p>
        </div>
        
        </>
    )
}
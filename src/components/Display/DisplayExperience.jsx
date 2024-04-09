export default function DisplayExperience({
    experience
}) {

    return(
        <>
        
        <h2>{experience.title}</h2>
        <p>{experience.duties}</p>
        <p>{experience.date.start}</p>
        <p>{experience.date.end}</p>
        </>
    )
}
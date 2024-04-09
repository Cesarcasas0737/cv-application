export default function DisplayEducation({
    education
}) {

    return(
        <>
        
        <h2>{education.university}</h2>
        <p>{education.degree}</p>
        <p>{education.date.start}</p>
        <p>{education.date.end}</p>
        </>
    )
}
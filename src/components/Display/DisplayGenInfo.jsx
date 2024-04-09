

export default function DisplayGenInfo({
    name,
    email,
    phone
}) {

    return(
        <>
        <div className="resumeHeader">
            <h1>{name}</h1>
            <ul>
                <li>{email}</li>
                <li>{phone}</li>
            </ul>
        </div>
        
        </>
    )
}
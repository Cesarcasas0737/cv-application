import { useState } from "react";

export default function UserInfo() {
    //Change this into a usestate have a diffrent of pure objects

    const [person, setPerson] = useState({
        name: 'John Doe',
        email: 'JohnDoe@email.com',
        phone: '150656434',
        education: {
            university: 'Stanford',
            degree: 'Bachelor of Science',
            date: {
                start: '2019-08',
                end: '2023-11'
            }
        },
        experience: {
            title: 'Research person',
            duties: 'tested stuff on other stuff and made a stuff',
            date: {
                start: '2019-08',
                end: '2023-11'
            }
        }
    });

    return(
        <>
        
        </>
    )
}
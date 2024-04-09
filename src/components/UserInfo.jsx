import { useState } from "react";
import DisplayGenInfo from "./DisplayGenInfo";

export default function UserInfo() {
    const [personInfo, setPersonInfo] = useState({
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
        <DisplayGenInfo
            name = {personInfo.name}
            email = {personInfo.email}
            phone = {personInfo.phone}
        />
        </>
    )
}
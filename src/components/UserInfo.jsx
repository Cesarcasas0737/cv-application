import { useState } from "react";
import DisplayGenInfo from "./Display/DisplayGenInfo";
import DisplayEducation from "./Display/DisplayEducation";
import DisplayExperience from "./Display/DisplayExperience";

import EditGenInfo from "./Edit/EditGenInfo";
import EditEducation from "./Edit/EditEducation";
import EditExperience from "./Edit/EditExperience";


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
        <div className="EditPanel">
            <h1>Edit Panel</h1>
            <EditGenInfo 
            personInfo={personInfo}
            setPersonInfo={setPersonInfo}
            />

            <EditEducation
            personInfo={personInfo}
            setPersonInfo={setPersonInfo}
            />

            <EditExperience 
            personInfo={personInfo}
            setPersonInfo={setPersonInfo}
            />
        </div>
        

        <div className="DisplayPanel">
            <DisplayGenInfo
                name = {personInfo.name}
                email = {personInfo.email}
                phone = {personInfo.phone}
            /> 

            <DisplayEducation
                education={personInfo.education}
            />

            <DisplayExperience
                experience={personInfo.experience}
            />

        </div>
        
        </>
    )
}
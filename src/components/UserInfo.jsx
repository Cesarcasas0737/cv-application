import { useState } from "react";
import DisplayGenInfo from "./Display/DisplayGenInfo";
import DisplayEducation from "./Display/DisplayEducation";
import DisplayExperience from "./Display/DisplayExperience";

import EditGenInfo from "./Edit/EditGenInfo";
import EditEducation from "./Edit/EditEducation";
import EditExperience from "./Edit/EditExperience";


export default function UserInfo() {
    const [personInfo, setPersonInfo] = useState({
        name: 'Jake Ryan',
        email: 'jake@su.edu',
        phone: '1234567890',
        education: {
            university: 'Southwestern University',
            degree: 'Bachelor of Arts in Computer Science',
            date: {
                start: 'Aug 2018',
                end: 'May 2021'
            }
        },
        experience: {
            title: 'Undergraduate Research Assistant',
            duties: 'Devloped a Rest API using FastAPI and PostgreSQL',
            date: {
                start: 'June 2020',
                end: 'Present'
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
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {IconEdit} from "@tabler/icons-react";
import Edit from "../User/Edit.jsx";

function Profile(){
    const [isEditing, setIsEditing] = useState(false);
    const [profileData , setProfileData ] = useState({
        name:"Troy Williamson",
        role:"Software Engineer",
        country:"Tulsa, Oklahoma, USA",
        description:"Im a tech enthusiast with a passion for problem-solving and innovation. Skilled in software\n" +
            "                    engineering and proficient in languages like Python and JavaScript, I thrive in dynamic environments.\n" +
            "                    Outside of work, I enjoy outdoor adventures and experimenting with new recipes."
    });

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    }

    const handleEditSubmit = (editedData) => {
        setProfileData(editedData);
        toggleEditing();
    }
    return (
        <div className="container d-flex text-white ">
            <div className=" p-4  ">
                <img className="rounded-4" src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile pic"
                     width="300"/>
            </div>
            <div className=" p-4  ">
                <h1 className="pb-2">{profileData.name}</h1>
                <h5>{profileData.role}</h5>
                <p>{profileData.country}</p>
                <p>Open for work</p>
                <br/>
                <p>{profileData.description}</p>

                <button onClick={toggleEditing} className="my-3 bg-dark text-white rounded-2 border-0">
                    <i>
                        <IconEdit/>
                    </i>
                    edit
                </button>{isEditing && <Edit onSubmit={handleEditSubmit}/>}
            </div>
        </div>
    );
}

export default Profile;
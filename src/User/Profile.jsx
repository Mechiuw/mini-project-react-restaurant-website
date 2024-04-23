// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {IconEdit} from "@tabler/icons-react";
import Edit from "./edit/edit.jsx";

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
        <div className="container d-flex ">
            <div className=" p-4  ">
                <img className="rounded-4" src="/src/assets/profile/aaa.png" alt="profile pic"
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
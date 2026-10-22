import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [about, setAbout] = useState(user.about);
    const [skill, setSkill] = useState(user.skill);
    const [error, setError] = useState("");
    const [toast, setToast] = useState(false);

    const dispatch = useDispatch();

    const saveProfile = async () => {
        setError("")
        try {
            const res = await axios.patch(BASE_URL + "profile/edit", { firstName, lastName, age, gender, photoUrl, about, skill }, {
                withCredentials: true,
            })

            dispatch(addUser(res?.data?.data))
            setToast(true);

            setTimeout(() => {
                setToast(false);
            }, 3000)
        }
        catch (err) {
            setError(err.response.data);
        }
    }
    return (
        <>
            <div className="flex justify-center my-10">
                <div className="flex justify-center mx-10">
                    <div className="card card-border bg-base-300 w-96">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Profile</h2>
                            <div>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">First Name</legend>
                                    <input
                                        type="text"
                                        value={firstName}
                                        className="input"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="First Name"
                                    />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Last Name</legend>
                                    <input
                                        type="text"
                                        value={lastName}
                                        className="input"
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Last Name"
                                    />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Age</legend>
                                    <input
                                        type="text"
                                        value={age}
                                        className="input"
                                        onChange={(e) => setAge(e.target.value)}
                                        placeholder="Age"
                                    />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Gender</legend>
                                    <input
                                        type="text"
                                        value={gender}
                                        className="input"
                                        onChange={(e) => setGender(e.target.value)}
                                        placeholder="Gender"
                                    />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">PhotoUrl</legend>
                                    <input
                                        type="text"
                                        value={photoUrl}
                                        className="input"
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                        placeholder="PhotoUrl"
                                    />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">About</legend>
                                    <textarea className="textarea"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        placeholder="About"></textarea>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Skill</legend>
                                    <input
                                        type="text"
                                        value={skill}
                                        className="input"
                                        onChange={(e) => setSkill(e.target.value)}
                                        placeholder="Skill"
                                    />
                                </fieldset>
                            </div>
                            <p className="text-red-500">{error}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary" onClick={saveProfile}>
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div> <UserCard user={{ firstName, lastName, age, gender, photoUrl, about, skill }} /></div>
            </div>
            {toast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Edit Profile successfully.</span>
                </div>
            </div>}
        </>
    )
}

export default EditProfile;
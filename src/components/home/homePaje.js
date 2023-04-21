import React, { useState, useEffect, useContext } from 'react'
//firebase
import { auth } from '../../firebase'
//ruterDom
import { useNavigate } from 'react-router-dom'
//chatengine
import { ChatEngine } from 'react-chat-engine'
//axios
import axios from 'axios'
//context
import { AuthContext } from '../../context/AuthContext'


//comp
import NavBar from '../navBar/NavBar'

//loding
import { PacmanLoader } from 'react-spinners'



export const HomePaje = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useNavigate();



    useEffect(() => {
        if (!user) {
            history("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "27480074-aad9-43a7-a76c-ac37bf2f405e",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append("email", user.email);
                formdata.append("username", user.email);
                formdata.append("secret", user.uid);
                const getFile = async () => {
                    const response = await fetch(user.photoURL);
                    const data = await response.blob();
                    return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
                }
                getFile()
                    .then(avatar => {
                        formdata.append("avatar", avatar, avatar.name)
                        axios.post("https://api.chatengine.io/users/", formdata, {
                            headers: {
                                "private-key": "d704c537-6ce9-4f48-a808-0ebc38e7b34a"
                            }
                        })
                            .then(() => setLoading(false))
                            .catch(error => console.log(error))

                    })
            })

    }, [user, history])



    const logOut = async () => {
        await auth.signOut();
        history("/")
    }

    if (!user || loading) return <PacmanLoader
        color="#846b2a"
        cssOverride={{
            margin: 'auto',
            marginTop: '50vh'
        }}
        size={50}
    />




    return (<>
        <NavBar logOut={logOut} />
        <ChatEngine
            height="90vh"
            projectID="27480074-aad9-43a7-a76c-ac37bf2f405e"
            userName={user.email}
            userSecret={user.uid}
        />
    </>
    );
}





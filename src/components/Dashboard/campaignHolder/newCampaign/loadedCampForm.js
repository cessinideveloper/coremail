import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import store from '../../../../store/store'
import { storeCampaign, updateCampaign } from '../../../../actions'
import { useSpring, animated } from 'react-spring'
import axios from 'axios'

const LoadedCampForm = ({ newCampaignData, setNewCampaignData, loadTheTemplate, loaded, setLoaded }) => {
    const [emailCSV, setEmailCSV] = useState([])

    const [upNexitButtonStyle, setUpNexitButtonStyle] = useSpring(() => ({ text: "Update & Exit", backgroundColor: "#365194ff" }))
    const [upNsendButtonStyle, setUpNsendButtonStyle] = useSpring(() => ({ text: "Update & Send", backgroundColor: "#365194ff" }))

    useEffect(() => {
        const loadedCamp = store.getState().loadedCampaign ? store.getState().loadedCampaign.campId : null
        if (loadedCamp) {
            if (!loaded) {
                console.log("getting into if")
                const first = store.getState().campaigns.filter(camp => camp.id === loadedCamp)
                setNewCampaignData(first[0])
                setLoaded(true)
            }
        }
        setEmailCSV(store.getState().emailList)
    }, [])

    const options = emailCSV ? emailCSV.map(list =>
        <option key={list.id} value={list.id}>{list.name}</option>
    ) : null;


    const camNameRef = useRef(null)
    const SenderNameRef = useRef(null)
    const emailSubRef = useRef(null)
    const SenderEmailRef = useRef(null)

    console.log(newCampaignData.campName)


    const { push } = useHistory(null)
    return (
        <>
            <div className="topNavCam  subWrapperCam">
                <div className="createCamp   topButtonsCam subWrapperCam"
                    onClick={() => push("/dashboard")}
                >
                    Back
                </div>
                {/* <div className="addEmailList topButtonsCam subWrapperCam">
                    <p>Save & Next</p>
                </div> */}

            </div>
            <div className="dashBodyMainCam  subWrapperCam">
                <div className="camFormHolder">
                    <form className="formFields  Fields">
                        <div className="leftFields Fields">
                            <div className="subField Fields">
                                <label htmlFor="camName">Campaign Name</label>
                                <input defaultValue={newCampaignData.name} ref={camNameRef} type="text" id="camName" name="camName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, name: e.target.value })}
                                />
                            </div>
                            <div className="subField Fields">
                                <label htmlFor="SenderName">Sender Name</label>
                                <input defaultValue={newCampaignData.sender_name} ref={SenderNameRef} type="text" id="SenderName" name="SenderName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, sender_name: e.target.value })}
                                />
                            </div>
                            <div className="subField Fields">
                                <label htmlFor="emailSub">Email Subject</label>
                                <input defaultValue={newCampaignData.email_subject} ref={emailSubRef} type="text" id="emailSub" name="camName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, email_subject: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="rightFields Fields">
                            <div className="subField Fields">
                                <label htmlFor="SenderEmail">Sender Email</label>
                                <input defaultValue={newCampaignData.sender_email} ref={SenderEmailRef} type="text" id="SenderEmail" name="SenderEmail"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, sender_email: e.target.value })}
                                />
                            </div>
                            <div className="subFieldLong Fields">
                                <label htmlFor="emailList">Email Attachment</label>

                                <input type="file" id="emailList"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, attachment: e.target.files[0] })}
                                />
                            </div>
                            <div className="subField Fields">
                                <label htmlFor="emailLists">Email List</label>
                                {console.log(newCampaignData.camp_emails)}
                                <select id="emailLists" name="emailLists" value={newCampaignData.camp_emails}
                                    onChange={e => {
                                        console.log("hey hey", newCampaignData.camp_emails)
                                        setNewCampaignData({ ...newCampaignData, camp_emails: e.target.value })
                                    }
                                    }
                                >
                                    {options}
                                </select>
                            </div>
                            <div className="subFieldLong Fields">
                                <label htmlFor="emailBody">Email Body</label>
                                <div id="emailBody" className="desBody Fields formButtonsCam"
                                    onClick={() => {

                                        push("/dashboard/loadedcamp/maileditor")
                                        setTimeout(() => {
                                            loadTheTemplate(newCampaignData.temp_json)
                                        }, 500)
                                    }}
                                >
                                    Deisgn Body
                            </div>
                            </div>
                        </div>
                    </form>
                    <div className="formButtons Fields">
                        <animated.div className="sendButton Fields formButtonsCam"
                            style={upNsendButtonStyle}
                            onClick={() => {
                                //Updating
                                setUpNsendButtonStyle({ transform: "scaleX(1)", text: "Updating...", backgroundColor: "#389685ff" })
                                setTimeout(() => {
                                    //console.log(newCampaignData.ht)
                                    let dataForm = new FormData
                                    let Jda = JSON.stringify(newCampaignData.temp_json)
                                    dataForm.append("name", newCampaignData.name)
                                    dataForm.append("sender_name", newCampaignData.sender_name)
                                    dataForm.append("sender_email", newCampaignData.sender_email)
                                    dataForm.append("email_subject", newCampaignData.email_subject)
                                    dataForm.append("my_customer", store.getState().userData.id)
                                    dataForm.append("camp_emails", newCampaignData.camp_emails)
                                    dataForm.append("email_message", "will see")
                                    dataForm.append("temp_json", Jda)
                                    dataForm.append("ht", newCampaignData.ht)
                                    if (typeof (!newCampaignData.attachment) === 'string') {
                                        dataForm.append("attachment", newCampaignData.attachment)
                                    }
                                    axios.put(`https://emailengine2020.herokuapp.com/camprud/${store.getState().loadedCampaign.campId}/`,
                                        dataForm
                                    ).then(res => {
                                        console.log(res)
                                        console.log("reached res")

                                        store.dispatch(updateCampaign(store.getState().userData.id))

                                        setUpNsendButtonStyle({ text: "Sending...", backgroundColor: "#389685ff" })
                                        axios.post(`https://emailengine2020.herokuapp.com/campid/${store.getState().loadedCampaign.campId}/`).then(res => {
                                            setTimeout(() => { setUpNsendButtonStyle({ text: "Sent!", backgroundColor: "#656565ff" }) }, 1000)
                                            setTimeout(() => { push('/dashboard') }, 1300)
                                        })
                                    })
                                        .catch(er => {
                                            console.log(er)
                                            console.log("reached er")
                                            if (er.response) {
                                                console.log(er.response.data)
                                                // if (er.response.status === 500) {
                                                //     document.getElementsByClassName("addEmailList topButtonsCam subWrapperCam")[0].click()
                                                //     // axios.post("https://emailengine2020.herokuapp.com/newcampaign/", dataForm).then(res => res.data)
                                                // }
                                            }
                                        }
                                        )

                                }, 0)
                                //only send
                                // setUpNsendButtonStyle({ text: "Sending...", backgroundColor: "#389685ff" })
                                // axios.post(`https://emailengine2020.herokuapp.com/campid/${newCampaignData.id}/`).then(res => {
                                //     setTimeout(() => { setUpNsendButtonStyle({ text: "Sent!", backgroundColor: "#656565ff" }) }, 1000)
                                //     setTimeout(() => { push('/dashboard') }, 1300)
                                // })
                            }}
                        >
                            {upNsendButtonStyle.text}{/* {update ? "Update & Send" : "Save & Send"} */}
                        </animated.div>
                        <animated.div className="createButton Fields formButtonsCam"
                            style={upNexitButtonStyle}
                            onClick={() => {
                                setUpNexitButtonStyle({ transform: "scaleX(1)", text: "Updating...", backgroundColor: "#389685ff" })
                                setTimeout(() => {
                                    //console.log(newCampaignData.ht)
                                    let dataForm = new FormData
                                    let Jda = JSON.stringify(newCampaignData.temp_json)
                                    dataForm.append("name", newCampaignData.name)
                                    dataForm.append("sender_name", newCampaignData.sender_name)
                                    dataForm.append("sender_email", newCampaignData.sender_email)
                                    dataForm.append("email_subject", newCampaignData.email_subject)
                                    dataForm.append("my_customer", store.getState().userData.id)
                                    dataForm.append("camp_emails", newCampaignData.camp_emails)
                                    dataForm.append("email_message", "will see")
                                    dataForm.append("temp_json", Jda)
                                    dataForm.append("ht", newCampaignData.ht)
                                    if (typeof (!newCampaignData.attachment) === 'string') {
                                        dataForm.append("attachment", newCampaignData.attachment)
                                    }
                                    axios.put(`https://emailengine2020.herokuapp.com/camprud/${store.getState().loadedCampaign.campId}/`,
                                        dataForm
                                    ).then(res => {
                                        console.log(res)
                                        console.log("reached res")

                                        store.dispatch(updateCampaign(store.getState().userData.id))

                                        setTimeout(() => {
                                            setUpNexitButtonStyle({ text: "Done!", backgroundColor: "#365194ff" })

                                        }, 1000)
                                        setTimeout(() => { push('/dashboard') }, 1300)
                                    })
                                        .catch(er => {
                                            console.log(er)
                                            console.log("reached er")
                                            if (er.response) {
                                                //console.log(er.response.data)
                                                // if (er.response.status === 500) {
                                                //     document.getElementsByClassName("addEmailList topButtonsCam subWrapperCam")[0].click()
                                                //     // axios.post("https://emailengine2020.herokuapp.com/newcampaign/", dataForm).then(res => res.data)
                                                // }
                                            }
                                        }
                                        )

                                }, 0)
                            }}
                        >
                            {upNexitButtonStyle.text}
                        </animated.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoadedCampForm;
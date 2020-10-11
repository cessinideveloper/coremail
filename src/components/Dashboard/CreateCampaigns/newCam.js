import React, { useState, useRef } from 'react';
import './newcam.css'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import EmailEditor from 'react-email-editor'
import axios from 'axios'
import store from '../../../store/store'
import CampForm from './campaignForm'
import { addCampaign } from '../../../actions'
import { useSpring, animated } from 'react-spring'

const NewCam = () => {
    const [sendButtonStyle, setSendButtonStyle] = useSpring(() => ({ transform: "scaleX(1)", text: "Save & Send", backgroundColor: "rgb(23, 38, 74)" }))
    const [saveNexitButtonStyle, setSaveNexitButtonStyle] = useSpring(() => ({ transform: "scaleX(1)", text: "Save & Exit", backgroundColor: "rgb(23, 38, 74)" }))
    const [newCampaignData, setNewCampaignData] = useState({
        senderName: "",//string
        senderEmail: "",//string
        campName: "",//string
        emailSub: "",//string
        emailListCVS: 0,//number
        emailAttachment: null,//null
        emailBodyJSON: null,//JSONobject
        emailBodyHTML: null,//HTMLobject 
    })
    const { push } = useHistory(null)
    const emailEditorRef = useRef(null);

    return (
        <Switch>

            <Route path="/dashboard/newcamp/maileditor" render={() =>
                <>
                    <div className="topNavCam  subWrapperCam">
                        <div className="createCamp   topButtonsCam subWrapperCam"
                            onClick={() => push("/dashboard/newcamp")}
                        >
                            Back
                        </div>
                        <animated.div className="topButtonsCam subWrapperCam saveAndsend"
                            style={sendButtonStyle}
                            onClick={() => {
                                setSendButtonStyle({ transform: "scaleX(1)", text: "Sending...", backgroundColor: "#ff9f1bff" });
                                emailEditorRef.current.editor.exportHtml(({ design, html }) => {
                                    setNewCampaignData({ ...newCampaignData, emailBodyJSON: design, emailBodyHTML: html })
                                    setTimeout(() => {
                                        let dataForm = new FormData
                                        let Jda = JSON.stringify(newCampaignData.emailBodyJSON)
                                        dataForm.append("name", newCampaignData.campName)
                                        dataForm.append("sender_name", newCampaignData.senderName)
                                        dataForm.append("sender_email", newCampaignData.senderEmail)
                                        dataForm.append("email_subject", newCampaignData.emailSub)
                                        dataForm.append("my_customer", store.getState().userData.id)
                                        dataForm.append("camp_emails", Number(newCampaignData.emailListCVS))
                                        dataForm.append("email_message", "will see")
                                        dataForm.append("temp_json", Jda)
                                        dataForm.append("ht", html)
                                        dataForm.append("attachment", newCampaignData.emailAttachment)//newCampaignData.emailAttachment)
                                        axios.post("https://emailengine2020.herokuapp.com/newcampaign/",
                                            dataForm
                                        ).then(res => {
                                            console.log(res.data, res.data.id)
                                            store.dispatch(addCampaign())
                                            setSendButtonStyle({ transform: "scaleX(1)", text: "Done!", backgroundColor: "#365194ff" });
                                            setTimeout(() => { push('/dashboard') }, 200)
                                            axios.post(`https://emailengine2020.herokuapp.com/campid/${res.data.id}/`)
                                        })
                                            .catch(er => {
                                                if (er.response) {
                                                    if (er.response.status === 500) {
                                                        setSendButtonStyle({ transform: "scaleX(1)", text: "Wait Trying Again", backgroundColor: "#a42020ff" });
                                                        document.getElementsByClassName("saveAndsend")[0].click()
                                                        // axios.post("https://emailengine2020.herokuapp.com/newcampaign/", dataForm).then(res => res.data)
                                                    }
                                                }
                                            }
                                            )

                                    }, 0)

                                })
                            }}


                        >
                            {sendButtonStyle.text}
                        </animated.div>
                        <animated.div className="topButtonsCam subWrapperCam saveAndExit"
                            style={saveNexitButtonStyle}
                            onClick={() => {
                                setSaveNexitButtonStyle({ transform: "scaleX(1)", text: "Sending...", backgroundColor: "#ff9f1bff" });
                                emailEditorRef.current.editor.exportHtml(({ design, html }) => {
                                    setNewCampaignData({ ...newCampaignData, emailBodyJSON: design, emailBodyHTML: html })
                                    setTimeout(() => {
                                        let dataForm = new FormData
                                        let Jda = JSON.stringify(newCampaignData.emailBodyJSON)
                                        dataForm.append("name", newCampaignData.campName)
                                        dataForm.append("sender_name", newCampaignData.senderName)
                                        dataForm.append("sender_email", newCampaignData.senderEmail)
                                        dataForm.append("email_subject", newCampaignData.emailSub)
                                        dataForm.append("my_customer", store.getState().userData.id)
                                        dataForm.append("camp_emails", Number(newCampaignData.emailListCVS))
                                        dataForm.append("email_message", "will see")
                                        dataForm.append("temp_json", Jda)
                                        dataForm.append("ht", html)
                                        dataForm.append("attachment", newCampaignData.emailAttachment)//newCampaignData.emailAttachment)
                                        axios.post("https://emailengine2020.herokuapp.com/newcampaign/",
                                            dataForm
                                        ).then(res => {
                                            console.log(res.data)
                                            store.dispatch(addCampaign())
                                            setSendButtonStyle({ transform: "scaleX(1)", text: "Done!", backgroundColor: "#365194ff" });
                                            setTimeout(() => { push('/dashboard') }, 200)
                                        })
                                            .catch(er => {
                                                if (er.response) {
                                                    if (er.response.status === 500) {
                                                        alert(er.response.status)
                                                        //document.getElementsByClassName("sendAndExit")[0].click()
                                                        // axios.post("https://emailengine2020.herokuapp.com/newcampaign/", dataForm).then(res => res.data)
                                                    }
                                                }
                                            }
                                            )

                                    }, 0)

                                })
                            }
                            }

                        >
                            {saveNexitButtonStyle.text}
                        </animated.div>

                    </div>
                    <div className="dashBodyMain  subWrapper">
                        <EmailEditor ref={emailEditorRef}></EmailEditor>
                    </div>
                </>
            }>
            </Route>
            <Route path="/dashboard/newcamp" render={() =>
                <CampForm newCampaignData={newCampaignData}
                    setNewCampaignData={setNewCampaignData}
                ></CampForm>}>
            </Route>
        </Switch>
    );
}

export default NewCam;
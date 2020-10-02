import React, { useState, useRef } from 'react';
import './newcam.css'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import EmailEditor from 'react-email-editor'
import axios from 'axios'
import store from '../../../../store/store'
import CampForm from './campaignForm'
import { writeFile } from 'fs-web'


const NewCam = () => {
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
                        <div className="addEmailList topButtonsCam subWrapperCam"
                            onClick={() =>
                                emailEditorRef.current.editor.exportHtml(({ design, html }) => {
                                    setNewCampaignData({ ...newCampaignData, emailBodyJSON: design, emailBodyHTML: html })
                                    setTimeout(() => {
                                        let dataForm = new FormData
                                        let Jda = JSON.stringify(newCampaignData.emailBodyJSON)
                                        const newHtml = async () => await (writeFile("sendPack.html", html))
                                        console.log(newHtml())
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
                                        ).catch(er => {
                                            if (er.response) {
                                                if (er.response.status === 500) {
                                                    document.getElementsByClassName("addEmailList topButtonsCam subWrapperCam")[0].click()
                                                }
                                            }
                                        }
                                        )

                                        console.log({
                                            name: newCampaignData.campName,
                                            sender_name: newCampaignData.senderName,
                                            sender_email: newCampaignData.senderEmail,
                                            email_subject: newCampaignData.emailSub,
                                            my_customer: store.getState().userData.id,
                                            camp_emails: Number(newCampaignData.emailListCVS),
                                            email_message: "will see",
                                            temp_json: design,
                                            ht: newCampaignData.emailBodyHTML,
                                            attachment: newCampaignData.emailAttachment
                                        })
                                    }, 0)

                                })
                            }

                        >
                            Save & Send
                        </div>

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
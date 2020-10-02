import React, { useState, useRef, useEffect } from 'react';
import './newcam.css'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import EmailEditor from 'react-email-editor'
import store from '../../../../store/store'

import LoadedCampForm from './loadedCampForm'

const LoadedCamp = () => {

    const initialState = {
        senderName: "",//string
        senderEmail: "",//string
        campName: "",//string
        emailSub: "",//string
        emailListCVS: null,//file
        emailBodyJSON: null,//JSONobject
        emailBodyHTML: null,//HTMLobject 
    }
    const [newCampaignData, setNewCampaignData] = useState(initialState)
    const [loadFunc, setloadFunc] = useState(null)


    const { push } = useHistory(null)

    const emailEditorRef = useRef(null);



    const loadTheTemplate = (data) => {
        emailEditorRef.current.editor.loadDesign(data)
    }

    // useEffect(() => {
    //     console.log(emailEditorRef.current.editor)
    // })


    return (
        <Switch>

            <Route path="/dashboard/loadedcamp/maileditor" render={() =>
                <>
                    <div className="topNavCam  subWrapperCam">
                        <div className="createCamp   topButtonsCam subWrapperCam"
                            onClick={() => push("/dashboard/loadedcamp")}

                        >
                            Back
                        </div>
                        <div className="addEmailList topButtonsCam subWrapperCam"
                            onClick={() => {
                                console.log(emailEditorRef.current)
                                emailEditorRef.current.editor.exportHtml(({ design, html }) => {

                                    setNewCampaignData({ ...newCampaignData, emailBodyJSON: design, emailBodyHTML: html })

                                    push("/dashboard/loadedcamp")
                                })
                            }
                            }

                        >
                            Save & Next
                        </div>

                    </div>
                    <div className="dashBodyMain  subWrapper">
                        <EmailEditor ref={emailEditorRef}></EmailEditor>
                    </div>
                </>
            }>
            </Route>
            <Route path="/dashboard/loadedcamp" render={() =>
                <LoadedCampForm newCampaignData={newCampaignData}
                    setNewCampaignData={setNewCampaignData}
                    loadTheTemplate={loadTheTemplate}
                ></LoadedCampForm>}>
            </Route>
        </Switch>
    );
}

export default LoadedCamp;
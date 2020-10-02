import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import store from '../../../../store/store'
import { storeCampaign } from '../../../../actions'

const LoadedCampForm = ({ newCampaignData, setNewCampaignData, loadTheTemplate }) => {

    useEffect(() => {
        console.log(store.getState())
        const loadedCamp = store.getState().loadedCampaign ? store.getState().loadedCampaign.campId : null
        console.log(loadedCamp)
        if (loadedCamp) {
            const first = store.getState().campaigns.filter(camp => camp.id === loadedCamp)
            setNewCampaignData(first[0])
            console.log("reached", store.getState().campaigns.filter(camp => camp.id === loadedCamp))
        }
    }, [])

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

                                <input type="file" id="emailList" files={[newCampaignData.attachment]}
                                    onChange={e => setNewCampaignData({ ...newCampaignData, attachment: e.target.files[0] })}
                                />
                            </div>
                            <div className="subFieldLong Fields">
                                <label htmlFor="emailBody">Email Body</label>
                                {/* <select id="camName" name="camName">
                                <option value="NoEmailList">Please Create Email List</option>
                            </select> */}
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
                        <div className="sendButton Fields formButtonsCam"

                        >
                            Update & Send{/* {update ? "Update & Send" : "Save & Send"} */}
                        </div>
                        <div className="createButton Fields formButtonsCam"
                            onClick={() => {
                                store.dispatch(storeCampaign(newCampaignData));
                                push("/dashboard")
                            }
                            }
                        >
                            Update & Exit {/* {update ? "Update & Exit" : "Save & Exit"} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoadedCampForm;
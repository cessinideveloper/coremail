import React from 'react';
import './emaillist.css';
import axios from 'axios'
import { deleteEmailList } from '../../../../../actions'
import store from '../../../../../store/store'

const EmailList = ({ emailId, listName, file }) => {

    return (
        <div className="content">
            <div className="campNameEmail">
                {listName}
            </div>
            <div className="loadButtonHolderEmail">
                <div className="loadButtonEmail"
                    onClick={() => {
                        axios.delete(`https://emailengine2020.herokuapp.com/emailrud/${emailId}/`)
                            .then(
                                res => {
                                    console.log(res)
                                    store.dispatch(deleteEmailList(emailId))
                                }

                            )
                    }}
                >
                    Delete
                    {/* <a className="downloader" herf={file} dowload></a> */}
                </div>
            </div>
        </div>
    );
}

export default EmailList;
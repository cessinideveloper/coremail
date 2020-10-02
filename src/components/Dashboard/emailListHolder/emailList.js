import React from 'react';
import './emaillist.css'

const EmailList = ({ campId, listName, file }) => {

    return (
        <div className="content">
            <div className="campName">
                {listName}
            </div>
            <div className="loadButtonHolder">
                <div className="loadButton"
                // onClick={() => {
                //     null
                // }}
                >
                    Download
                    {/* <a className="downloader" herf={file} dowload></a> */}
                </div>
            </div>
        </div>
    );
}

export default EmailList;
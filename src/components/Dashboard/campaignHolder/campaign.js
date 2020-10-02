import React, { useState } from 'react';
import './campaign.css'
import store from '../../../store/store'
import { loadCampaign } from '../../../actions'
import { useHistory } from 'react-router-dom'

const Campaign = ({ campId, campName }) => {

    const { push } = useHistory(null)


    return (
        <div className="content">
            <div className="campName">
                {campName}
            </div>
            <div className="loadButtonHolder">
                <div className="loadButton"
                    onClick={() => {
                        store.dispatch(loadCampaign({ campId, campName }));
                        push("/dashboard/loadedcamp")
                    }}
                >
                    Load
                </div>
            </div>
        </div>
    );
}

export default Campaign;
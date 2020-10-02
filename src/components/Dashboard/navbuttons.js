import React from 'react';
import { useHistory } from 'react-router-dom'

import './navbuttons.css'
import Champaigns from './campaignHolder/campaignHolder'
import EmailLists from './emailListHolder/emailListHolder'


const NavButtons = () => {

    const { push } = useHistory(null)

    return (
        <>
            <div className="topNav  subWrapper">

            </div>
            <div className="dashBodyMain  subWrapper">
                <div className="leftDash  subDash">
                    <div className="contentholder">
                        <div className="contentButtons">
                            Champaigns
                        </div>
                        <div className="contentActual">
                            <Champaigns></Champaigns>
                        </div>
                    </div>
                </div>
                <div className="rightDash subDash">
                    <div className="contentholder">
                        <div className="contentButtons">
                            Email Lists
                        </div>
                        <div className="contentActual">
                            <EmailLists></EmailLists>
                        </div>
                    </div>
                </div>
                {/* <div className="createCamp   midButtons subWrapper"
                    onClick={() => push("/dashboard/newcamp")}
                >
                    Create Champaign
                </div>
                <div className="addEmailList midButtons subWrapper">
                    Add Emaillist
                </div> */}
            </div>
        </>
    );
}

export default NavButtons;
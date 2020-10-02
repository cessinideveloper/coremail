import React, { useEffect, useState } from 'react';
import Campaign from './campaign'
import store from '../../../store/store'

const Campaigns = () => {
    const [camps, setCamps] = useState(null)


    useEffect(() => {
        setCamps(store.getState().campaigns)
        console.log(store.getState().campaigns)
    })

    store.subscribe(() => {
        setCamps(store.getState().campaigns)
    })

    return (
        <div className="subContentActual">
            {camps ? camps.map(camp => <Campaign
                key={camp.id}
                campId={camp.id}
                campName={camp.name}></Campaign>) : null}
        </div>
    );
}

export default Campaigns;
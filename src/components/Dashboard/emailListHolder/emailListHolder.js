import React, { useState, useEffect } from 'react';
import store from '../../../store/store'
import EmailList from './emailList'

const EmailLists = () => {
    const [lists, setLists] = useState(null)

    store.subscribe(() => {
        setLists(store.getState().emailList)
    })
    useEffect(() => {
        setLists(store.getState().emailList)
    })
    return (
        <div className="subContentActual">
            {lists ? lists.map(list =>
                <EmailList key={list.id} campId={list.id} listName={list.name} file={list.upload_file} ></EmailList>
            ) : null}
        </div>
    );
}

export default EmailLists;
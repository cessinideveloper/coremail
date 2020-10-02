import { combineReducers } from 'redux';
import { ActionTypes } from '../actions'

let lastCamp = 0

const initialUser = {
    username: "",//string
    password: "", //string
    email: "",    //string
    id: 0, //number
    token: ""//string
}


const storeUser = (user = initialUser, action) => {
    if (action.type === ActionTypes.STORE_USER) {
        return action.payload
    }
    return user
};

const storeCampaign = (campaigns = [], action) => {
    if (action.type === ActionTypes.STORE_ALL_CAMPAIGNS) {
        return action.payload
    }
    return campaigns
};

const loadCampaign = (loadedCamp = { campId: 0, campName: "" }, action) => {
    if (action.type === ActionTypes.LOAD_CAMPAIGN) {
        return action.payload
    }
    return loadedCamp
};

const storeEmailList = (emailList = [], action) => {
    if (action.type === ActionTypes.STORE_ALL_EMAIL_LIST) {
        return action.payload
    }
    return emailList
};


const rootReducer = combineReducers({
    userData: storeUser,
    campaigns: storeCampaign,
    emailList: storeEmailList,
    loadedCampaign: loadCampaign

});

export default rootReducer



















// const modeTypeReducer = (mode={activeSend:false, activeMail:false}, action) => {
//     if (action.type === "MODE_SELECTED"){
//         if (action.payload === "Send"){
//             return {activeSend:true, activeMail:false}
//         }else if (action.payload === "Mail"){
//             return {activeSend:false, activeMail:true}
//         }else
//             return mode 
//     }
//     return mode 
// };

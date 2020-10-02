import {
    call, take, put, delay, fork
} from "redux-saga/effects";
import axios from 'axios';
import store from '../store/store'
import { ActionTypes, storeAllEmailList, storeAllCampaigns } from '../actions'


const fetchEmaillist = () => {
    return fetch("https://emailengine2020.herokuapp.com/newemail/").then(re => re.json())
}

const fetchCampaings = () => {
    return fetch("https://emailengine2020.herokuapp.com/newcampaign").then(re => re.json())
}

const postEmaillist = () => {
    return axios.post("https://emailengine2020.herokuapp.com/newemail/").then(re => re.json())
}

const postCampaings = () => {
    return fetch("https://emailengine2020.herokuapp.com/newcampaign").then(re => re.json())
}

export function* watchUserSignIn() {
    while (true) {
        const { payload } = yield take(ActionTypes.GET_ALL_EMAIL_LIST)
        yield fork(getCampaigns, payload)
        yield call(getEmailList, payload)
    }
}

export function* watchCampAdd() {
    while (true) {
        const { payload } = yield take(ActionTypes.EMAIL_LIST_ADDED)
        yield fork(getCampaigns, store.getState().userData.id)
        yield call(getEmailList, store.getState().userData.id)
    }
}

export function* watchEmailListAdd() {
    while (true) {
        const { payload } = yield take(ActionTypes.CAMPAIGNS_ADDED)
        yield fork(getCampaigns, store.getState().userData.id)
        yield call(getEmailList, store.getState().userData.id)
    }
}

export function* getEmailList(payload) {
    delay(300)
    const allEmailList = yield call(fetchEmaillist)
    const filteredEmailList = allEmailList.filter(emailList => emailList.my_customer === payload)
    yield put(storeAllEmailList(filteredEmailList))
}

export function* getCampaigns(payload) {
    delay(300)
    const allCampaigns = yield call(fetchCampaings)
    const filteredCampaigns = allCampaigns.filter(camp => camp.my_customer === payload)
    yield put(storeAllCampaigns(filteredCampaigns))
}




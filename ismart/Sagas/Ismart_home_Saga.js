import { takeLatest, put, call } from 'redux-saga/effects';
import { Ismart_home_Action } from '../Actions';
import { get } from '../Apis/Apimethod';
function* Splashrequest() {
    const Splashresponse = yield call(get);
    const response = Splashresponse.response;
    console.log("responce", Splashresponse);
    yield put(Ismart_home_Action.Splashsucess(response))
}


export default function* Ismart_home_Saga() {
    yield takeLatest(Ismart_home_Action.SPLASH_REQUEST,Splashrequest);
}
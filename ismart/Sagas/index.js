import { fork, all } from 'redux-saga/effects';
import Ismart_home_Saga from "./Ismart_home_Saga";
export default function* sagas(){
    yield all([fork(Ismart_home_Saga)]);
}
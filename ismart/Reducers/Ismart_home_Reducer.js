import {Ismart_home_Action} from '../Actions/index'
const intialState = {
    Splashresponse:[],
    Status: 0,
};
export default function  (state = intialState, action) {
    switch (action.type) {
        case Ismart_home_Action.SPLASH_REQUEST:
            return {
                ...state
            }
        case Ismart_home_Action.SPLASH_REQUEST_SUCCESS:
            return {
                ...state,
                Splashresponse:action.payload,
                Status: 1,     
            }
        case Ismart_home_Action.SPLASH_REQUEST_FAIL:
            return {
                ...state,
                error:action.payload.error,
            }
            default:
                return {
                    ...state
                }
    }
}
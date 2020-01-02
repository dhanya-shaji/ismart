import {Apiconfig } from './Apiconfig'

const SplashUrl=Apiconfig.apis.splashApi;

export function get(){ 
    return fetch(SplashUrl )
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
}

import {createAction } from 'redux-actions';

export const SPLASH_REQUEST ="SPLASH_REQUEST";
export const Splashrequest=createAction(SPLASH_REQUEST);

export const SPLASH_REQUEST_SUCCESS="SPLASH_REQUEST_SUCCESS";
export const Splashsucess=createAction(SPLASH_REQUEST_SUCCESS); 

export const SPLASH_REQUEST_FAIL="SPLASH_REQUEST_FAIL";
export const Splashfail=createAction(SPLASH_REQUEST_FAIL);

import React from 'react';
import axios from 'axios';
import {CITY_LOADED} from "../constans";
import productReducer from "../reducer/cityReducer";




export const fetchCity = (q1) => {
    const city = q1;
    return function (dispatch) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6487c11bf8c2584a1d629b9b379e5dd0`)
            .then(function(response) {
                return response.json();
            })
            .then(myJson => {


                dispatch (
                    {
                        type: CITY_LOADED,
                        payload: myJson.main
                    })

            });




    };
};



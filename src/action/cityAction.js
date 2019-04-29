import React from 'react';
import axios from 'axios';
import {CITY_LOADED} from "../constans";




export const fetchCity = (q1) => {

    return function (dispatch) {
        // axios
        //     .get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6487c11bf8c2584a1d629b9b379e5dd0.json'
        //
        //     )
        //     .then((response) => {
        //         console.log('response',response);
        //         const {data} = response;
        //         dispatch (
        //             {
        //                 type: CITY_LOADED,
        //                 payload: {data}
        //             })
        //     })
        /*fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6487c11bf8c2584a1d629b9b379e5dd0')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                console.log(response.main,'response')
                const {data} = response;
                console.log({data},'response')

                dispatch (
                           {
                                type: CITY_LOADED,
                                payload: {data}
                            })
            });*/


    }
};


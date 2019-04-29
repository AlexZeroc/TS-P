// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchCity} from "../action/cityAction";

import Autosuggest from 'react-autosuggest';





class CityFind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCity: '',
            contacts: [],
            temp: 0
        };

        this.handleSendCity = this.handleSendCity.bind(this);
        this.sendCity = this.sendCity.bind(this);

    }


    componentDidMount(){
    localStorage.setItem('conracts', JSON.stringify(this.state.newCity))
    }

    handleSendCity(event) {
        this.setState({newCity:event.target.value });
        const city = event.target.value;
        const eventValue = [
            {
                'city':`${city}`
            }
        ];

        const eventArray = eventValue.map((e)=>{
        });
        const localStorageValue = localStorage.getItem('myValueInLocalStorage');
        console.log(localStorageValue,'local');
        localStorage.setItem('myValueInLocalStorage',JSON.stringify(event.target.value));
    }

    sendCity(event) {
        this.props.onChange(this.state.newCity);
        const city = this.state.newCity;

         /*fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6487c11bf8c2584a1d629b9b379e5dd0`)
             .then(function(response) {
                 return response.json();
             })
             .then(myJson => {
                 this.setState({temp:myJson.main});
             });*/

    }
    tempCity(city){
        if(city===undefined){
            return null
        } else if(city) {
            const tempCity = city;
            return (
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Temp-max</th>
                            <th>Temp-min</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{tempCity.temp_max}</td>
                            <td>{tempCity.temp_max}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            )
        }
    }

    render(){
        const tempCityMxMin = this.tempCity(this.props.city.categories);
        return (
        <div
            className=""
            align="center"
        >
        <form
            className="form-group"
        >
            city:
            <p>
            <label>
                <input
                    className="form-control"
                    type="text"
                    onChange={this.handleSendCity}
                    value={this.state.newCity}
                />
            </label>
            </p>
            <button
                className="form-text text-muted"
                type='button'
                onClick={this.sendCity}
            >
            send
        </button>

    </form>
            <div>
                    {tempCityMxMin}
            </div>
        </div>
        )
    }


}
function mapStateToProps(city) {
    return (
        city
    ) }
export default connect(mapStateToProps)(CityFind);
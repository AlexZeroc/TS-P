import cityFind from './cityFind'
import {CITY_LOADED} from "../constans";
import {connect} from "react-redux";
import {fetchCity} from "../action/cityAction";





const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => {
    return { onChange: (v) => dispatch(fetchCity(v)) } //note the dispatch call
}

export default connect(mapStateToProps, mapDispatchToProps)(cityFind);
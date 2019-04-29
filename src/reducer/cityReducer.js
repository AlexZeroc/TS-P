import {CITY_LOADED} from "../constans";

const productReducer = (state = {}, action) => {
    switch (action.type) {
        case CITY_LOADED: {

            return {
                ...state,
                categories: action
            };
        }

        default:
            return state
    }
};

export default productReducer;
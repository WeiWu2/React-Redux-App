import {GET_CAT, LOADING} from '../actions'

const initialState = {
    loading:false,
    imgSrc: ''
}


export const reducer = (state = initialState, action) => {

    switch(action.type)
        {
            case GET_CAT:
                return {...state,
                imgSrc:action.payload,
                loading:false};
            case LOADING:
                return {
                    ...state,
                    loading:true
                }
            default:
                return {...state};
        }

}
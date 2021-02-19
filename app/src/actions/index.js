import axios from 'axios';
export const GET_CAT = 'GET_CAT';
export const LOADING = 'LOADING'
export const getCat = () => {

return (dispatch) => {
    dispatch({type:LOADING});
    axios.get('https://aws.random.cat/meow')
    .then((res) => {
        dispatch({type:GET_CAT, payload:res.data.file})
    })
    .catch((error) => {
        console.log(error)
    })
}
}
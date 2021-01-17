import * as actions from '../api';
import { taxUpdated } from '../cityTax';

const api = ({ dispatch }) => next => action => {
    if(action.type !== actions.apiCallBegan.type) return next(action)

    next(action);
    
    const { url, onSuccess, onError } = action.payload;
    
    fetch(url)
    .then(response => response.json())
    .then(myData => {
        dispatch(actions.apiCallSuccess(myData));
        dispatch(taxUpdated(myData))
    })
    .catch(error => dispatch(actions.apiCallFailed(action.payload)))

};

export default api;
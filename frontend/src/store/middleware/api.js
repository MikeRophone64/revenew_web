import * as actions from '../api';


const api = ({ dispatch }) => next => action => {
    if(action.type !== actions.apiCallBegan.type) return next(action)

    next(action);
    
    const { url, onSuccess, onError } = action.payload;
    
    fetch(url)
    .then(response => response.json())
    .then(myData => dispatch(actions.apiCallSuccess(myData)))
    .catch(error => dispatch(actions.apiCallFailed(error)))

};

export default api;
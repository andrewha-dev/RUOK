import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getResults = () =>
    request.get('/api/answer/')
        .then(handleSuccess)
        .catch(handleError);
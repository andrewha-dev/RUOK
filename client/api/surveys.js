import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getQuestions = () =>
  request.get('/api/survey/')
    .then(handleSuccess)
    .catch(handleError);


export const submitSurvey = (payLoad) => {
    request.post('/api/survey/')
        .send(payLoad)
        .set('Accept', 'application/json')
        .then(handleSuccess)
        .catch(handleError);
};

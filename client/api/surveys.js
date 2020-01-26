import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getQuestions = () =>
  request.get('/api/survey/')
    .then(handleSuccess)
    .catch(handleError);


export const submitSurvey = (payLoad) => {

}

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import Survey from '../../organisms/Survey/index'
import Tips from '../../organisms/Tips/Tips'
import * as R from 'ramda';
import {getResults} from '../../../api/answer'
import { get } from 'mongoose';

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));
  const [surveyAvailable, setSurveyAvailable] = useState(true);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }

    getResults().then(res=>{
      console.log("Coming from res", res)
      console.log(res["question"]);
      setAnswers(res["question"])
    });
  }, []);

  const HR=()=>{
    let test = [];


    console.log("Answers: inside Hr ", answers);
    return (<div>
            {answers.forEach(val => {
              <p>{val.identity}</p>
            })}
      </div>
      )
  }
console.log(user);
const Wrapper=()=>{

if(user){
if(user.isAdmin){
    return <HR/>
  }
  else
    return <Display/>
}
  
  }


  const Display = () => {
    if (surveyAvailable) {
      return <Survey/>
    }
    else {
      return (
        <div>
          <Tips/>
        </div>)
    }
  }

  return (
    <div className="home-page page">
      <div className="section">
        <div className="container">
          <h1 className="title is-1">
            <Wrapper/>

          </h1>
        </div>
      </div>
    </div>
  );
}

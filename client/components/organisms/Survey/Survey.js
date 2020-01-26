import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';//copu
import { getQuestions, submitSurvey } from '../../../api/surveys'
import * as R from 'ramda';
import './survey.css'
export default function Survey() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));//
  //Lets retrieve all of the questions from our API now
  const [questions, setQuestions] = useState({});
  const [loadingQuestions, setLoaded] = useState(true);
  const [iterator, setIterator] = useState(0);
  const [surveyResults, setSurveyResult] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    getQuestions().then(res => {
      if (isSubscribed) {
        setQuestions(res);
        setLoaded(false);
        // console.log(res);
      }

      
    });

    return () => isSubscribed = false;

  }, []);

  // console.log(surveyResults)

  const setOne = () => {
    surveyResults.push({question: questions['question'][iterator], value : 1});
    setIterator(iterator + 1);
  };

  const setTwo = () => {
    surveyResults.push({question: questions['question'][iterator], value : 2});
    setIterator(iterator + 1);
  };

  const setThree = () => {
    surveyResults.push({question: questions['question'][iterator], value : 3});
    setIterator(iterator + 1);
  };

  const setFour = () => {
    surveyResults.push({question: questions['question'][iterator], value : 4});
    setIterator(iterator + 1);
  };

  const setFive = () => {
    surveyResults.push({question: questions['question'][iterator], value : 5});
    setIterator(iterator + 1);
  };

  const submitForm = () => {
    let payLoad = {answers: surveyResults, identity: user};
    submitSurvey(payLoad);
  };

  const DisplayInfo = () => {
    if (iterator < questions['question'].length)
    return (    <p className="displayer">{iterator} out of {questions['question'].length} questions completed</p>
    );
    else
    return (<button className="button" onClick={submitForm}>Submit Survey</button>)
  };

  const SingleQuestion = () => {
    if (iterator < questions['question'].length) {
      return (
        <div>
          <p className="questionText">{questions['question'][iterator]}</p>
          
          <br/>
          <div className="columns">
            <div className="column">
              <br/>
            </div>
            <div className="column">
              <button className="button is-primary leSurvey" onClick={setFive}>Very Often</button>
              <br/>
              <button className="button is-primary leSurvey" onClick={setFour}>Often</button>
              <br/>
              <button className="button is-primary leSurvey" onClick={setThree}>Sometimes</button>
              <br/>
              <button className="button is-primary leSurvey" onClick={setTwo}>Rarely</button>
              <br/>
              <button className="button is-primary leSurvey" onClick={setOne}>Not At All</button> 
  
              <br/>
              <br/>
             
            </div>
            <div className="column">
            </div>
          </div>
          <DisplayInfo/>
        </div> )
    }

    else 
    return (
      <div>
        <p className="questionText">{questions['question'][iterator]}</p>
        
        <br/>
        <div className="columns">
          <div className="column">
          
          </div>
          <div className="column">
           <h1>Please submit your survey</h1>
          </div>
          <div className="column">
          </div>
        </div>
        <DisplayInfo/>
          

        
        


      </div> )
    
  };

  const SurveyLoader = () => {
    if (loadingQuestions) {
      return <p>Loading</p>;
    }
    else 
      return (
        <div>
          {/* <h2 className="headerSurvey">Please answer the following questions:</h2> */}
          <br/>
          <br/>
          <SingleQuestion/> 
        </div>
       
        )
  };

  return (
    <div>
          <SurveyLoader/>
    </div>)
}

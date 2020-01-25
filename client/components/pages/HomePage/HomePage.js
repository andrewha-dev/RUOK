import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import Survey from '../../organisms/Survey/index'
import * as R from 'ramda';

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));
  const [surveyAvailable, setSurveyAvailable] = useState(true);
  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, []);


  const Display = () => {
    if (surveyAvailable) {
      return <Survey/>
    }
    else {
      return (
        <div>
          <p>Info about burn out</p>
        </div>)
    }
  }

  return (
    <div className="home-page page">
      <div className="section">
        <div className="container">
          <h1 className="title is-1">
            <Display/>
          </h1>
        </div>
      </div>
    </div>
  );
}

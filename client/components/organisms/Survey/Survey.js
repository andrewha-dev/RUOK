import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { attemptLogout } from '_thunks/auth';

export default function Survey({pathname}) {
  const dispatch = useDispatch();  const logout = () =>
    dispatch(attemptLogout())
      .catch(R.identity);


  return (
    <div>
      <p>This is where I display the survey</p>
    </div>)
}

Survey.propTypes = {
  pathname: PropTypes.string.isRequired,
};

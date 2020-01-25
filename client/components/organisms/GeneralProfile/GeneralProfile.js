import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as R from 'ramda';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import { validateName } from '_utils/validation';
import { attemptGetUser, attemptUpdateUser } from '_thunks/user';
import Box from '_molecules/Box';

export default function GeneralProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [bio, setBio] = useState(user.bio || '');
  const [profilePic, setProfilePic] = useState(user.profilePic || '');
  const [team, setTeam] = useState(user.team || '');
  const [firstNameEdited, setFirstNameEdited] = useState(false);
  const [lastNameEdited, setLastNameEdited] = useState(false);
  const [bioEdited, setBioEdited] = useState(false);
  const [profilePicEdited, setProfilePicEdited] = useState(false);
  const [teamEdited, setTeamEdited] = useState(false);


  const resetState = () => {
    setFirstName(user.firstName || '');
    setLastName(user.lastName || '');
    setBio(user.bio || '');
    setProfilePic(user.profilePic || '');
    setTeam(user.team || '');
    setFirstNameEdited(false);
    setLastNameEdited(false);
    setBioEdited(false);
    setProfilePicEdited(false);
    setTeamEdited(false);
  };

  useEffect(() => {
    resetState();
  }, [user.firstName, user.lastName, user.bio, user.profilePic, user.team]);

  const updateFirstName = e => {
    if (validateName(e.target.value)) {
      setFirstName(e.target.value);
      setFirstNameEdited(true);
    }
  };

  const updateLastName = e => {
    if (validateName(e.target.value)) {
      setLastName(e.target.value);
      setLastNameEdited(true);
    }
  };

  const updateBio = e => {
    setBio(e.target.value);
    setBioEdited(true);
  };

  const updateProfilePic = e => {
    setProfilePic(e.target.value);
    setProfilePicEdited(true);
  };

  const updateTeam = e => {
    setTeam(e.target.value);
    setTeamEdited(true);
  };

  const refresh = () => dispatch(attemptGetUser())
    .then(resetState)
    .catch(R.identity);

  const save = () => {
    const updatedUser = {};

    if (firstNameEdited) { updatedUser.first_name = firstName; }
    if (lastNameEdited) { updatedUser.last_name = lastName; }
    if (profilePicEdited) { updatedUser.profile_pic = profilePic; }
    if (bioEdited) { updatedUser.bio = bio; }
    if (teamEdited) { updatedUser.team = team; }
    if (!R.isEmpty(updatedUser)) {
      dispatch(attemptUpdateUser(updatedUser))
        .catch(R.identity);
    }
  };

  const charactersRemaining = 240 - bio.length;
  const edited = firstNameEdited || lastNameEdited || bioEdited || profilePicEdited || teamEdited;

  return (
    <Box className="general-profile">
      <span className="icon is-medium is-pulled-right" onClick={refresh} onKeyPress={refresh}>
        <FontAwesomeIcon icon={faSync} size="lg" />
      </span>
      <h3 className="title is-3">
        General
      </h3>
      <hr className="separator" />
      <div className="columns">
        <div className="column is-4">
          <h3 className="title is-3 has-text-centered">
            {user.usernameCase}
          </h3>
          <figure className="image">
            <img
              className="profile-img"
              src={profilePic || '/images/default-profile.png'}
              alt="Profile"
            />
          </figure>
          <div className="field">
            <label htmlFor="profile-pic-url" className="label">
              Picture URL
            </label>
            <p className="control">
              <input
                id="profile-pic-url"
                className="input"
                type="text"
                placeholder="Picture URL"
                value={profilePic}
                onChange={updateProfilePic}
              />
            </p>
          </div>
        </div>

        <div className="column is-8">
          <div className="columns">
            <div className="column is-6">
              <div className="field">
                <label htmlFor="first-name" className="label">
                  First Name
                </label>
                <p className="control">
                  <input
                    id="first-name"
                    className="input"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={updateFirstName}
                  />
                </p>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label htmlFor="last-name" className="label">
                  Last Name
                </label>
                <p className="control">
                  <input
                    id="last-name"
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={updateLastName}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="field">
            
            <label htmlFor="team" className="label">
              Team
            </label>
            <p className="control">
              <select id="team"
                className="select"
                value={team}
                onChange={updateTeam}>
                <option value="Team1">Team A</option>
                <option value="Team2">Team B</option>
                <option value="Team3">Team C</option>
                <option value="Team4">Team D</option>
              </select>
            </p>
          </div>
        </div>
      </div>
      </div>
      <hr className="separator" />
      <button type="button" className="button is-success" disabled={!edited} onClick={save}>
        Save
      </button>
    </Box>
  );
}

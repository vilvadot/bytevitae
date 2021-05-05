import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { Field, Spacer, Flex } from "../../ui";
import { setGithubUsername, getProfile } from "../actions";

const Container = (props) => {
  const { currentUsername, updateGithubUsername, getProfile, inlined } = props;

  const [username, setUsername] = useState(currentUsername);

  const handleSave = () => {
    if (username === currentUsername) return;
    updateGithubUsername(username);
    getProfile(username);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const buttonMessage = !currentUsername ? "Save" : "Change";

  return (
    <>
      {inlined && (
        <>
          <label htmlFor="username">
            Github Username
            <Flex>
              <input
                id="username"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Github username"
                value={username}
              />
              <Button secondary onClick={handleSave}>
                {buttonMessage}
              </Button>
            </Flex>
          </label>
          <p>*This will overwrite all your data</p>
        </>
      )}
      {!inlined && (
        <>
          <input
            type="text"
            placeholder="Github username"
            value={username}
            onChange={handleChange}
          />
          <Spacer height={16} />
          <Button secondary onClick={handleSave}>
            {buttonMessage}
          </Button>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUsername: state.cv.githubUsername,
  isLoading: state.cv.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updateGithubUsername: (username) => dispatch(setGithubUsername(username)),
  getProfile: (username) => dispatch(getProfile(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

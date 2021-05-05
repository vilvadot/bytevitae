import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";
import { Spacer, Flex } from "../../ui";
import { setGithubUsername, getProfile } from "../actions";
import UsernameForm from "./UsernameForm";

const Container = (props) => {
  const {
    githubUsername,
    children,
    isLoading,
  } = props;

  const noUsernameSet = !githubUsername;

  return (
    <>
      {noUsernameSet && !isLoading && (
        <Modal open={true} size="tiny" dimmer="inverted">
          <Modal.Header>
            <h3 style={{textAlign:'center'}}>Welcome!</h3>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p style={{textAlign:'center'}}>
                Before we start, we need to set your Github username to fill in your resume from your public profile:
              </p>
              <Spacer />
              <Flex direction="column" justify="center">
                <UsernameForm />
              </Flex>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      )}
      {children}
    </>
  );
};

const mapStateToProps = (state) => ({
  githubUsername: state.cv.githubUsername,
  isLoading: state.cv.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updateGithubUsername: (username) => dispatch(setGithubUsername(username)),
  getProfile: (username) => dispatch(getProfile(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

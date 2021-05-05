import React, { useState } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { Form } from "semantic-ui-react";
import { Formik } from "formik";
import { Panel, View, Button, Spacer } from "../../ui";
import Menu from "./components/Menu";
import Basic from "./components/panels/Basic";
import Languages from "./components/panels/Languages";
import Education from "./components/panels/Education";
import Experience from "./components/panels/Experience";
import Repositories from "./components/panels/Repositories";
import Skills from "./components/panels/Skills";

const FloatingPanel = styled(Panel)`
  padding: 0;
  height: 100%;
  width: 100%;
  max-width: 900px;
`;

const ProfileForm = styled(Form)`
  &&& {
    height: 100%;
    width: 100%;
    max-height: 500px;
    position: relative;
  }
`;

const Panels = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;
  overflow-y: auto;
`;

const SaveSection = styled.div`
  bottom: -80px;
  left: 0;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    padding-top: 16px;
  }
`;

const ProfileContainer = ({
  editProfile,
  profile,
  isSubmitting,
  location,
  match,
  isLoading,
}) => {
  const activePanel = match.params.panel || "basic";
  const [isSaveSuccess, setSaveSuccess] = useState(false);

  const handleProfileEdit = async (values) => {
    const success = await editProfile(values);
    if (success) {
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
      }, 700);
    }
  };

  const saveButtonMessage = !isSaveSuccess ? "Save" : "Saved ✓";

  return (
    <View align="center" justify="center" direction="column" isLoading={isLoading}>
      <FloatingPanel>
        <Menu activePane={activePanel} />
        <Formik initialValues={profile} onSubmit={handleProfileEdit}>
          {({ handleSubmit, ...props }) => (
            <ProfileForm onSubmit={handleSubmit}>
              <Panels>
                <Basic {...props} isActive={activePanel === "basic"} />
                <Languages {...props} isActive={activePanel === "languages"} />
                <Education {...props} isActive={activePanel === "education"} />
                <Experience
                  {...props}
                  isActive={activePanel === "experience"}
                  isSubmitting={isSubmitting}
                />
                <Repositories
                  {...props}
                  isActive={activePanel === "repositories"}
                />
                <Skills {...props} isActive={activePanel === "skills"} />
              </Panels>
              <SaveSection>
                <Button
                  type="submit"
                  loading={isSubmitting}
                  primary={!isSaveSuccess}
                  positive={isSaveSuccess}
                >
                  {saveButtonMessage}
                </Button>
                <p>Empty fields won&apos;t appear in your CV</p>
              </SaveSection>
            </ProfileForm>
          )}
        </Formik>
      </FloatingPanel>
      <Spacer height={100} />
    </View>
  );
};

ProfileContainer.propTypes = {
  profile: PropTypes.object.isRequired,
  editProfile: PropTypes.func.isRequired,
  Info: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default ProfileContainer;

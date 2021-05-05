import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import PanelHeader from "../../PanelHeader";
import { Field, Flex } from "../../../../../ui";
import UsernameForm from "../../../../username/UsernameForm";

const ImageColumn = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-right: 32px;
  }
  img{
    margin-bottom: 16px;
  }
  button{
    &:hover{
      opacity:.5;
    }
    > span{
      margin: 0 4px;
    }
  }
`;
const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Basic = ({ handleChange, handleBlur, values, isActive }) => {
  if (!isActive) return null;
  return (
    <>
      <PanelHeader title="Basic Information" />
      <Flex>
        <ImageColumn>
          <Image src={values.avatarUrl} size="small" />
        </ImageColumn>
        <FormColumn>
          <Field>
            <UsernameForm inlined />
          </Field>
          <Field>
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </label>
          </Field>
          <Field>
            <label htmlFor="position">
              Position
              <input
                id="position"
                type="text"
                name="position"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.position}
              />
            </label>
          </Field>
          <Field>
            <label htmlFor="bio">
              Bio
              <textarea
                id="bio"
                name="bio"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bio}
              />
            </label>
          </Field>
          <Field>
            <label htmlFor="location">
              Location
              <input
                id="location"
                name="location"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
              />
            </label>
          </Field>
          <Field>
            <label htmlFor="email">
              Url/Blog
              <input
                id="url"
                type="text"
                name="url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
              />
            </label>
          </Field>
          <Field>
            <label htmlFor="email">
              Contact Email
              <input
                id="email"
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>
          </Field>
          <Field>
            <label htmlFor="phone">
              Phone
              <input
                id="phone"
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
            </label>
          </Field>
        </FormColumn>
      </Flex>
    </>
  );
};

Basic.defaultProps = {
  isActive: PropTypes.bool,
};

Basic.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool,
};

export default Basic;

import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { View, Flex, Spacer } from '../../ui'
import GenerateButton from './components/GenerateButton'
import CardSlider from './components/CardSlider'

const Title = styled.h2`
  margin: 0;
  font-weight: bold;
`
class CurriculumContainer extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    templates: PropTypes.array.isRequired,
    openSubscribePage: PropTypes.func.isRequired,
  };

  state = {
    activeTemplate: 'plain',
  };

  activateCard = (code, isLocked) => {
    if (isLocked) return this.props.openSubscribePage()

    return this.setState({
      activeTemplate: code,
    })
  };

  render() {
    const {
      loading, profile, templates,
    } = this.props
    const { activeTemplate } = this.state
    return (
      <View isLoading={loading}>
        <Flex direction="column">
          <Title>1. Choose your design:</Title>
          <Spacer height={32} />
          <CardSlider
            cards={templates}
            activeCard={activeTemplate}
            onSelect={this.activateCard}
          />
          <GenerateButton
            data={profile}
            template={activeTemplate}
          />
        </Flex>
      </View>
    )
  }
}

export default CurriculumContainer

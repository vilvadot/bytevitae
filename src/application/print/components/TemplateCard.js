import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { makeFloating } from '../../../utilities'
import TemplateSampleButton from './TemplateSampleButton'

const TemplateCard = ({
  onSelect,
  isActive = false,
  name,
  image,
  description,
  samplePDF,
  isLocked = false,
}) => {
  const [mouseOver, setMouseOver] = useState(false)
  const lockIcon = mouseOver ? '🔓' : '🔒'
  const lockedClass = isLocked ? 'locked' : ''

  return (
    <Card onClick={onSelect} isActive={isActive} className={`card ${lockedClass}`}>
      <CardInfo>
        <CardPreview
          isLocked={isLocked}
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
        >
          <Picture src={image} isLocked={isLocked} />
          {isLocked && <Lock>{lockIcon}</Lock>}
        </CardPreview>
      </CardInfo>
      <Background className="card--background">
        <Title className="card--title">
          {name}
          <TemplateSampleButton
            href={samplePDF}
            onClick={(event) => {
              event.stopPropagation()
            }}
          />
        </Title>
        <Description className="card--description">{description}</Description>
      </Background>
    </Card>
  )
}


const Card = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  ${({ isActive }) => isActive
    && css`
      .card--background {
        background-image: linear-gradient(180deg, #84279e 0%, #d72eec 95%);
      }
      .card--title,
      .card--description {
        color: white;
      }
    `}
`
const CardPreview = styled.div`
  width: 150px;
  height: 200px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 11px 5px rgba(0, 0, 0, 0.17);
  border-radius: 8px;
  overflow: hidden;
  ${makeFloating()}
`

const CardInfo = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  display: flex;
`

const Title = styled.h3`
  &&& {
    text-transform: capitalize;
    margin-top: 8px;
    margin-bottom: 0;
  }
`

const Description = styled.p`
  margin: 0 10px;
  text-align: center;
`

const Picture = styled.img`
  width: 100%;
  margin-top: auto;
  opacity: ${({ isLocked }) => (isLocked ? '.1' : '1')};
  transition: 0.3s linear opacity;
`

const Lock = styled.div`
  position: absolute;
  z-index: 2;
  font-size: 30px;
`

const Background = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  padding-top: 110px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(180deg, #a2a2a2 0%, #b3b3b3 27%, #ffffff 95%);
  border-radius: 8px;
`

TemplateCard.propTypes = {
  onSelect: PropTypes.func.isRequired,
  samplePDF: PropTypes.string,
  isActive: PropTypes.bool,
  isLocked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

TemplateCard.defaultProps = {
  samplePDF: '',
  isActive: false,
  isLocked: false,
}

export default TemplateCard

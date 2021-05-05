import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import TemplateCard from './TemplateCard'

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 2rem 0;
  width: 100%;
  margin-bottom: 16px;
  > *:not(:first-child) {
    margin-left: var(--size-m);
  }
`

const CardSlider = ({
  cards, activeCard, onSelect,
}) => (
  <Slider>
    {cards.map(({
      name, description, sample, preview, code,
    }) => {
      const isActive = activeCard === code
      return (
        <TemplateCard
          image={preview}
          key={name}
          name={code}
          samplePDF={sample}
          description={description}
          isActive={isActive}
          onSelect={() => onSelect(code, false)}
        />
      )
    })}
  </Slider>
)

CardSlider.propTypes = {
  cards: PropTypes.array.isRequired,
  activeCard: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}


export default CardSlider

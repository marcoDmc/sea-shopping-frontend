import React from 'react'
import { Indicator, Wrapper } from './checkbox.styled'

function Checkbox ({ value, title, onClick , themes}) {
  return <Wrapper onClick={onClick} themes={themes}>
    <Indicator value={value} />
    { title }
  </Wrapper>
}

export default Checkbox
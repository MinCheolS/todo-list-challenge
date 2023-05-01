import React from 'react'
import styled from 'styled-components'

const StContainer = styled.div`
  border : 1px solid #ddd;
  height : 50px;
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding : 0 20px;
`

function Header() {
  return (
    <StContainer>
      <div>My Todo List</div>
      <div>React</div>
    </StContainer>
  )
}

export default Header
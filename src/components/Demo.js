import React, { useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import Button from './Button'

import astronaut from '../img/astronaut.png'

const Demo = ({ isShowBtn, value }) => {
  const [count, setCount] = useState(1)

  const handleShowDemo = () => {
    setCount(count + 1)
  }

  return (
    <div css={demoStyle}>
      {isShowBtn === '1' && (
        <div css={btnStyle} onClick={handleShowDemo}>
          <Button btnName="Show Demo" />
        </div>
      )}
      <div id="demo" css={imgStyle} style={value} key={count}>
        <img src={astronaut} alt="" />
      </div>
    </div>
  )
}

const demoStyle = css`
  position: relative;
  padding: 32px 80px;
`

const btnStyle = css`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
`

const imgStyle = css`
  width: 100px;
  height: 205px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
  }
`

export default Demo

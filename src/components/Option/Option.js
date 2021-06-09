import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import OptionItem from './OptionItem'
import Button from '../Button'

const Option = (props) => {
  return (
    <div>
      <div css={btnStyle} onClick={props.handleReset}>
        <Button btnName="Reset" />
      </div>
      <OptionItem
        value={props.value}
        handleOptionValue={props.handleOptionValue}
      />
    </div>
  )
}

export default Option

const btnStyle = css`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`

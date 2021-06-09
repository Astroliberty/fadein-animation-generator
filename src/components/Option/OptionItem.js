import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import OptionValue from './OptionValue'
import { animation, easing } from '../../data'

const OptionItem = (props) => {
  const items = [
    {
      name: 'animationName',
      itemName: 'animation',
      inputType: 'select',
      option: animation,
      value: props.value.animationName,
    },
    {
      name: 'animationTimingFunction',
      itemName: 'easing',
      inputType: 'select',
      option: easing,
      optionValue: easing,
      value: props.value.animationTimingFunction,
    },
    {
      name: 'animationIterationCount',
      itemName: 'repeat',
      inputType: 'radio',
      option: [],
      optionValue: '',
      value: props.value.animationIterationCount,
    },
    {
      name: 'animationDelay',
      itemName: 'delay',
      inputType: 'slidebar',
      option: [],
      optionValue: '',
      value: props.value.animationDelay,
    },
    {
      name: 'animationDuration',
      itemName: 'duration',
      inputType: 'slidebar',
      option: [],
      optionValue: '',
      value: props.value.animationDuration,
    },
  ]

  const item = items.map((item) => {
    return (
      <li css={itemStyle} key={item.itemName}>
        <span css={itemNameStyle}>{item.itemName}</span>
        <OptionValue
          name={item.name}
          inputType={item.inputType}
          option={item.option}
          value={item.value}
          optionValue={item.optionValue}
          handleOptionValue={props.handleOptionValue}
        />
      </li>
    )
  })
  return <ul>{item}</ul>
}

const itemStyle = css`
  display: flex;
  width: 100%;
  height: 3.2rem;
  margin-block: 1.6rem;
  line-height: 3.2rem;
`
const itemNameStyle = css`
  display: inline-block;
  width: 8rem;
  margin-inline-end: 1.6rem;
`

export default OptionItem

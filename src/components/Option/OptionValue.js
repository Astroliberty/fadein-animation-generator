import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const OptionValue = (props) => {
  const handleSecond = (e) => {
    props.handleOptionValue(e)
  }

  // select
  const Option = ({ type, optionValue }) => {
    const optionValueArr = Object.entries(
      optionValue
    ).map(([label, value]) => ({ label, value }))
    const optionValue2 = optionValueArr.map((val) => {
      return (
        <option
          key={type === 'animationName' ? val.value : val.label}
          value={val.value}
        >
          {type === 'animationName' ? val.value : val.label}
        </option>
      )
    })
    return optionValue2
  }

  // radio
  const radioItems = [
    { name: 'infinite', value: 'infinite' },
    { name: 'only once', value: '1' },
  ]
  const radio = radioItems.map((item) => {
    return (
      <label className="radio-group" key={item.name}>
        <input
          type="radio"
          name={props.name}
          value={item.value}
          checked={props.value === item.value ? 'checked' : ''}
          onChange={props.handleOptionValue}
        />
        <span className="label">{item.name}</span>
      </label>
    )
  })

  const showItem = () => {
    switch (props.inputType) {
      case 'select':
        return (
          <select
            name={props.name}
            onChange={props.handleOptionValue}
            css={selectStyle}
            value={props.value}
          >
            <Option
              type={props.name}
              optionValue={props.optionValue ? props.optionValue : props.option}
            />
          </select>
        )
      case 'radio':
        return <div css={radioStyle}>{radio}</div>
      case 'slidebar':
        return (
          <div css={slidebarStyle}>
            <input
              onChange={handleSecond}
              className="number"
              type="number"
              name={props.name}
              value={props.value.replace(/s/g, '')}
              min="0"
              max="5"
              step="0.01"
            />
            <input
              onChange={handleSecond}
              className="slidebar"
              type="range"
              name={props.name}
              value={props.value.replace(/s/g, '')}
              min="0"
              max="5"
              step="0.01"
            />
          </div>
        )
      default:
        break
    }
  }

  return <>{showItem()}</>
}

const selectStyle = css`
  width: calc(100% - 0.8rem);
  padding: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`
const radioStyle = css`
  display: flex;
  justify-content: flex-start;
  width: calc(100% - 0.8rem);
  padding: 0.8rem;

  .radio-group {
    display: block;
    margin-inline-end: 1.6rem;
  }
  .label {
    display: inline-block;
    margin-inline-start: 0.8rem;

    &:hover {
      cursor: pointer;
    }
  }
`
const slidebarStyle = css`
  display: flex;
  align-items: center;
  width: 100%;

  .number {
    display: block;
    width: 8rem;
    margin-inline-end: 1.6rem;
    padding: 0.8rem;
  }
  .slidebar {
    display: block;
    width: calc(100% - 0.8rem);
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    outline: none;
    height: 0.3rem;

    background: rgba(105, 186, 165, 0.3);
    border-radius: 0.3rem;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: var(--color-main);
      height: 1.2rem;
      width: 1.2rem;
      border-radius: 50%;
    }
    &::-ms-tooltip {
      display: none;
    }
    &::-moz-range-track {
      height: 0;
    }
    &::-moz-range-thumb {
      background: var(--color-main);
      height: 1.2rem;
      width: 1.2rem;
      border: none;
      border-radius: 50%;
    }
  }
`

export default OptionValue

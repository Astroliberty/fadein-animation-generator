import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Button = ({ btnName }) => {
  return (
    <div className="btn" css={btnStyle}>
      {btnName}
    </div>
  )
}

const btnStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  color: #fff;
  background: var(--color-main);
  border-radius: var(--border-radius);
  font-size: 1.4rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: var(--color-main-darker);
  }
`

export default Button

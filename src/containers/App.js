import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

import Demo from '../components/Demo'
import Option from '../components/Option/Option'
import Source from '../components/Source'

import { keyframe, animation, easing } from '../data'

const initialValue = {
  animationName: animation[0],
  animationTimingFunction: easing.easeInSine,
  animationIterationCount: '1',
  animationDelay: '0s',
  animationDuration: '1s',
}

const initialKeyframes = keyframe.normal

const App = () => {
  const [currentValue, setCurrentValue] = useState(initialValue)
  const [currentKeyframes, setCurrentKeyframes] = useState(initialKeyframes)
  const [count, setCount] = useState(1)

  const handleOptionValue = (e) => {
    let { name, value } = e.target
    if (
      e.target.name === 'animationDelay' ||
      e.target.name === 'animationDuration'
    ) {
      value = value + 's'
    }
    setCurrentValue({
      ...currentValue,
      [name]: value,
    })
    if (e.target.name === 'animationName') {
      const keyframeName = e.target.value
      setCurrentKeyframes(keyframe[keyframeName])
    }
  }

  const handleReset = () => {
    setCurrentValue(initialValue)
    setCurrentKeyframes(initialKeyframes)
  }

  return (
    <div css={appStyle}>
      <header css={headerStyle}>
        <h1>
          <span>FadeIn Animation Generator</span>
        </h1>
        <ul css={snsStyle}>
          <li>
            <a
              href="https://github.com/Astroliberty/fadein-animation-generator"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/astro_liberty" target="_blank">
              <AiFillTwitterCircle />
            </a>
          </li>
        </ul>
      </header>
      <main css={mainStyle}>
        <div css={wrapStyle}>
          <div css={demoStyle}>
            <Demo
              isShowBtn={currentValue.animationIterationCount}
              value={currentValue}
            />
          </div>
          <div css={optionStyle}>
            <Option
              value={currentValue}
              handleReset={handleReset}
              handleOptionValue={handleOptionValue}
            />
          </div>
          <div css={sourceStyle}>
            <Source
              currentValue={currentValue}
              currentKeyframes={currentKeyframes}
            />
          </div>
        </div>
      </main>
      <footer css={footerStyle}>
        <small>
          &copy; 2021{' '}
          <a href="https://astroliberty.com/" target="_blank">
            Astroliberty
          </a>
          .
        </small>
      </footer>
    </div>
  )
}

const appStyle = css`
  position: relative;
  min-height: 100vh;
`

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 24px 5%;

  h1 {
    color: #111;
    font-size: 2.4rem;
    letter-spacing: 0.02em;
  }
`

const snsStyle = css`
  display: flex;
  align-items: center;

  li {
    width: 28px;
    height: 28px;
    margin: 0 4px;
  }

  a {
    color: var(--color-text);

    &:hover {
      opacity: 0.7;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

const mainStyle = css`
  max-width: calc(1024px + 10%);
  margin: 0 auto;
  padding: 2.4rem 5%;
`

const wrapStyle = css`
  display: grid;
  grid-template-areas:
    'Demo'
    'Option'
    'Source';
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 8px 32px;

  @media screen and (min-width: 768px) {
    grid-template-areas:
      'Demo Source'
      'Option Source';
    grid-template-columns: calc((100% - 32px) / 2) calc((100% - 32px) / 2);
  }
`

const demoStyle = css`
  grid-area: Demo;
`

const optionStyle = css`
  grid-area: Option;
`

const sourceStyle = css`
  grid-area: Source;
`

const footerStyle = css`
  width: 100vw;
  margin-top: auto;
  padding: 32px 0;
  text-align: center;

  small {
    font-size: 1.3rem;
    letter-spacing: 0.02em;
  }

  a {
    color: var(--color-primary);
  }

  @media screen and (min-height: 720px) {
    position: absolute;
    bottom: 0;
  }
`

export default App

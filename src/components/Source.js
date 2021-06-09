import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SnackbarProvider, { useSnackbar } from 'react-simple-snackbar'

const SnackBar = ({ code }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar()
  let emoji
  const emojis = ['🤞', '👌', '👍', '🥳', '🤩', '✨', '🎉', '🎁']
  const setEmoji = (array) => {
    const emoji = array[Math.floor(Math.random() * array.length)]
    return emoji
  }
  emoji = setEmoji(emojis)
  const message = `Copied CSS to clipboard ${emoji}`

  return (
    <>
      <CopyToClipboard text={code}>
        <div css={btnCopyStyle} onClick={() => openSnackbar(message, [2000])}>
          Copy
        </div>
      </CopyToClipboard>
    </>
  )
}

const Source = ({ currentValue, currentKeyframes }) => {
  const code = `.fadeIn {
  animation-name: ${currentValue.animationName};
  animation-timing-function: ${currentValue.animationTimingFunction};
  animation-delay: ${currentValue.animationDelay};
  animation-duration: ${currentValue.animationDuration};
  animation-iteration-count: ${currentValue.animationIterationCount};
}

${currentKeyframes}`

  const handleToast = () => {
    const { addToast } = useToasts()
    addToast('Copied to Clipboard', {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  return (
    <div css={codeStyle}>
      <SyntaxHighlighter language="css" style={ocean}>
        {code}
      </SyntaxHighlighter>
      <div css={btnWrapStyle}>
        <SnackbarProvider>
          <SnackBar code={code} />
        </SnackbarProvider>
      </div>
    </div>
  )
}

const codeStyle = css`
  position: relative;
  height: 100%;
  @media screen and (max-width: 767px) {
    max-width: 90vw;
  }

  pre {
    position: relative;
    height: 100%;
    padding: 24px !important;
    border-radius: 6px;
    font-family: 'Source Code Pro', monospace;
  }
`

const btnWrapStyle = css`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  z-index: 10;
`

const btnCopyStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
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

export default Source

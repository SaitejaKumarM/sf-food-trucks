import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

if (__DEV__) {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
} else {
  render(<App />, document.getElementById('root'))
}

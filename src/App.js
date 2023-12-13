import React from 'react'
import SignInSide from './components/Signinside.js/Signinside'

const App = () => {
  return (
  <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      <SignInSide />
    </div>
  )
}

export default App

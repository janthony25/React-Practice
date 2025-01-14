import { useState } from 'react'
import Student from './components/student'

function App() {
  return (
    <>
      <Student name="Jun Anthony" age={25} isApplying={true} />
      <Student />
    </>
  )
}

export default App

// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({ initialName = '' }) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  // const name = ''

  /**
   * You can reset a component’s state by passing a different key to a component. In this example,
   * the Reset button changes the version state variable, which we pass as a key to the Form.
   * When the key changes, React re-creates the Form component (and all of its children) from scratch,
   * so its state gets reset.
   * https://react.dev/reference/react/useState#resetting-state-with-a-key
   */
  
  // See https://react.dev/reference/react/useState for more on useState
  const [name, setName] = React.useState(initialName);

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Kent" />
}

export default App

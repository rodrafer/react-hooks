// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

// - Extra Credit 03 -
// const useLocalStorageState = (key) => {
//   React.useEffect(() => {
//     // window.localStorage.setItem('name', key);
//     // - Extra Credit 04 -
//     window.localStorage.setItem('name', JSON.parse(JSON.stringify(key)));
//        - Extra Credit 04 Final -
//        See 02.extra-4.js
//   }, [key]);
// }

// - Extra Credit 03 Final -
const useLocalStorageState = (key, defaultValue = '') => {
  const [state, setState] = React.useState(() => window.localStorage.getItem(key) ?? defaultValue);

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

function Greeting({initialName = 'Joe'}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName

  // - Base Solution -
  // const initialNameValue = window.localStorage.getItem('name') ?? initialName;
  // const [name, setName] = React.useState(initialNameValue);

  // - Extra Credit 01 -
  // const retrieveInitialNameValue = () => window.localStorage.getItem('name') ?? initialName;
  // const [name, setName] = React.useState(retrieveInitialNameValue);

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  // - Base Solution -
  // This effect is called on _every_ rerender. This is not ideal because
  // we only wantto update localStorage when the name changes.
  // React.useEffect(() => {
  //   window.localStorage.setItem('name', name);
  // })

  // - Extra Credit 02 -
  // This effect is called on every rerender that the name changes.
  // React.useEffect(() => {
  //   window.localStorage.setItem('name', name);
  // }, [name]);

  // - Extra Credit 03 -
  // useLocalStorageState(name);

  // - Extra Credit 03 Final -
  const [name, setName] = useLocalStorageState('name', initialName);

  function handleChange(event) {
    setName(event.target.value)
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
  return <Greeting />
}

export default App

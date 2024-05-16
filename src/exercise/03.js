// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// - Base Solution -
// function Name({name, onNameChange}) {
//   return (
//     <div>
//       <label htmlFor="name">Name: </label>
//       <input id="name" value={name} onChange={onNameChange} />
//     </div>
//   )
// }

// - Extra Credit 01 -
function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({ animal, onAnimalChange }) {
  // 💣 delete this, it's now managed by the App
  // const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// - Base Solution -
// 🐨 uncomment this
// function Display({name, animal}) {
//   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
// }

// 💣 remove this component in favor of the new one
// function Display({name}) {
//   return <div>{`Hey ${name}, you are great!`}</div>
// }

// - Extra Credit 01 -
function Display({animal}) {
    return <div>{`Your favorite animal is: ${animal}!`}</div>
  }

function App() {
  // 🐨 add a useState for the animal
  // - Base Solution -
  // const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')

  return (
    <form>
      {/* - Base Solution - */}
      {/* <Name name={name} onNameChange={event => setName(event.target.value)} /> */}

      {/* - Extra Credit 01 - */}
      <Name />

      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)} />

      {/* - Base Solution - */}
      {/* 🐨 pass the animal prop here */}
      {/* <Display name={name} animal={animal} /> */}

      {/* - Extra Credit 01 - */}
      <Display animal={animal} />
    </form>
  )
}

export default App

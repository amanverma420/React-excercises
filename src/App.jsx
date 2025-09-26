import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormCompexercise from './formcompexercise'
import Counterapp from './counterapp'
import RandomNumberGenerator from './random'
import FormComp from './formcomp'
import ShoppingList from './shoppinglist'
import ColorChange from './colorchange'
import Checklist from './checklist'
import Login from './login'
import Add from './add'
import Todo from './todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">
          All My React Exercises
        </h1>

        <div className="exercises-list">
          {/* Form Component Exercise */}
          <div className="exercise-container">
            <h2 className="exercise-title">1. Form Component Exercise</h2>
            <FormComp />
          </div>

          {/* Number Addition Exercise */}
          <div className="exercise-container">
            <h2 className="exercise-title">2. Number Addition Exercise</h2>
            <FormCompexercise />
          </div>

          {/* Counter App */}
          <div className="exercise-container">
            <h2 className="exercise-title">3. Counter App</h2>
            <Counterapp />
          </div>

          {/* Random Number Generator */}
          <div className="exercise-container">
            <h2 className="exercise-title">4. Random Number Generator</h2>
            <RandomNumberGenerator />
          </div>

          {/* Shopping List */}
          <div className="exercise-container">
            <h2 className="exercise-title">5. Shopping List</h2>
            <ShoppingList />
          </div>

          {/* Color Change Exercise */}
          <div className="exercise-container">
            <h2 className="exercise-title">6. Color Change Exercise</h2>
            <ColorChange />
          </div>

          {/* Checklist Exercise */}
          <div className="exercise-container">
            <h2 className="exercise-title">7. Checklist Exercise</h2>
            <Checklist items={['Wake up', 'Brush teeth', 'Take a shower', 'Have breakfast', 'Exercise']} />
          </div>

          {/* Login Exercise */}
          <div className="exercise-container">
            <h2 className="exercise-title">8. Login Exercise</h2>
            <Login />
          </div>

          {/* Add/Remove Counter Exercise */}
          <div className="exercise-container">
            <h2 className="exercise-title">9. Add/Remove Counter Exercise</h2>
            <Add />
          </div>

          {/* Todo List Exercise */}
          <div className="exercise-container">
            <h2 className="exercise-title">10. Todo List Exercise</h2>
            <Todo />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import { ChangeEvent, useReducer } from 'react'
import { Card } from './components/ui/card'

import './App.css'

type AppState = {
  [key: string]: boolean
  checkAll: boolean
}

type AppActions = {
  type: string
  payload: string | boolean
}

const initialState = {
  india: false,
  usa: false,
  france: false,
  checkAll: false,
}

function reducer(state: AppState, action: AppActions) {
  const newState: AppState = { ...state }

  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        [action.payload as string]: !state[action.payload as string],
      }
    case 'toggleAll':
      Object.keys(state).forEach(key => {
        newState[key] = action.payload as boolean
      })
      newState.checkAll = action.payload as boolean
      return newState
    default:
      throw new Error()
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'toggle', payload: event.target.name })
  }

  const handleCheckAllChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'toggleAll', payload: event.target.checked })
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-5">Country Check</h1>

      <div className="w-full md:w-1/2 lg:w-1/3">
        <Card className="flex flex-col p-5 text-start">
          <label className="space-x-2 flex items-center">
            <input
              type="checkbox"
              checked={state.checkAll}
              onChange={handleCheckAllChange}
            />
            <span>
              <strong>Select All</strong>
            </span>
          </label>
          <label className="space-x-2 flex items-center">
            <input
              name="india"
              type="checkbox"
              checked={state.india}
              onChange={handleChange}
            />
            <span>India</span>
          </label>
          <label className="space-x-2 flex items-center">
            <input
              name="usa"
              type="checkbox"
              checked={state.usa}
              onChange={handleChange}
            />
            <span>USA</span>
          </label>
          <label className="space-x-2 flex items-center">
            <input
              name="france"
              type="checkbox"
              checked={state.france}
              onChange={handleChange}
            />
            <span>France</span>
          </label>
        </Card>
      </div>
    </main>
  )
}

export default App

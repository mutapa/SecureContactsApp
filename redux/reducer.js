import {combineReducers} from 'redux'

import {UPDATE_CONTACT} from './action'

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  return state
}

const reducer = combineReducers({
  contacts: contactReducer,
})

export default reducer
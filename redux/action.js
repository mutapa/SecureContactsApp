// action types
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

export const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact,
})
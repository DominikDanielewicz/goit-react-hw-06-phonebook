export const contactsMiddleware = store => next => action => {
  const result = next(action);
  if (action.type?.includes('addContact')) {
    const contactsState = store.getState().contacts;
    console.log(contactsState);
    console.log(action.type);
    localStorage.setItem('contacts', JSON.stringify(contactsState));
  }
  if (action.type?.includes('deleteContact')) {
    console.log('delete action');
  }
  return result;
};

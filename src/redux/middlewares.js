export const contactsMiddleware = store => next => action => {
  const result = next(action);
  if (action.type?.includes('contacts/')) {
    const contactsState = store.getState().contacts;
    console.log(contactsState);
    console.log(action.type);
    localStorage.setItem('contacts', JSON.stringify(contactsState));
  }
  return result;
};

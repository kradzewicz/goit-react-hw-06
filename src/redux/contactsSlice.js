import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialContactList = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const contactsSlice = createSlice({
      name: "contacts",
      initialState: initialContactList,
      reducers: {
          addContact: {
              reducer(state, action) {
                  const newState = Object.values(state).filter((contact) => contact.id)
                  return [...newState, action.payload]
              },
              prepare(nameValue, numberValue) {
                  return {
                      payload: {
                          id: nanoid(),
                          name: nameValue,
                          number: numberValue,
                      },
                  };
              }
          
          },
          deleteContact(state, action) {
            return Object.values(state).filter(
                (contact) => contact.id
              ).filter((contact) => contact.id !== action.payload)
          },
        },
    });
    
export const { addContact, deleteContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer
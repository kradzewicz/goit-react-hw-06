/** @format */

import { useState, useEffect } from "react";
import "./App.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { ContactFrom } from "./components/ContactForm";
import { SearchBox } from "./components/SearchBox";
import { ContactList } from "./components/ContactList";
import { isObject } from "formik";

const initialContactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .max(50, "Name is too long!")
    .required("This field is required!"),
  number: Yup.string()
    .min(2, "number is too short!")
    .max(50, "number is too long!")
    .required("This field is required!"),
});

function App() {
  const [contactList, setContactList] = useState(() => {
    const startContactList = JSON.parse(localStorage.getItem("ContactList"));
    return startContactList === null
      ? initialContactList
      : typeof startContactList === "object"
      ? startContactList
      : initialContactList;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("ContactList", JSON.stringify(contactList));
  }, [contactList]);

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleDelete = (id) => {
    setContactList((p) => p.filter((contact) => contact.id !== id));
  };

  const handleAdd = (values, actions) => {
    const addContact = (newContact) => {
      setContactList((prev) => [...prev, newContact]);
    };
    addContact({ id: nanoid(), name: values.name, number: values.number });
    actions.resetForm();
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const visibleContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phone Book</h1>
      <ContactFrom
        initialValues={initialValues}
        handleAdd={handleAdd}
        nameId={nameFieldId}
        numberId={numberFieldId}
        validationSchema={validationSchema}
      />
      <SearchBox handleFilterChange={handleFilterChange} value={filter} />
      <ContactList
        initialContacts={visibleContacts}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;

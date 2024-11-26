/** @format */

import "./App.css";
import { ContactFrom } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox";
import { ContactList } from "./components/ContactList";

function App() {
  return (
    <>
      <h1>Phone Book</h1>
      <ContactFrom />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;

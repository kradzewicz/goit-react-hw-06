/** @format */

import { useSelector } from "react-redux";
import { ContactCard } from "./ContactCard";
import { getContacts, getFilter } from "../redux/selectors";

export function ContactList() {
  const contactsObject = useSelector(getContacts);
  const contactsArray = Object.values(contactsObject).filter(
    (contact) => contact.id
  );
  const filter = useSelector(getFilter);

  const filteredContactsList = contactsArray.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}>
      {filteredContactsList.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
}

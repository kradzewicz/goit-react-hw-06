/** @format */

import { useSelector } from "react-redux";
import { ContactCard } from "./ContactCard";
import { getContacts, getFilter } from "../redux/selectors";

export function ContactList() {
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContactsList = contactsList.filter((contact) =>
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

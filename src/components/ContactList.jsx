/** @format */

import { ContactCard } from "./ContactCard";

export function ContactList({ initialContacts, handleDelete }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}>
      {initialContacts.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

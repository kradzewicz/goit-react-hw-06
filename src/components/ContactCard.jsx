/** @format */

export function ContactCard({ name, number, handleDelete, id }) {
  return (
    <div
      style={{
        margin: 10,
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid black",
        borderRadius: "5px",
        gap: "10px",
      }}>
      <div>
        <span>{name}</span>
        <br />
        <span>{number}</span>
      </div>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}

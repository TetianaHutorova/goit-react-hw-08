import Contact from "../Contact/Contact";
export default function ContactList({ contacts, deleteUser }) {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              contact={contact}
              deleteUser={deleteUser}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

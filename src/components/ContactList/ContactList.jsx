import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, deleteUser }) {
  return (
    <div>
      <ul className={css.list}>
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

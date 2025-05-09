import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

export default function ContactList() {
  const filterContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={css.list}>
        {filterContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} id={contact.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

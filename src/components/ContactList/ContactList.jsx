import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/contactsSlice";

export default function ContactList() {
  const contactsState = useSelector((state) => state.contacts.items);
  const filterState = useSelector((state) => state.filter.name);

  const dispatch = useDispatch();
  const deleteUser = (id) => dispatch(deleteItem(id));

  const contactsStateFilter = contactsState.filter(({ name }) =>
    name.toLowerCase().includes(filterState.toLowerCase())
  );

  return (
    <div>
      <ul className={css.list}>
        {contactsStateFilter.map((contact) => (
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

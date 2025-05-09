import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "./redux/contactsSlice";

export default function App() {
  const contactsState = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Please wait. Data is being loaded.</p>}
      {isError && <p>An error occurred. Please try again.</p>}
      {contactsState.length > 0 && <ContactList />}
    </div>
  );
}

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  // selectError,
  // selectLoading,
} from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const selectorItems = useSelector(selectContacts);
//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {selectorItems.length > 0 && <SearchBox />}
      {selectorItems.length > 0 && <ContactList />}
      {/* {isLoading && <p>Please wait. Data is being loaded.</p>}
      {isError && <p>An error occurred. Please try again.</p>} */}
    </>
  );
}

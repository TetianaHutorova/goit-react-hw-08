import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const dataStorage = localStorage.getItem("contactList");
    if (dataStorage !== null) {
      return JSON.parse(dataStorage);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [filter, setFilter] = useState("");

  const handlerFilter = (value) => setFilter(value.toLowerCase());

  const getFilteredContacts = () =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  const addNewUser = (newUser) => {
    setContacts((prevContacts) => [...prevContacts, newUser]);
  };

  const deleteUser = (id) => {
    const searchElement = contacts.find((el) => el.id === id);
    const idArray = contacts.indexOf(searchElement);
    setContacts([...contacts.filter((_, index) => index !== idArray)]);
  };

  useEffect(
    () => localStorage.setItem("contactList", JSON.stringify(contacts)),
    [contacts]
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewUser={addNewUser} />
      <SearchBox handlerFilter={handlerFilter} />
      <ContactList contacts={getFilteredContacts()} deleteUser={deleteUser} />
    </div>
  );
}

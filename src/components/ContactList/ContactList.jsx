import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const inputFilterContact = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputFilterContact.toLowerCase())
  );

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}

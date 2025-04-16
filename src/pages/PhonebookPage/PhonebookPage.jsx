import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import NoContacts from "../../components/NoContacts/NoContacts";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";

export default function PhonebookPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Container>
        <PageTitle>Your Phonebook</PageTitle>
        <ContactForm />
        <SearchBox />
        {loading && !error && <Loader />}
        {error && <ErrorMessage message={error} />}
        {contacts.length > 0 && <ContactList />}
        {contacts.length === 0 && !loading && <NoContacts />}
      </Container>
    </>
  );
}

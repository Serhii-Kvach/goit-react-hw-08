import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Container from "../../components/Container/Container";

export default function RegisterPage() {
  return (
    <div>
      <Container>
        <PageTitle>Register your account</PageTitle>
        <RegistrationForm />
      </Container>
    </div>
  );
}

import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import Container from "../../components/Container/Container";

export default function LoginPage() {
  return (
    <div>
      <Container>
        <PageTitle>Please log in</PageTitle>
        <LoginForm />
      </Container>
    </div>
  );
}

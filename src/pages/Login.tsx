import { login as loginRequest } from "../api";
import AuthForm from "../components/AuthForm";

export default function Login() {
  return (
    <AuthForm
      title="Log in"
      submitLabel="Log in"
      footerText="No account?"
      footerLinkText="Register"
      footerLinkTo="/register"
      onSubmit={loginRequest}
    />
  );
}

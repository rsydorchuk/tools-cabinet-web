import { register as registerRequest } from "../api";
import AuthForm from "../components/AuthForm";

export default function Register() {
  return (
    <AuthForm
      title="Register"
      submitLabel="Register"
      footerText="Have an account?"
      footerLinkText="Log in"
      footerLinkTo="/login"
      onSubmit={registerRequest}
    />
  );
}

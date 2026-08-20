import { FormEvent, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Alert, Button, Container, Link, Stack, TextField, Typography } from "@mui/material";
import { useAuth } from "../auth/AuthContext";

interface AuthFormProps {
  title: string;
  submitLabel: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
  onSubmit: (email: string, password: string) => Promise<{ id: string; email: string }>;
}

export default function AuthForm({
  title,
  submitLabel,
  footerText,
  footerLinkText,
  footerLinkTo,
  onSubmit,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const user = await onSubmit(email, password);
      setUser(user);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <Container maxWidth="xs">
      <Stack component="form" onSubmit={handleSubmit} spacing={2}>
        <Typography variant="h5" component="h1">
          {title}
        </Typography>
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button type="submit" variant="contained" fullWidth>
          {submitLabel}
        </Button>
        <Typography>
          {footerText}{" "}
          <Link component={RouterLink} to={footerLinkTo}>
            {footerLinkText}
          </Link>
        </Typography>
      </Stack>
    </Container>
  );
}

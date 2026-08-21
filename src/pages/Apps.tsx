import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAuth } from "../auth/AuthContext";

const APPS = [
  { id: "image-convert", name: "Image convert", description: "PNG, JPEG, WebP", url: import.meta.env.VITE_APP_IMAGE_CONVERTER_WEB ?? "" },
];

export default function Apps() {
  const { user, logout } = useAuth();

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Typography variant="body1">{user?.email}</Typography>
            <Button onClick={logout}>Log out</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {APPS.map((app) => (
            <Grid item xs={12} sm={6} key={app.id}>
              <Card>
                <CardActionArea component="a" href={app.url}>
                  <CardHeader title={app.name} />
                  <CardContent>
                    <Typography color="text.secondary">{app.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Container, Typography } from "@mui/material";
function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">
          Routine Radar
        </Typography>
      </Container>
    </Provider>
  );
}

export default App;

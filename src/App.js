import { Container } from "@mui/material";
import "./App.css";
import { useState } from "react";
import MainLayout from "./layout";
import InputField from "./components/inputField";
import Prompted from "./components/prompted";

function App() {
  const [inputSaved, setInputSaved] = useState(false);
  return (
    <>
      {inputSaved ? (
        <Prompted />
      ) : (
        <MainLayout>
          <Container maxWidth="sm">
            <InputField inputSaved={inputSaved} setInputSaved={setInputSaved} />
          </Container>
        </MainLayout>
      )}
    </>
  );
}

export default App;

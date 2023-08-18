import React, { useState } from "react";
import { TextField, InputAdornment, Box, Typography } from "@mui/material";

export default function InputField({ inputSaved, setInputSaved }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputSaved(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "67vh",
      }}>
      {/* {inputSaved && <Typography variant="h5">{inputValue}</Typography>} */}
      <TextField
        fullWidth
        sx={{
          "& .MuiInputAdornment-root": {
            mt: "0 !important",
          },
          input: {
            py: 1.7,
          },
        }}
        id="filled-start-adornment"
        placeholder="Begin with the end in mind..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src="/logo-input.png" alt="logo-input" height={30} />
            </InputAdornment>
          ),
        }}
        variant="filled"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </Box>
  );
}

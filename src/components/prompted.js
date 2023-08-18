import {
  Box,
  IconButton,
  Toolbar,
  TextField,
  InputAdornment,
  Container,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export default function Prompted() {
  return (
    <Box>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          bgcolor: "common.black",
          color: "common.white",
          height: 221,
          svg: {
            color: "grey",
          },
        }}>
        <IconButton
          sx={{
            svg: {
              height: 56,
              width: 56,
            },
          }}>
          <MenuIcon />
        </IconButton>
        <TextField
          fullWidth
          sx={{
            maxWidth: 834,
            "& .MuiInputBase-root": {
              fontSize: 32,
              color: "common.white",
              ":before": {
                borderColor: "common.white",
              },
            },
            "& .MuiInputAdornment-root": {
              mt: "0 !important",
            },
            input: {
              py: 1.7,
            },
          }}
          id="filled-start-adornment"
          placeholder="What are the fundamentals of design?"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/logo-input.png" alt="logo-input" height={76} />
              </InputAdornment>
            ),
          }}
          variant="filled"
        />
        <Box></Box>
      </Toolbar>
      <Container maxWidth="xl">
        <Box mt={8}>
          <Typography variant="h4" fontWeight={300}>
            Sure, I'd be happy to guide you through the fundamentals of design.
            At its core, design is an iterative, problem-solving process.
            Designers aim to create aesthetically pleasing, functional, and
            meaningful concepts, products, graphics or environments by adhering
            to certain principles.
          </Typography>
          <Typography variant="h4" fontWeight={300} my={4}>
            Here are a few fundamental design principles:
          </Typography>
          <Typography variant="h4" fontWeight={300}>
            1. Balance: Balance lends stability and structure to an overall
            design. Balance can be symmetrical (elements are arranged evenly) or
            asymmetrical (elements are balanced around a central point).
          </Typography>
          <Typography variant="h4" fontWeight={300}>
            2. Contrast: Contrast occurs when two elements are different. For
            example, black and white, thick and thin, modern and classic. It is
            useful for highlighting important elements and guiding the viewer's
            eye.
          </Typography>
          <Typography variant="h4" fontWeight={300}>
            3. Emphasis: Emphasis is what catches the viewer’s attention in a
            design. It's something that stands out and is distinctive.
            Proportion: Proportion refers to the size and visual weight of
            elements in a...
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
            <TextField
              fullWidth
              sx={{
                maxWidth: 834,
                mt: 5,
                "& .MuiInputAdornment-root": {
                  mt: "0 !important",
                },
                input: {
                  py: 1.7,
                },
              }}
              id="filled-start-adornment"
              placeholder="Teach me how to be perfect"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="/logo-input.png" alt="logo-input" height={30} />
                  </InputAdornment>
                ),
              }}
              variant="filled"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

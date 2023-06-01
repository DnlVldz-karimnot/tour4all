// src/theme.js
import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Components {
    [key: string]: any;
  }
}

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ["Ubuntu", "Helvetica"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;          
        }
      `,
    },
  },
  palette: {
    primary: {
      main: "#25476a",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#AF0624",
    },
    background: {
      default: "#fff",
    },
  },
  /*  typography: {
    allVariants: {
      color: "pink"
    },
  }, */
  /* components: {
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          color:'#fff !important',
          backgroundColor: "#25476a",
          boxShadow:"none !important"
          // borderBottom: "3px solid #C8C8C8 !important",
        },
      },
    },
    MUIDataTableSelectCell: {
      headerCell: {
        backgroundColor: "#000 !important",
      },
    }
   
  }, */
});

export default theme;

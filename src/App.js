import "./App.css";
import Coins from "./Pages/CoinList/Coins";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import ResponsiveDrawer from "./Layout/ResponsiveDrawer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinsInfo from "../src/Pages/CoinsInfo/CoinsInfo";
import Iranian_Sans from "./assets/fonts/Iranian_Sans.ttf";
import { CssBaseline } from "@mui/material";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Wallet from "./Pages/Orders/Wallet";
import Footer from "./Layout/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import TrendCoins from "./Pages/CoinList/TrendCoins";
import OrderList from "./Pages/Orders/OrderList";
import NotFound from "./Pages/NotFound/NotFound";
import { useAuth } from "./Configs/firebase-config";

const queryClient = new QueryClient();

function App() {
  const currentUser = useAuth();
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "Iranian_Sans",
    },

    components: {
      MuiCssBaseline: {
        eOverrides: `
          @font-face {
            font-family: 'Iranian_Sans';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Iranian_Sans'), local('Iranian_Sans'), url(${Iranian_Sans}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
    textField: {
      dir: "rtl",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Router>
          <ResponsiveDrawer />
          <Routes>
            <Route path="/" element={<Coins />} />
            <Route path="/Coins" element={<CoinsInfo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {currentUser ? <Route path="/wallet" element={<Wallet />} /> : null}
            <Route path="/trends" element={<TrendCoins />} />
            {currentUser ? <Route path="/trades" element={<OrderList />} /> : null}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

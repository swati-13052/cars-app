import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import AllCarsDisplayContainer from "./pages/CarList/AllCarsDisplayComponents";
import { ButtonTheme, theme, ThemeContext } from './constants/theme';
import CarDetails from "./pages/CarDetails/CarDetails";
import { Header } from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <div className="App">
      <ThemeProvider theme={ButtonTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllCarsDisplayContainer />}/>
            <Route path="/car-details/:stockNumber" element={<CarDetails />}/>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
        </ThemeProvider>
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayUsers from './features/Users';
import LandingPage from './features/LandingPage';
import CompanyRegistration from './features/CompanyRegistration';
import LoginPage from './features/LoginPage';
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette :{
    secondary : {
      main : '#61d4b9'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/company-registration' element={<CompanyRegistration/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/users' element={<DisplayUsers/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DisplayUsers } from './features/User/displayUsers';
import { HomePage } from './views/HomePage/HomePage';
import { CompanyRegistration } from './views/CompanyRegistration/CompanyRegistration';
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
          <Route path='/' element={<HomePage/>}/>
          <Route path='/company-registration' element={<CompanyRegistration/>}/>
          <Route path='/users' element={<DisplayUsers/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

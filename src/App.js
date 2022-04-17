import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import DisplayUsers from './features/Users';
import LandingPage from './features/LandingPage';
import CompanyRegistration from './features/CompanyRegistration';
import LoginPage from './features/LoginPage';
import Layout from './features/Layout';
import InsertData from './features/InsertData';
import Stores from './features/Stores';
import Statistics from './features/Statistics';
import Coupons from './features/Coupons';
import Licences from './features/Licences'

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

          <Route path='/insert-data' element={(
            <Layout>
              <InsertData/>
            </Layout>
          )}/>

          <Route path='/stores' element={(
            <Layout>
              <Stores/>
            </Layout>
          )}/>

          <Route path='/statistics' element={(
            <Layout>
              <Statistics/>
            </Layout>
          )}/>
          
          <Route path='/coupons' element={(
            <Layout>
              <Coupons/>
            </Layout>
          )}/>

          <Route path='/licences' element={(
            <Layout>
              <Licences/>
            </Layout>
          )}/>

          <Route path='/insert-store' element={(
            <Layout>
              <Licences/>
            </Layout>
          )}/>

          <Route path='/insert-user' element={(
            <Layout>
              <Licences/>
            </Layout>
          )}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

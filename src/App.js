import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserList } from './components/Lists/userList';
import { HomePage } from './views/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/users' element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

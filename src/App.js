import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchUser from './components/SearchUser';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser/>}/>
        <Route path="/search" element={<SearchUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

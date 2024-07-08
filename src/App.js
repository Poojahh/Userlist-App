import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchUser from './components/SearchUser';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser/>}/>
        <Route path="/search" element={<SearchUser/>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

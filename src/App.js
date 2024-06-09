import logo from './logo.svg';
import './App.css';
import AddNewpro from './components/AddNewpro';
import SearchNewpro from './components/SearchNewpro';
import DeleteNewpro from './components/DeleteNewpro';
import ViewNewpro from './components/ViewNewpro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddNewpro/>}/>
      <Route path='/search' element={<SearchNewpro/>}/>
      <Route path='/delete' element={<DeleteNewpro/>}/>
      <Route path='/view' element={<ViewNewpro/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

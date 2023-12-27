import {Routes, Route} from 'react-router-dom'
import Dashboard from './Component/Pages/Dashboard';
import Login from './Component/Pages/Login';
import Register from './Component/Pages/Register';
import PagenotFound from './Component/Pages/PagenotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<PagenotFound/>}/>
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login';
import Escolas from '../Escolas';
import Sobre from '../Sobre';
import NovaEscola from '../Nova Escola';
import NoPage from '../No Page';

const RoutesApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/schools' element={<Escolas />} />
          <Route path='/about' element={<Sobre />} />
          <Route path='/newschool' element={<NovaEscola />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesApp;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';               // Página para listar todos os livros
import Livro from './pages/livro/Livro';             // Página para exibir detalhes de um livro específico
import AdicionarLivro from './pages/adicionarLivro/AdicionarLivro';  // Página para adicionar um novo livro
import EditarLivro from './pages/editarLivro/EditarLivro';  // Página para editar um livro existente
import ErrorPage from './pages/errorPage/ErrorPage';    // Página de erro 404
import Header from './components/header/Header';      // Cabeçalho com navegação

const App = () => {
  return (
    <Router>
      <Header />  {/* Exibe o cabeçalho com navegação */}
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />                       {/* Rota para a página inicial */}
          <Route path="/livro/:id" element={<Livro />} />             {/* Rota para exibir os detalhes de um livro */}
          <Route path="/livro/adicionar" element={<AdicionarLivro />} />  {/* Rota para adicionar um livro */}
          <Route path="/livro/editar/:id" element={<EditarLivro />} />  {/* Rota para editar um livro */}
          <Route path="*" element={<ErrorPage />} />                   {/* Rota para erro 404 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
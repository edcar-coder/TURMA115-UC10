import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Página Não Encontrada</h1>
      <p className="text-lg mb-6">A página que você está procurando não existe.</p>
      <Link to="/" className="text-blue-500 hover:underline">Voltar para a Home</Link>
    </div>
  );
};

export default ErrorPage;
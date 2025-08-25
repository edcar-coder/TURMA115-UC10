import BookForm from '../../components/bookform/bookForm';  // Importa o componente do formulário

const AdicionarLivro = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Adicionar Novo Livro</h1>
      <BookForm />  {/* Componente que contém o formulário para adicionar um novo livro */}
    </div>
  );
};

export default AdicionarLivro;
import { Header, Formulario, ListadoPacientes } from './components';

function App() {
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className='grid mt-10 md:gap-4 md:grid-cols-2'>
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Header, Formulario, ListadoPacientes } from "./components";

function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) || []
  );

  return (
    <>
      <div className="container px-2 mx-auto mt-20 md:px-0">
        <Header />
        <div className="grid gap-12 mt-10 md:gap-4 md:grid-cols-2">
          <Formulario pacientes={pacientes} setPacientes={setPacientes} />
          <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes} />
        </div>
      </div>

    </>
  );
}

export default App;

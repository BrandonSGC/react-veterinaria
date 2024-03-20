export const Paciente = ({paciente, pacientes, setPacientes}) => {
  const {id, mascota, propietario, email, alta, sintomas} = paciente;

  const onDelete = (e) => {
    setPacientes(pacientes.filter(element => element.id !== id));
  }
  
  return (
    <div className="px-5 py-10 bg-white rounded-lg shadow-md">
      <p className="mb-2 font-bold text-gray-700 uppercase ">
        Nombre: <span className="font-normal normal-case">{mascota}</span>
      </p>

      <p className="mb-2 font-bold text-gray-700 uppercase ">
        Propietario: <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="mb-2 font-bold text-gray-700 uppercase ">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="mb-2 font-bold text-gray-700 uppercase ">
        Fecha Alta: <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="mb-2 font-bold text-gray-700 uppercase ">
        Síntomas:{" "}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button className="px-6 py-1 font-bold text-white uppercase duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700">
          Editar
        </button>
        <button onClick={onDelete} className="px-6 py-1 font-bold text-white uppercase duration-300 bg-red-600 rounded-md hover:bg-red-700">
          Eliminar
        </button>
      </div>
    </div>
  );
};

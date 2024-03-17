import { Paciente } from "./";

export const ListadoPacientes = ({pacientes}) => {
  
  return (
    <section className="pr-2">
      <h2 className="text-3xl font-black text-center">Listado Pacientes</h2>

      <p className="mt-5 mb-5 text-lg font-medium text-center md:mb-10">
        Administra tus{" "}
        <span className="font-bold text-indigo-600">Pacientes y Citas</span>
      </p>

      {/* // TODO: Customize scrollbar styles. */}
      <div className="flex flex-col gap-2 md:h-[540px] md:overflow-y-scroll rounded-md md:pr-2">
        {/* // TODO: Add unique id to every patient.  */}
        {pacientes?.map((paciente) => (
          <Paciente key={paciente.id} paciente={{...paciente}} />
        ))}
      </div>
    </section>
  );
};

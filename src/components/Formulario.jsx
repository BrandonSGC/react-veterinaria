import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const Formulario = ({ pacientes, setPacientes }) => {
  const { formState, onInputChange, onResetForm } = useForm({
    id: "",
    mascota: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form info...
    if (
      formState.mascota === "" ||
      formState.propietario === "" ||
      formState.email === "" ||
      formState.alta === "" ||
      formState.sintomas === ""
    ) {
      // TODO: Show alert
      console.log("Llene todos los campos");
      return;
    }

    // Save data.
    setPacientes([...pacientes, {...formState, id: Date.now()}]);

    // Reset form
    onResetForm();
  };

  useEffect(() => {
    // Save data in localstorage
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <section>
      <h2 className="text-3xl font-black text-center">Seguimiento Pacientes</h2>

      <p className="mt-5 mb-5 text-lg font-medium text-center md:mb-10">
        Añade Pacientes y{" "}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="px-5 py-10 space-y-2 bg-white rounded-lg shadow-md top-5"
      >
        <div>
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            className="w-full p-2 placeholder-gray-400 border-2 rounded-md"
            type="text"
            id="mascota"
            name="mascota"
            placeholder="Nombre de la mascota"
            onChange={onInputChange}
            value={formState.mascota}
          />
        </div>

        <div>
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            className="w-full p-2 placeholder-gray-400 border-2 rounded-md"
            type="text"
            id="propietario"
            name="propietario"
            placeholder="Nombre del propietario"
            onChange={onInputChange}
            value={formState.propietario}
          />
        </div>

        <div>
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 placeholder-gray-400 border-2 rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Email contacto propietario"
            onChange={onInputChange}
            value={formState.email}
          />
        </div>

        <div>
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className="w-full p-2 placeholder-gray-400 border-2 rounded-md"
            type="date"
            id="alta"
            name="alta"
            onChange={onInputChange}
            value={formState.alta}
          />
        </div>

        <div>
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            className="w-full p-2 placeholder-gray-400 border-2 rounded-md"
            id="sintomas"
            name="sintomas"
            placeholder="Describe los Síntomas"
            onChange={onInputChange}
            value={formState.sintomas}
          ></textarea>
        </div>
        <input
          className="w-full p-3 font-bold text-white uppercase duration-300 bg-indigo-600 cursor-pointer hover:bg-indigo-700"
          type="submit"
          value="Enviar paciente"
        />
      </form>
    </section>
  );
};

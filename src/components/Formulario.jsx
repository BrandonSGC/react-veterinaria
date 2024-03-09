export const Formulario = () => {
  
  return (
    <div className=''>
      <h2 className='text-3xl font-black text-center'>Seguimiento Pacientes</h2>

      <p className="mt-5 text-lg">
        Añade Pacientes y{" "}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>

      <form className="bg-white shadow-md">
        <div>
          <label htmlFor="">Nombre Mascota</label>
          <input 
            type="text" 
            id="" 
            name="" 
            placeholder="Nombre de la mascota"/>
        </div>
      </form>
    </div>
  )
}

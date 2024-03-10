import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (e) => {
    // Get the name and value of the input.
    const { name, value } = e.target;
    // Create the object based on the input's info.
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const onResetForm = () => {
    // Set the form the initial form (empty strings).
    setFormState(initialForm);
  }
  
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
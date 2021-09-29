import React, { useState, useContext } from 'react';
import { Context as ctx } from 'providers/UsersProvider';
import Wrapper from 'components/atoms/Wrapper/Wrapper';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const initialFormValue = {
  fullName: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const { handleAdd } = useContext(ctx);
  const [formValues, setFormValue] = useState(initialFormValue);

  const handleFieldChange = ({ target: { name, value } }) =>
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  const handleFormSubmit = (e) => {
    console.log(e);
    console.log('dupa');
    e.preventDefault();
    handleAdd(formValues);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField
        name="fullName"
        id="fullName"
        label="Full name"
        onChange={handleFieldChange}
        value={formValues.fullName}
      />
      <FormField
        name="attendance"
        id="attendance"
        label="Attendance"
        type="number"
        onChange={handleFieldChange}
        value={formValues.attendance}
      />
      <FormField
        name="average"
        id="average"
        label="Average"
        type="number"
        onChange={handleFieldChange}
        value={formValues.average}
      />
      <button type="submit">Add user</button>
    </form>
  );
};

export default AddUser;

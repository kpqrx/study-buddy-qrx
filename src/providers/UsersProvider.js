import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usersData } from 'data/users';

export const Context = React.createContext({
  users: [],
  handleDelete: () => {},
  handleAdd: () => {},
});
const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const handleDelete = (fullName) =>
    setUsers((prevState) => prevState.filter((item) => item.fullName !== fullName));

  const handleAdd = (e, formValues) => {
    e.preventDefault();
    setUsers((prevState) => [...prevState, formValues]);
  };

  return (
    <Context.Provider
      value={{
        users,
        handleDelete,
        handleAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersProvider;

import React, { useState } from 'react';

import { usersData as initialData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledContainer } from './UsersList.styles';

const UsersList = () => {
  const [usersData, setUsersData] = useState(initialData);

  const deleteUser = (fullName) =>
    setUsersData((prevState) => prevState.filter((item) => item.fullName !== fullName));

  return (
    <StyledContainer>
      {usersData.map((userData) => (
        <UsersListItem data={userData} deleteFn={deleteUser} />
      ))}
    </StyledContainer>
  );
};

export default UsersList;

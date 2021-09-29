import React, { useContext } from 'react';
import { Context as ctx } from 'providers/UsersProvider';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import Wrapper from 'components/atoms/Wrapper/Wrapper';

const UsersList = () => {
  const { users } = useContext(ctx);

  return (
    <Wrapper>
      {users.map((userData) => (
        <UsersListItem data={userData} />
      ))}
    </Wrapper>
  );
};

export default UsersList;

import { useEffect, useState } from 'react';
import { getUsersList } from './UserCard/fetchUserCard';
import { UserCard } from './UserCard/UserCard';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [userCard, setUserCard] = useState([]);

  useEffect(() => {
     getUsersList()
      .then(({ data }) => setUserCard(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{marginTop: '20px'}}>
      {userCard.length === 0 ? <Loader /> : <UserCard data={userCard} />}
    </div>
  );
};

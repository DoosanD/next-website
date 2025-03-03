import React from 'react'
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // fetch users data from API
  const res = await  fetch(
    'https://jsonplaceholder.typicode.com/users', 
     { next: {revalidate: 10}}
  );
  const users: User[] = await res.json();

  return (
    <>
    <Link href="/">Home</Link>
      <h1>Users Page</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {users.map(users => (
        <div key={users.id}>
          <h2>{users.name}</h2>
          <p>{users.email}</p>
        </div>
      ))}
    </>
  )
}

export default UsersPage
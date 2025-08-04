import useFetch from "./useFetch";
type User = {
  id: number;
  name: string;
  email: string;
};

const UsersList = () => {
  const { data, loading } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Error!</p>;

  return (
    <div>
      {data.map(user => (
        <p key={user.id}>
          {user.name} ({user.email})
        </p>
      ))}
    </div>
  );
};

export default UsersList;
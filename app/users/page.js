import { getUsers } from "@/lib/prisma/users";

async function fetchUsers() {
  const { users } = await getUsers();

  if (!users) throw new Error("Failed to fetch users");
  return users;
}

const Users = async () => {
  const users = await fetchUsers();
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>{user.username}</li>
      ))}
    </ul>
  );
};

export default Users;

import React from "react";
import { useQuery } from "react-query";
import Looding from "../Share/Looding";
import UserCard from "./UserCard";

const AllUser = () => {
  const {
    isLoading,
    refetch,
    data: users,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/user`).then((res) => res.json())
  );

  if (isLoading) return <Looding />;
  return (
    <div>
      <h2 className="py-5 font-bold text-2xl capitalize text-primary">
        All Users
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* <UserCard key={user._id} user={user}/> */}
            {users.map((user) => (
              <UserCard key={user._id} refetch={refetch} user={user}></UserCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;

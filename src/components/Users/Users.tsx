import User from "./User.tsx";
import * as React from "react";
import { IUser } from "../../types";

interface Props {
  users: IUser[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    users && (
      <div className="row row-cols-2 column-gap-2">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  );
};

export default Users;

import ToolBar from "../../components/ToolBar/ToolBar.tsx";
import UserForm from "../../components/UserForm/UserForm.tsx";
import Users from "../../components/Users/Users.tsx";
import { useState } from "react";
import { IUser } from "../../types";

const UserManagement = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: "1",
      name: "Aziret",
      email: "test@gmail.com",
      active: true,
      role: "user",
    },
    {
      id: "2",
      name: "Aziret",
      email: "test@gmail.com",
      active: true,
      role: "user",
    },
    {
      id: "3",
      name: "Aziret",
      email: "test@gmail.com",
      active: true,
      role: "user",
    },
  ]);

  const addNewUser = (newUser: IUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container">
        <div className="row column-gap-5">
          <div className="col-3 mb-2">
            <UserForm addNewUSer={addNewUser} />
          </div>

          <div className="col mb-2">
            <Users users={users} />
          </div>
        </div>
      </main>
    </>
  );
};

export default UserManagement;

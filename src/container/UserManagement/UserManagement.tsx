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
      imageUrl: "https://cdn-icons-png.flaticon.com/128/560/560277.png",
    },
    {
      id: "2",
      name: "Aziret",
      email: "test@gmail.com",
      active: true,
      role: "editor",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/4635/4635631.png",
    },
    {
      id: "3",
      name: "Aziret",
      email: "test@gmail.com",
      active: true,
      role: "admin",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/3281/3281355.png",
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

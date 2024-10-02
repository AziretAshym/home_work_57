import * as React from "react";
import { useState } from "react";
import { IUserMutation } from "../../types";

const UserForm = ({ addNewUSer }) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    active: false,
    role: "",
  });

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      newUser.name.trim().length === 0 &&
      newUser.email.trim().length === 0 &&
      newUser.role.trim().length === 0
    ) {
      alert("Fill in all fields!");
    } else {
      addNewUSer({
        id: String(new Date()),
        ...newUser,
      });
    }
    setNewUser({
      name: "",
      email: "",
      active: false,
      role: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new USER</h3>

      <div className="form-group mb-2">
        <label htmlFor="name">UserName:</label>
        <input
          value={newUser.name}
          type="text"
          id="name"
          name="name"
          className="form-control"
          onChange={changeUser}
          required
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="email">Email:</label>
        <input
          value={newUser.email}
          type="email"
          id="email"
          name="email"
          className="form-control"
          onChange={changeUser}
          required
        />
      </div>

      <div className="form-group mb-2">
        <label className="me-2">Status:</label>
        <div className="btn-group" role="group" aria-label="Active status">
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck-active"
            autoComplete="off"
            checked={newUser.active}
          />
          <label className="btn btn-outline-primary" htmlFor="btncheck-active">
            {newUser.active ? "Online" : "Offline"}
          </label>
        </div>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="role">Role:</label>
        <select
          value={newUser.role}
          className="form-control"
          aria-label="Default select example"
          id="role"
          name="role"
          onChange={changeUser}
          required
        >
          <option value="" disabled>
            Select user role
          </option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button className="btn btn-primary">Add new user</button>
    </form>
  );
};

export default UserForm;

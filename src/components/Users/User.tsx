import { IUser } from "../../types";
import * as React from "react";

interface Props {
  user: IUser;
}

const images = {
  user: "https://cdn-icons-png.flaticon.com/128/560/560277.png",
  editor: "https://cdn-icons-png.flaticon.com/128/4635/4635631.png",
  admin: "https://cdn-icons-png.flaticon.com/128/3281/3281355.png",
};

const User: React.FC<Props> = ({ user }) => {
  const getImage = (role: string) => {
    return images[role];
  };

  const getStatus = () => {
    if (user.active) {
      return "Online";
    } else {
      return "Offline";
    }
  };

  return (
    <div
      className="border mb-3 rounded d-flex justify-content-between"
      style={{ width: "450px" }}
    >
      <div className="pt-5 ps-2">
        <h5 className="card-title mb-3">User: {user.name}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Active: {getStatus()}</p>
        <p className="card-text">Role: {user.role}</p>
      </div>
      <img
        src={getImage(user.role)}
        alt={user.role}
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default User;

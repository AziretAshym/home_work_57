const UserForm = () => {
  return (
    <form>
      <h3>Add new USER</h3>

      <div className="form-group mb-2">
        <label htmlFor="name">UserName:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
        />
      </div>

      <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">

        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
        <label className="btn btn-outline-primary" htmlFor="btncheck1">Online</label>

        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
        <label className="btn btn-outline-primary" htmlFor="btncheck2">Offline</label>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="role">Role:</label>
        <select
          className="form-control"
          aria-label="Default select example"
          id="role"
          name="role"
        >
          <option selected>Open this select menu</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>


    </form>
  );
};

export default UserForm;
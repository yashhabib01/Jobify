import React from "react";
import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/useAppContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const Profile = () => {
  const { user, showAlert, displayAlert, isLoading, updateUser } =
    useAppContext();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [location, setLocation] = useState(user.location);
  const [lastname, setLastname] = useState(user.lastname);

  const handleSubmit = (e) => {
    e.preventDefault();
    // remove while testing
    // if (!name || !email || !lastname || !location) {
    //   displayAlert();
    //   // return;
    // // }
    updateUser({ name, email, location, lastname });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastname"
            value={lastname}
            handleChange={(e) => setLastname(e.target.value)}
          />

          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please Wait... " : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;

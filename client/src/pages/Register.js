import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/useAppContext";
import { useNavigate } from "react-router-dom";
const initalState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initalState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const {
    user,
    showAlert,
    isLoading,
    displayAlert,
    clearAlert,

    SetUpUser,
  } = useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, isMember, password } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      clearAlert();
      return;
    }
    const currentUser = { name, email, password };

    if (isMember) {
      SetUpUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      SetUpUser({
        currentUser,
        endPoint: "register",
        alertText: "Login Successful! Redirecting...",
      });
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {/* name input    */}

        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            handleChange={handleChange}
            name="name"
          />
        )}

        {/* email input    */}
        <FormRow
          type="email"
          value={values.email}
          handleChange={handleChange}
          name="email"
        />
        {/* password input    */}
        <FormRow
          type="password"
          value={values.password}
          handleChange={handleChange}
          name="password"
        />
        <button className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <button
          className="btn btn-block btn-hipster"
          type="button"
          disabled={isLoading}
          onClick={() => {
            SetUpUser({
              currentUser: { email: "testUser@test.com", password: "password" },
              endPoint: "login",
              alertText: "Login Successful! Redirecting...",
            });
          }}
        >
          {isLoading ? "..loading" : "Demo App"}
        </button>
        <p>
          {values.isMember ? "Not a member yer?" : "Already a member?"}
          <button
            className="member-btn"
            type="button"
            onClick={toggleMember}
            disabled={isLoading}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;

import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";

const HomePage = () => {
  const [IsSignup, setIsSignup] = useState(false);

  const changeForms = () => {
    setIsSignup(!IsSignup);
  };
  return (
    <>
      <p>this is Home page </p>
      <div className=" fixed inset-0 flex items-center justify-center" style={{backgroundImage : 'url("src/assets/main-bg.jpg")', backgroundSize: 'cover'}}>
        {IsSignup ? (
          <SignUpForm toggleForm={changeForms} />
        ) : (
          <LoginForm toggleForm={changeForms} />
        )}
      </div>
    </>
  );
};

export default HomePage;

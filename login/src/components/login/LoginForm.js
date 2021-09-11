import React from "react";
import FormHeader from "./FormHeader";
import Form from "./Form"
import { OtherMethods } from "./LoginByOtherMethods";

const LoginForm = () => {
    return (
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    );
  };

export default LoginForm;
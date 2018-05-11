import React from "react";
import Card from "./Card";

import LoginForm from "./login";
import SignupForm from "./signup/SignupForm";
import CreateNewFile from "./createfile/CreateFile";
import Filepond from "./fileupload/FilePond";
import Error from "./Error";

// A multi-purpose presentational component that renders a Card component
// the various forms that we have for the user

const FormPage = view => {
  let page = 0;
  switch (view) {
    case "login":
      page = <LoginForm />;
      break;
    case "signup":
      page = <SignupForm />;
      break;
    case "upload":
      page = <Filepond />;
      break;
    case "error":
      page = <Error />;
      break;
    default:
      page = <CreateNewFile />;
  }

  return (
    <div className="form-page">
      <div className="spacer"></div>
      <Card cardStyle={{ textAlign: "center" }}>{page}</Card>
      <div className="spacer"></div>
    </div>
  );
};

export default FormPage;

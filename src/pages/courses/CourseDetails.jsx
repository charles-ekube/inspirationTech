import React from "react";
import { useLocation, useRoutes } from "react-router-dom";

const CourseDetails = (props) => {
  const params = useLocation();

  console.log(params.state.params);
  const renderTab = () => {
    if (params?.state?.params === "1") {
      return "Product";
    }
    if (params?.state?.params === "2") {
      return "FrontEnd";
    }
    if (params?.state?.params === "3") {
      return "Backend";
    }
  };
  return (
    <>
      <p>{renderTab()}</p>
    </>
  );
};

export default CourseDetails;

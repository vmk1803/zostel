import React from "react";
import styled from "styled-components";
// import successMsg from "./success.svg";
// import { useHistory } from "react-router-dom";
import { Navbar } from "../main/Home/Navbar/Navbar";

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const PaymentSuccess = () => {
  // const history = useHistory();

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     return history.push("/");
  //   }, 8000);
  // }, [history]);

  return (
    <>
      <Navbar />
      <div className="container text-center">
        <h2 className="my-3 h1 text-success" style={{ textAlign: "center" }}>
          Payment Successful!
        </h2>
        <ImgDiv>
          <img
            className=" img-fluid"
            style={{ width: "40%" }}
            src="https://zostel-clone-kerrybli.vercel.app/static/media/success.feee9210.svg"
            alt="success"
          />
        </ImgDiv>
      </div>
    </>
  );
};

export { PaymentSuccess };

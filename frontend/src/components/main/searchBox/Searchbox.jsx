import React from "react";
import "./SearchBox.css";
import { useState } from "react";
import cities from "./cities.json";
import { useNavigate } from "react-router-dom";

export const Searchbox = () => {
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
    setSCNDTOGGLE(false);
  };

  const [scndtoggle, setSCNDTOGGLE] = useState(true);
  const scndtogglebtn = () => {
    setSCNDTOGGLE(!scndtoggle);
    setToggle(false);
  };

  return (
    <>
      <div className="background">
        <div className="option1">
          <button
            style={{
              backgroundColor: scndtoggle ? "#F1563F" : "rgb(35,22,17)",
            }}
            onClick={() => scndtogglebtn()}
          >
            ZOSTAL
          </button>
        </div>
        <div className="option2">
          <button
            className="btnmnmn"
            style={{ backgroundColor: toggle ? "#F1563F" : "rgb(35,22,17)" }}
            onClick={toggleButton}
          >
            Zostel Homes
          </button>
        </div>

        <div className="container ">
          <div className="d-flex gap-2">
            <select
              style={{ color: "#F1563F" }}
              className=" bg-white py-3 col-4 btn"
              onChange={handleSelect}
              value={value}
            >
              <option value="" selected disabled>
                Select Destination
              </option>

              <option value="ALLEPPEY">ALLEPPEY</option>
              <option value="AURANGABAD">AURANGABAD</option>
              <option value="BANGALORE">BANGALORE</option>
              <option value="BAROT (RAJGUNDHA)">BAROT (RAJGUNDHA)</option>
              <option value="BIR 2.0">BIR 2.0</option>
              <option value="CHENNAI">CHENNAI</option>
              <option value="CHITKUL">CHITKUL</option>
              <option value="COORG">COORG</option>
              <option value="DALHOUSIE">DALHOUSIE</option>
              <option value="DELHI">DELHI</option>
              <option value="GANGTOK">GANGTOK</option>
              <option value="GOKARNA">GOKARNA</option>
              <option value="JAIPUR">JAIPUR</option>
              <option value="JAISALMER">JAISALMER</option>
              <option value="JODHPUR">JODHPUR</option>
              <option value="KATHMANDU">KATHMANDU</option>
              <option value="KOCHI">KOCHI</option>
              <option value="KODAIKANAL">KODAIKANAL</option>
              <option value="KOLAD">KOLAD</option>
              <option value="LEH">LEH</option>
              <option value="MANALI">MANALI</option>
              <option value="MCLEODGANJ">MCLEODGANJ</option>
              <option value="MUKTESHWAR">MUKTESHWAR</option>
              <option value="MUMBAI">MUMBAI</option>
              <option value="MUNNAR">MUNNAR</option>
              <option value="MUSSOORIE">MUSSOORIE</option>
              <option value="MYSORE">MYSORE</option>
              <option value="OOTY">OOTY</option>
              <option value="PANCHGANI">PANCHGANI</option>
              <option value="POKHARA">POKHARA</option>
              <option value="PUSHKAR">PUSHKAR</option>
              <option value="RISHIKESH 2.0">RISHIKESH 2.0</option>
              <option value="SHANGARH">SHANGARH</option>
              <option value="SISSU">SISSU</option>
              <option value="SPITI">SPITI</option>
              <option value="UDAIPUR">UDAIPUR</option>
              <option value="VAGAMON">VAGAMON</option>
              <option value="VARKALA">VARKALA</option>
              <option value="WAYANAD">WAYANAD</option>
            </select>

            <input
              style={{ color: "#F1563F" }}
              className="py-2 btn  btn  col-2  bg-white"
              type="date"
              name=""
              id=""
            />
            <input
              style={{ color: "#F1563F" }}
              className=" py-2 btn col-2 bg-white"
              type="date"
              name=""
              id=""
            />

            <button
              style={{ background: "#F1563F" }}
              onClick={() => {
                navigate("/hotel");
              }}
              className="col-5 py-2 size btn text-uppercase text-white"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

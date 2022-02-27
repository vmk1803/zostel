import "./Navbar.css";
import logo from "../../assets/images/all_images/zostel-logo.svg";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import {Dropdown} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown'
// import {DropdownButton} from "react-bootstrap"
import DropdownButton from 'react-bootstrap/DropdownButton'

export const Navbar = () => {
  return (
    <div>
      <div className="Navbar_Border">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="Navbar_cont">
      <div className="button">
        <DropdownButton id="dropdown-item-button"  menuVariant="dark" data-hover="dropdown"  className="btnhover" title="HOSTELS" size="sm" variant="white">
  {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
 
  <Dropdown.Item className="itemmenue" as="button">Alleppey</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Aurangabad</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Bangalore</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Barot (Rajgundha)</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">BIR 2.0</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Chennai</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Chitkul</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Coorg</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Dalhousie</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Delhi</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Gangtok</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Gokarna</Dropdown.Item>
  <Dropdown.Item className="itemmenue" as="button">Jaipur</Dropdown.Item>
  {/* <Dropdown.Item as="button">Something else</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item> */}
  
  

</DropdownButton>

<DropdownButton id="dropdown-item-button" title="ZOSTEL HOMES" size="sm" variant="white"  menuVariant="dark" data-hover="dropdown"  className="btnhover">
  {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
 

                          <Dropdown.Item>      <li>What are Zostel Homes</li>       </Dropdown.Item>
                          <Dropdown.Item>     <li>Karupuzha, Wayanad</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Thirunelly, Wayanad</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Pushkar, Rajasthan</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Kotkhai, Shimla</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Rashil, Lahaul</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Madikeri, Coorg</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Burwa, Manali</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Theog, Shimla</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Cheog, Shimla</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Rakchham, Kinnaur</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Mashobra, Shimla</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Rumsu, Manali</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Tabo, Spiti</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Kotgarh, Shimla</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Laida, Jibhi</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Dobhi, Kullu</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Shuru, Manali</li>   </Dropdown.Item>
                          <Dropdown.Item>     <li>Kibber, Spiti</li>   </Dropdown.Item>







</DropdownButton>
</div>
        
        <li className="menu-options">TRAVEL FOR TOMORROW</li>
        <li className="menu-options">LONGSTAYS</li>
        <li className="menu-options">BOOK NOW</li>

        <li className="menu-options">CAREERS</li>

        <li className="menu-options option">FRANCHISE</li>
        <li className="menu-options">BLOGS</li>
      </div>
      </div>
    </div>
  
  );
};

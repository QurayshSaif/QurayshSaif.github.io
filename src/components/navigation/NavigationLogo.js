import { NavLink } from "react-router-dom";
import IconBlack from "../../assets/images/coder.svg";
import ResetLocation from "../../helpers/ResetLocation";

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      className="logo-section"
      onClick={() => {
        ResetLocation();
        props.closeMenu();
      }}
    >
      <img src={IconBlack} alt="logo"></img>
    </NavLink>
  );
};

export default NavigationLogo;

import "./toggle.css";
import SunImg from "../../assets/img/sun.svg";
import MoonImg from "../../assets/img/moon.svg";
import { ThemeContext } from "../../data/context";
import { useContext } from "react";

export const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({
      type: "TOGGLE",
    });
  };
  return (
    <div className="t" onClick={handleClick}>
      <img src={SunImg} alt="" className="t-icon" />
      <img src={MoonImg} alt="" className="t-icon" />
      {theme.state.darkMode ? (
        <div className="t-button night"></div>
      ) : (
        <div className="t-button day"></div>
      )}
    </div>
  );
};

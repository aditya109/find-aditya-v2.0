import "./intro.css";
import DeveloperIllustration from "../../assets/img/dev-profile.svg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">Aditya Kumar</h1>
          <div className="i-title-sub">working as</div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">DevOps Engineer</div>
              <div className="i-title-item">Open-source Advocate</div>
            </div>
          </div>
          {/* <p className="i-desc">Not Your Average Software Developer</p> */}
        </div>
        <svg
          className="i-scroll-full"
          width="41"
          height="67"
          viewBox="0 0 41 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="35"
            height="61"
            rx="17.5"
            stroke="green"
            stroke-width="6"
          />
          <circle
            className="i-scroll-dot"
            cx="20.5"
            cy="21.5"
            r="10.5"
            fill="green"
          />
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={DeveloperIllustration} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

import "./featured.css";
import FeatureProjectImage from "../../assets/img/litmus.png";
import GithubLogo from "../../assets/img/GitHub_Logo.png";
import { openInNewTab } from "../../helpers/helpers";

const featureProjectURL =
  "https://github.com/litmuschaos/charthub.litmuschaos.io";

export const Featured = () => {
  return (
    <div className="f">
      <div className="f-left">
        <h1 className="f-preface">Featured</h1>
        <h2 className="f-title">LitmusChaosHub</h2>
        <p className="f-subtitle">Community chart hub for LitmusChaos</p>
        <p className="f-desc">
          Built and maintained the website <br />
          which hosts chaos declarative and tunable experiments for Kubernetes
          for <br />
          <strong>LitmusChaos</strong>
          &nbsp;- CNCF Sandbox Project.
        </p>
        <div
          className="f-logo-container"
          onClick={() => openInNewTab(featureProjectURL)}
        >
          <img
            src={GithubLogo}
            title="Click to view repository"
            className="f-logo"
          />
        </div>
      </div>
      <div className="f-right">
        <div className="f-card bg"></div>
        <div className="f-card">
          <img src={FeatureProjectImage} alt="" className="f-img" />
        </div>
      </div>
    </div>
  );
};

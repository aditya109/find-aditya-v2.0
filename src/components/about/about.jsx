import "./about.css";
import SkillGraphics from "../../assets/img/skill-graphics.svg";
import CKABadge from "../../assets/img/cka-certified-kubernetes-administrator.png";
import { openInNewTab } from "../../helpers/helpers";

const certVerificationURL =
  "https://www.credly.com/badges/65b33e5c-851e-4db6-aba7-8f96cbe837b9/public_url";

export const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={FeatureProjectImage} alt="" className="a-img" />
                </div> */}
        <div className="a-card">
          <img src={SkillGraphics} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        {/* About Section */}
        <div className="a-about">
          <h1 className="a-title">About me</h1>
          <p className="a-sub">Not your average software developer !</p>
          <p className="a-desc">
            I am a software engineer who constantly seeks out innovative
            solutions to everyday problems. <br />
            In my two years in this industry, I've honed my analytical thinking
            and collaboration skills, <br />
            and I love working with a team. <br />
            Backend engineering and devops has been my speciality for major part
            of my career. <br />I love working on open-source projects in my
            free-time,
            <br />
            aspiring to be a successful&nbsp;
            <i>
              <strong>Cloud Architect</strong>
            </i>
            . (*°ｰ°)ﾉ
          </p>
        </div>
        {/* Card Section */}
        <div className="a-cards">
          {/* Skills */}
          <div className="a-skills">
            {/* <h1 className="a-title">Skills</h1> */}
            <div className="a-skills-cards">
              <div className="a-skills-card">
                <p className="a-skills-list">
                  Golang, .NET Core, Python, MySQL
                </p>
                <p className="a-skills-type">Backend stack</p>
              </div>
              <div className="a-skills-card">
                <p className="a-skills-list">Docker, Kubernetes, Travis, GCP</p>
                <p className="a-skills-type">DevOps stack</p>
              </div>
            </div>
          </div>

          {/* CKA Certification */}
          <div
            className="a-award"
            title="Click to verify certificate"
            onClick={() => openInNewTab(certVerificationURL)}
          >
            <img src={CKABadge} alt="cka-badge" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">
                Certified Kubernetes Administrator
              </h4>
              <p className="a-award-desc">
                The Certified Kubernetes Administrator (CKA) program was created
                by the Cloud Native Computing Foundation (CNCF), in
                collaboration with The Linux Foundation, to help develop the
                Kubernetes ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

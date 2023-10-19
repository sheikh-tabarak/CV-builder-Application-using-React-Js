import * as React from "react";

//import image from "../../test_image.png";
import Experience from "../templates/template1/experience";

export class ComponentToPrint extends React.PureComponent {

  
  constructor(props) {
    super(props);

    this.state = {
      websitelink: "https://" + props.website + "?target=”_blank”",
      emaillink: "mailto:" + props.email,
      phonelink: "tel:" + props.phone,

      image: props.uploadedimage,
      headline: props.headline,
      name: props.name,
      email: props.email,
      phone: props.phone,
      website: props.website,
      city: props.city,
      aboutme: props.aboutme,
      designation: props.designation,
      company: props.company,
      sdate: props.sdate,
      edate: props.edate,
      jobdesc: props.jobdesc,
      test: props.test,
    };
  }

  //canvasEl;

  setRef = (ref) => (this.canvasEl = ref);

  render() {
    const { text } = this.props;

    return (
      <>
        
        <div  class="sidebar-wrapper">
            <div class="profile-container">
              <img class="profile" src={this.state.image} alt="" />
              <h1 class="name">{this.state.name}</h1>
              <h3 class="tagline">{this.state.headline}</h3>
            </div>

            <div class="contact-container container-block">
              <ul class="list-unstyled contact-list">
                <li class="email">
                  <i class="fa-solid fa-envelope"></i>
                  <a href={this.state.emaillink}>{this.state.email}</a>
                </li>
                <li class="phone">
                  <i class="fa-solid fa-phone"></i>
                  <a href={this.state.phonelink}>{this.state.phone}</a>
                </li>
                <li class="website">
                  <i class="fa-solid fa-globe"></i>
                  <a href={this.state.websitelink} target="_blank">
                    {this.state.website}
                  </a>
                </li>
                <li class="city">
                  
                  <a href="#" target="_blank">
                    {this.state.city}
                  </a>
                </li>
              </ul>
            </div>
            <div class="education-container container-block">
              <h2 class="container-block-title">Education</h2>
              <div class="item">
                <h4 class="degree">MSc in Computer Science</h4>
                <h5 class="meta">University of London</h5>
                <div class="time">2016 - 2018</div>
              </div>
              <div class="item">
                <h4 class="degree">BSc in Applied Mathematics</h4>
                <h5 class="meta">Bristol University</h5>
                <div class="time">2012 - 2016</div>
              </div>
            </div>

            <div class="languages-container container-block">
              <h2 class="container-block-title">Languages</h2>
              <ul class="list-unstyled interests-list">
                <li>
                  English <span class="lang-desc">(Native)</span>
                </li>
                <li>
                  French <span class="lang-desc">(Professional)</span>
                </li>
                <li>
                  Spanish <span class="lang-desc">(Professional)</span>
                </li>
              </ul>
            </div>

            <div class="interests-container container-block">
              <h2 class="container-block-title">Interests</h2>
              <ul class="list-unstyled interests-list">
                <li>Climbing</li>
                <li>Snowboarding</li>
                <li>Cooking</li>
              </ul>
            </div>
          </div>

          <div className="main-wrapper">
            <section className="section summary-section">
              <h2 className="section-title">About Me</h2>
              <div className="summary">
                <p>{this.state.aboutme}</p>
              </div>
            </section>
            <section className="section experiences-section">
              <h2 className="section-title">Experiences</h2>

              <Experience
                jobtitle={this.state.designation}
                startdate={this.state.sdate}
                enddate={this.state.edate}
                company={this.state.company}
                desc={this.state.jobdesc}
              />
            </section>
            <section className="section projects-section">
              <h2 className="section-title">Projects</h2>
              <div className="intro">
                <p>
                  You can list your side projects or open source libraries in
                  this section. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum et ligula in nunc bibendum
                  fringilla a eu lectus.
                </p>
              </div>
              <div className="item">
                <span className="project-title">
                  <a
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/"
                    target="_blank"
                  >
                    CoderPro
                  </a>
                </span>{" "}
                -{" "}
                <span className="project-tagline">
                  A responsive website template designed to help developers
                  launch their software projects.{" "}
                </span>
              </div>
              <div className="item">
                <span className="project-title">
                  <a
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-5-template-for-saas-businesses/"
                    target="_blank"
                  >
                    Launch
                  </a>
                </span>{" "}
                -{" "}
                <span className="project-tagline">
                  A responsive website template designed to help startups
                  promote their products or services.
                </span>
              </div>
              <div className="item">
                <span className="project-title">
                  <a
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-5-vcard-portfolio-template-for-software-developers/"
                    target="_blank"
                  >
                    DevCard
                  </a>
                </span>{" "}
                -{" "}
                <span className="project-tagline">
                  A portfolio website template designed for software developers.
                </span>
              </div>
              <div className="item">
                <span className="project-title">
                  <a
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/"
                    target="_blank"
                  >
                    Nova Pro
                  </a>
                </span>{" "}
                -{" "}
                <span className="project-tagline">
                  A responsive Bootstrap theme designed to help app developers
                  promote their mobile apps
                </span>
              </div>
              <div className="item">
                <span className="project-title">
                  <a
                    href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
                    target="_blank"
                  >
                    DevStudio
                  </a>
                </span>{" "}
                -
                <span className="project-tagline">
                  A responsive website template designed to help web
                  developers/designers market their services.{" "}
                </span>
              </div>
            </section>
            <section className="skills-section section">
              <h2 className="section-title">
                <span className="icon-holder">
                  <i className="fa-solid fa-rocket" />
                </span>
                Skills &amp; Proficiency
              </h2>
              <div className="skillset">
                <div className="item">
                  <h3 className="level-title">Python &amp; Django</h3>
                  <div className="progress level-bar">
                    <div
                      className="progress-bar theme-progress-bar"
                      role="progressbar"
                      style={{ width: "99%" }}
                      aria-valuenow={99}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="item">
                  <h3 className="level-title">Javascript</h3>
                  <div className="progress level-bar">
                    <div
                      className="progress-bar theme-progress-bar"
                      role="progressbar"
                      style={{ width: "98%" }}
                      aria-valuenow={98}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="item">
                  <h3 className="level-title">React &amp; Angular</h3>
                  <div className="progress level-bar">
                    <div
                      className="progress-bar theme-progress-bar"
                      role="progressbar"
                      style={{ width: "98%" }}
                      aria-valuenow={98}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="item">
                  <h3 className="level-title">HTML5 &amp; CSS</h3>
                  <div className="progress level-bar">
                    <div
                      className="progress-bar theme-progress-bar"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="item">
                  <h3 className="level-title">Ruby on Rails</h3>
                  <div className="progress level-bar">
                    <div
                      className="progress-bar theme-progress-bar"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="item">
                  <h3 className="level-title">Sketch &amp; Photoshop</h3>
                  <div className="progress level-bar">
                    <div
                      className="progress-bar theme-progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </section>
        </div>
       

        <div style={{ padding: 15 }} class="text-center">
          <div>
            Designed with by{" "}
            <a href="http://techlegion.ml" target="_blank">
              Tech Legion
            </a>{" "}
            for {this.state.name}
          </div>
        </div>

        <div>{this.state.name}</div>
      </>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <ComponentToPrint ref={ref} text={props.text} />;
});

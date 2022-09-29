import React, { useState } from 'react'
import ".//template1style.css";
import Experience from "./experience";





export default function template1(props) {

var website = "https://"+props.website+"?target=”_blank”";
var email = "mailto:"+props.email;
var phone = "tel:"+props.phone;
//const website = useState(web);
 
  return (


    <>
<head>
    <title>Simple Design | CV Design 01</title>
    </head>



    <body>

  {/**/} <div class="wrapper"> 
        <div class="sidebar-wrapper">
            <div class="profile-container">

                <img class="profile" src={props.uploadedimage} alt="" />
                <h1 class="name">{props.name}</h1>
                <h3 class="tagline">{props.headline}</h3>
            </div>
           
            <div class="contact-container container-block">
                <ul class="list-unstyled contact-list">
                    <li class="email"><i class="fa-solid fa-envelope"></i><a href={email}>{props.email}</a></li>
                    <li class="phone"><i class="fa-solid fa-phone"></i><a href={phone}>{props.phone}</a></li>
                    <li class="website"><i class="fa-solid fa-globe"></i><a href={website} target="_blank">{props.website}</a></li>
                    <li class="linkedin"><i class="fa-brands fa-linkedin-in"></i><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
                    <li class="github"><i class="fa-brands fa-github"></i><a href="#" target="_blank">github.com/username</a></li>
                    <li class="twitter"><i class="fa-brands fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>
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
                    <li>English <span class="lang-desc">(Native)</span></li>
                    <li>French <span class="lang-desc">(Professional)</span></li>
                    <li>Spanish <span class="lang-desc">(Professional)</span></li>
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
          <p>{props.aboutme}</p>
          </div>
        </section>
        <section className="section experiences-section">
        <h2 className="section-title">Experiences</h2>
          
          <Experience jobtitle="test" startdate="11" enddate="end" company="company" desc="desc"/>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Senior Software Engineer</h3>
                <div className="time">2018 - 2022</div>
              </div>
              <div className="company">Google, London</div>
            </div>
            <div className="details">
              <p>Test Description</p>  
            </div>
          </div>
          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">UI Developer</h3>
                <div className="time">2016 - 2018</div>
              </div>
              <div className="company">Amazon, London</div>
            </div>
            <div className="details">
            <p>Test Description</p> 
          </div>
          </div>
        </section>
        <section className="section projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="intro">
            <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
          </div>
          <div className="item">
            <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/" target="_blank">CoderPro</a></span> - <span className="project-tagline">A responsive website template designed to help developers launch their software projects. </span>
          </div>
          <div className="item">
            <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-5-template-for-saas-businesses/" target="_blank">Launch</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services.</span>
          </div>
          <div className="item">
            <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-5-vcard-portfolio-template-for-software-developers/" target="_blank">DevCard</a></span> - <span className="project-tagline">A portfolio website template designed for software developers.</span>
          </div>
          <div className="item">
            <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank">Nova Pro</a></span> - <span className="project-tagline">A responsive Bootstrap theme designed to help app developers promote their mobile apps</span>
          </div>
          <div className="item">
            <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> - 
            <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
          </div>
        </section>
        <section className="skills-section section">
          <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-rocket" /></span>Skills &amp; Proficiency</h2>
          <div className="skillset">        
            <div className="item">
              <h3 className="level-title">Python &amp; Django</h3>
              <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '99%'}} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
              </div>                               
            </div>
            <div className="item">
              <h3 className="level-title">Javascript</h3>
              <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '98%'}} aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} />
              </div>                              
            </div>
            <div className="item">
              <h3 className="level-title">React &amp; Angular</h3>
              <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '98%'}} aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} />
              </div>                                 
            </div>
            <div className="item">
              <h3 className="level-title">HTML5 &amp; CSS</h3>
              <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
              </div>                                
            </div>
            <div className="item">
              <h3 className="level-title">Ruby on Rails</h3>
              <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>                                  
            </div>
            <div className="item">
              <h3 className="level-title">Sketch &amp; Photoshop</h3>
              <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>                                 
            </div>
          </div>  
        </section>
      </div> 
    </div>
 
    
        <div class="text-center">
           
     {    <small class="copyright">Designed with <i class="fa-solid fa-heart"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
}
        </div>
  
        {/* */} 
</body>


    <div>
    </div>
    </>
    
    )
}

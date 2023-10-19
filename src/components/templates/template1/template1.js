import React, { useEffect, useRef, useState } from "react";
import ".//template1style.css";
import Experience from "./experience";
import downLoadPdf from "../../configurations/downloading";
import { LABELS } from "../../Labels";
import PrimaryInputField from "../../configurations/PrimaryInputField";
import TemplateHeader from "../TemplateHeader";

import { RxAvatar } from "react-icons/rx";
import { SketchPicker } from "react-color";
import CustomizationBar from "../../configurations/CustomizationBar";
import renderThisHtml from "./html";
import html2canvas from "html2canvas";
// import Canvas,({ draw, height, width }) from "../Canvas";

// import { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';

export default function Template1(props) {
  var website = "https://" + props.website + "?target=”_blank”";
  var email = "mailto:" + props.email;
  var phone = "tel:" + props.phone;

  const pdfRef = useRef();
  const [imageu, setImage] = useState();
let drawIsThis;


  // useEffect(() => {
  //   console.log("Image loaded");

  // }, [props.PersonalObject.image]);

  useEffect(() => {
    // renderHtmlToCanvas( document.getElementById( 'myCanvas' ), document.getElementById( 'thisis' ) );
    // const context = Canvas.current.getContext(document.getElementById("thisis").getContext());
    // // .current.getContext(getElementbyId("thisis").getContext());
    // draw(context);
  }, []);

  // const [Color, setColor] = useState("");
  // const [OpenColorPallette, setOpenColorPallette] = useState(false);

  return (
    <> 
    {/* {renderHtmlToCanvas(
        document.getElementById("myCanvas"),
        renderThisHtml
      )} */}
      <TemplateHeader pdfRef={pdfRef} />
      {/* <canvas drawImage={drawIsThis} id="myCanvas" height={400} width={400} /> */}



     

      <div
        id="thisis"
        ref={pdfRef}
        class={`wrapper bg-${props.Color}-500!important`}
      >
        {/* sidebar-wrapper */}
        <div
          class={`h-full w-60 right-0 absolute bg-${
            props.Color === "black" ? props.Color : props.Color + "-500"
          }`}
        >
          <div class="profile-container">
            {props.PersonalObject.image === undefined ||
            props.PersonalObject.image === "" ? (
              <div className="">
                <RxAvatar className="w-24 h-24 text-gray-500 dark:text-white" />
              </div>
            ) : (
              <img
                className="w-10 h-10 rounded-full"
                src={props.PersonalObject.image}
                alt="Rounded avatar"
              />
            )}

            <p class="name break-words">{props.PersonalObject.name}</p>
            <p class="headline break-words">{props.PersonalObject.headline}</p>
          </div>

          <div class="contact-container container-block">
            <ul class="list-unstyled contact-list">
              <li class="email">
                <i class="fa-solid fa-envelope"></i>
                <a href={email}>{props.PersonalObject.email}</a>
              </li>
              <li class="phone">
                <i class="fa-solid fa-phone"></i>
                <a href={phone}>{props.PersonalObject.phone}</a>
              </li>
              <li class="website">
                <i class="fa-solid fa-globe"></i>
                <a href={website} target="_blank">
                  {props.PersonalObject.website}
                </a>
              </li>
              <li class="linkedin">
                <i class="fa-brands fa-linkedin-in"></i>
                <a href="#" target="_blank">
                  {props.PersonalObject.city}
                </a>
              </li>

              <li class="linkedin">
                <i class="fa-brands fa-linkedin-in"></i>
                <a href="#" target="_blank">
                  {props.PersonalObject.gender}
                </a>
              </li>
            </ul>
          </div>
          <div class="education-container container-block">
            <h2 class="container-block-title">Education</h2>

            {props.EducationObject.map((value, index) => (
              <div class="item">
                <h4 class="degree">{value.education}</h4>
                <div class="time">
                  {value.start} - {value.end}
                </div>

                {value.institute !== "" ? (
                  <h5 class="meta">
                    {value.institute}, {value.city}
                  </h5>
                ) : (
                  ""
                )}

                <h3 class="meta pt-2 text-xs">{value.description}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className={`main-wrapper`}>
          <section className="section summary-section">
            <h2 className="section-title">About Me</h2>
            <div className="summary">
              <p>{props.PersonalObject.aboutme}</p>
            </div>
          </section>

          <section className="section experiences-section">
            <h2 className="section-title">Experiences</h2>

            {props.ExperienceObject.map((value, index) => (
              <div className="item">
                <div className="meta">
                  <div className="flex justify-between">
                    <h3 className="flex">{value.position}</h3>
                    <div className="flex">
                      {value.start} - {value.end}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="company">{value.company},</div>
                    <div className="company">{value.city}</div>
                  </div>
                </div>
                <div className="details">
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="section projects-section">
            <h2 className="section-title">Projects</h2>
            {/* <div className="intro">
              <p>Below is the list of Projects I have completed</p>
            </div> */}

            {props.ProjectObject.map((value, index) => (
              <div className="item">
                <span className="project-title">
                  <a
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/"
                    target="_blank"
                  >
                    {value.title}
                  </a>
                </span>{" "}
                -{" "}
                {value.company ? (
                  <span className="text-xs">
                    Associated with {value.company}
                  </span>
                ) : (
                  ""
                )}
                <p className="project-tagline">{value.description}</p>
              </div>
            ))}
          </section>

          <div className="w-full flex justify-stretch gap-6">
            <div className="w-1/2">
              <h2 className="section-title">Skills</h2>

              <div className="skillset">
                {props.SkillsObject.map((value, index) => (
                  <div className="item">
                    <h3 className="text-xs pb-1">{value.skill}</h3>

                    <div class="w-full bg-gray-300  h-1 rounded-full">
                      <div
                        style={{ width: parseInt(value.proficiancy) + "%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-1/2">
              <h2 className="section-title">Languages</h2>

              <div className="skillset">
                {props.LanguageObject.map((value, index) => (
                  <div className="item">
                    <h3 className="text-xs pb-1">{value.Language}</h3>

                    <div class="w-full bg-gray-300  h-1 rounded-full">
                      <div
                        class={`h-1 rounded-full`}
                        style={{
                          width: parseInt(value.proficiancy) * 20 + "%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-white mt-40 w-full relative bottom-0 text-center bg-gray-700 py-3">
          Resume Created by {LABELS.sitename}
        </div>
      </div>


      
    </>
  );
}

function renderHtmlToCanvas(canvas, html) {
  const ctx = canvas.getContext("2d");

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
<foreignObject width="100%" height="100%">
  <div xmlns="http://www.w3.org/1999/xhtml">${html}</div>
</foreignObject>
</svg>`;

  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const svgObjectUrl = URL.createObjectURL(svgBlob);

  const tempImg = new Image();
  tempImg.addEventListener("load", function () {
    ctx.drawImage(tempImg, 0, 0);
    URL.revokeObjectURL(svgObjectUrl);
  });

  tempImg.src = svgObjectUrl;
}

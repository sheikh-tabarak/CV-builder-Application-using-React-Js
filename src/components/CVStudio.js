import React, { useEffect, useRef, useState } from "react";
import Template1 from "./templates/template1/template1";
import { Link } from "react-router-dom";
import PrimaryColor from "./configurations/colors";
import ProjectCard from "./cards/ProjectCard";
import { Datepicker } from "flowbite-react";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import PersonalDetailsSection from "./sections/PersonalDetailsSection";
import SkillsSection from "./sections/SkillsSection";
import LanguageSection from "./sections/LanguageSection";
import TemplateHeader from "./templates/TemplateHeader";
import { LABELS } from "./Labels";
import CustomizationBar from "./configurations/CustomizationBar";
import TemplatesData from "./templates/data";
import AIEnhancer from "./ai/AIEnhancer";
export default function CVStudio() {
  const fileDownloadingReference = useRef();

  const [Customize, setCustomize] = useState({
    template: 0,
    color: "gray",
  });

  const [PersonalDetails, setPersonalDetails] = useState({
    image: "",
    name: "",
    aboutme: "",
    gender: "",
    email: "",
    headline: "",
    phone: "",
    address: "",
    city: "",
    website: "",
    linkedIn: "",
  });

  const [Educations, setEducations] = useState([]);
  const [Experiences, setExperiences] = useState([]);
  const [Projects, setProjects] = useState([]);
  const [Skills, setSkills] = useState([]);
  const [Languages, setLanguages] = useState([]);

  const file = PersonalDetails.image;

  useEffect(() => {
    console.log("Image loaded");
  }, [PersonalDetails.image]);

  return (
    <div className="lg:flex lg:flex-row h-screen ">
      <div className="w-full lg:w-4/12 h-full flex flex-col flex-grow bg-gray-900 overflow-y-scroll p-4">
        <PersonalDetailsSection
          // ProfilePicture={ProfilePicture}
          // setProfilePicture={setProfilePicture}
          PersonalDetails={PersonalDetails}
          setPersonalDetails={setPersonalDetails}
        />

        <ExperienceSection
          Experiences={Experiences}
          setExperiences={setExperiences}
        />

        <ProjectSection Projects={Projects} setProjects={setProjects} />

        <EducationSection
          Educations={Educations}
          setEducations={setEducations}
        />

        <SkillsSection
          Skills={Skills}
          setSkills={setSkills}
          // SkillsObject={Skills}
        />

        <LanguageSection Languages={Languages} setLanguages={setLanguages} />
      </div>
      <div className="w-full lg:w-8/12 h-full flex flex-col flex-grow bg-gray-900 overflow-y-scroll ">
        <div className="p-4">
          <CustomizationBar Customize={Customize} setCustomize={setCustomize} />
          {Customize.template == 0 ? (
            <Template1
              Color={Customize.color}
              PersonalObject={PersonalDetails}
              ExperienceObject={Experiences}
              ProjectObject={Projects}
              EducationObject={Educations}
              SkillsObject={Skills}
              LanguageObject={Languages}
              DownloadReference={fileDownloadingReference}
            />
          ) : (
            <div>{TemplatesData[Customize.template].name} </div>
          )}
          <div className="absolute"></div>
        </div>
      </div>
    </div>
  );
}

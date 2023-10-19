import React, { useState } from "react";
import { AiFillDelete, AiOutlinePlusSquare } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";
import PrimaryInputField from "../configurations/PrimaryInputField";

export default function SkillsSection(props) {
  const [NewSkill, setNewSkill] = useState({
    skill: "",
    proficiancy: 0,
    years: "",
  });

  const removeSkill = (index) => {
    props.setSkills((current) =>
      current.filter((item, thisindex) => thisindex !== index)
    );
  };

  const addSkill = (e) => {
    e.preventDefault();

    props.setSkills([...props.Skills, NewSkill]);

    setNewSkill({
      skill: "",
      proficiancy: 0,
      years: "",
    });

    document.getElementById("experiencedetails").removeAttribute("open");
  };

  return (
    <>
      <details className="experienceparent">
        <summary
          className={` mb-4 flex rounded p-4 items-center justify-between bg-gray-600 cursor-pointer`}
        >
          <div>
            <h3 className="flex gap-4  items-center text-xl font-bold text-white  ">
              {" "}
              <GiSkills /> Skils
            </h3>
          </div>

          <div className=" text-xl font-bold text-white ">
            <AiOutlinePlusSquare />
          </div>
        </summary>
        {props.Skills.length > 0 ? (
          <div className="mb-2 p-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <h3 className=" text-xs font-small mb-2 text-gray-500 ">
                All Skills
              </h3>
              <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                {props.Skills.map((value, index) => (
                  <li className="py-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex gap-2">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {value.skill}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            ( {value.proficiancy} %)
                          </p>
                        </div>

                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {value.years} years of Experience
                        </p>
                      </div>
                      <div className=" inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <span
                          className="cursor-pointer"
                          onClick={() => removeSkill(index)}
                        >
                          {/* Delete */}
                          <AiFillDelete className="text-xl text-red-500 " />
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}

        <div>
          <div className="flex justify-between gap-4">
            <PrimaryInputField
              fieldid="skill"
              label="Skill"
              value={NewSkill.skill}
              onChange={(e) => {
                setNewSkill((prevState) => ({
                  ...prevState,
                  skill: e.target.value,
                }));
              }}
              placeholder="i.e Html, css"
            />

            <PrimaryInputField
              type="number"
              fieldid="years"
              label="Years "
              value={NewSkill.years}
              onChange={(e) => {
                setNewSkill((prevState) => ({
                  ...prevState,
                  years: e.target.value,
                }));
              }}
              placeholder="Years of Experience"
            />
          </div>

          <div>
            <div className="flex justify-between">
 <label
              htmlFor="minmax-range"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Proficiency
            </label>
<p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{NewSkill.proficiancy}</p>

            

            </div>
           
            <input
              onChange={(e)=>{setNewSkill((prevState) => ({
                ...prevState,
                proficiancy: e.target.value,
              }))
            }}
              id="minmax-range"
              type="range"
              min={0}
              max={100}
              value={NewSkill.proficiancy}
              defaultValue={NewSkill.proficiancy}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          <button
            onClick={addSkill}
            disabled={NewSkill.skill === "" ? true : false}
            className="mb-5 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add Skill
          </button>
        </div>
      </details>
    </>
  );
}

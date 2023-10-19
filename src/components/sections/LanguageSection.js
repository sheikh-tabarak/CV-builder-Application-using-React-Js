import React, { useState } from "react";
import { LuLanguages } from "react-icons/lu";
import { AiFillDelete, AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import PrimaryInputField from "../configurations/PrimaryInputField";

export default function LanguageSection(props) {
  const [NewLanguage, setNewLanguage] = useState({
    Language: "",
    proficiancy: 0,
    level: "",
  });

  const removeLanguage = (index) => {
    props.setLanguages((current) =>
      current.filter((item, thisindex) => thisindex !== index)
    );
  };

  const addLanguage = (e) => {
    e.preventDefault();

    props.setLanguages([...props.Languages, NewLanguage]);

    setNewLanguage({
      Language: "",
      proficiancy: 0,
      level: "",
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
              <LuLanguages /> Language
            </h3>
          </div>

          <div className=" text-xl font-bold text-white ">
            <AiOutlinePlusSquare />
          </div>
        </summary>
        {props.Languages.length > 0 ? (
          <div className="mb-2 p-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <h3 className=" text-xs font-small mb-2 text-gray-500 ">
                All Languages
              </h3>
              <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                {props.Languages.map((value, index) => (
                  <li className="py-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {value.Language}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {value.level}
                          </p>
                     
                      </div>
                      <div className=" inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <span
                          className="cursor-pointer"
                          onClick={() => removeLanguage(index)}
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
          <PrimaryInputField
            fieldid="Language"
            label="Language"
            value={NewLanguage.Language}
            onChange={(e) => {
              setNewLanguage((prevState) => ({
                ...prevState,
                Language: e.target.value,
              }));
            }}
            placeholder="i.e Html, css"
          />

          <div>
            <div className="flex justify-between">
              <label
                htmlFor="minmax-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Proficiency
              </label>
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {NewLanguage.level}
              </p>
            </div>

            <input
              onChange={(e) => {
                setNewLanguage((prevState) => ({
                  ...prevState,
                  proficiancy: e.target.value,
                  level:
                    e.target.value == 1
                      ? "Beginner"
                      : e.target.value == 2
                      ? "Moderate"
                      : e.target.value == 3
                      ? "Good"
                      : e.target.value == 4
                      ? "Very good"
                      : e.target.value == 5
                      ? "Fluent"
                      : "Make a Choice",

                }));
              }}
              id="minmax-range"
              type="range"
              min={0}
              max={5}
              value={NewLanguage.proficiancy}
              //   defaultValue={NewLanguage.proficiancy}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          <button
            onClick={addLanguage}
            disabled={NewLanguage.Language === "" ? true : false}
            className="mb-5 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add Language
          </button>
        </div>
      </details>
    </>
  );
}

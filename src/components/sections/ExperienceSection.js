"use client";
import React, { useState } from "react";
import { Datepicker } from "flowbite-react";
import PrimaryInputField from "../configurations/PrimaryInputField";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import {MdBusinessCenter} from "react-icons/md";
import ExperienceCard from "../cards/ExperienceCard";

export default function ExperienceSection(props) {
  const [Currently, setCurrently] = useState(false);

  const [NewExperience, setNewExperience] = useState({
    position: "",
    company: "",
    city: "",
    start: "",
    end: "Present",
    description: "",
  });

  const removeExperience = (index) => {
    props.setExperiences((current) =>
      current.filter((item, thisindex) => thisindex !== index)
    );
  };

  const addExperience = (e) => {
    e.preventDefault();

    props.setExperiences([...props.Experiences, NewExperience]);

    setNewExperience({
      position: "",
      company: "",
      city: "",
      start: "",
      end: "",
      description: "",
    });

    document.getElementById("experiencedetails").removeAttribute("open");
  };

  // End of Experiences Section Functions to add and Remove Exeriences //

  return (
    <section id="Experiences">
      <details className="experienceparent">
        <summary
          className={` mb-4 flex rounded p-4 items-center justify-between bg-gray-600 cursor-pointer`}
        >
          <div>
            <h3 className="flex gap-4  items-center text-xl font-bold text-white  "> <MdBusinessCenter/> Experiences</h3>
          </div>

          <div className=" text-xl font-bold text-white ">
            <AiOutlinePlusSquare />
          </div>
        </summary>
        <h3 className=" text-xs font-small mb-2 text-gray-500 ">
          All Experiences
        </h3>
        <ul role="list">
          {props.Experiences.map((value, index) => (
            <ExperienceCard
              ExperienceObject={value}
              removeExperience={removeExperience}
              DeletingIndex={index}
            />
          ))}
        </ul>
        <div className="mx-auto max-w-2xl">
          <details id="experiencedetails" className="close">
            <summary className="my-5 justify-center flex cursor-pointer text-white ring-2 font-medium rounded-lg text-sm px-5 py-2.5 ring-gray-700">
              Add Experience &nbsp; +
            </summary>
            <form onSubmit={addExperience} action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="position"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Position
                  </label>
                  <input
                    value={NewExperience.position}
                    onChange={(e) => {
                      setNewExperience((prevState) => ({
                        ...prevState,
                        position: e.target.value,
                      }));
                    }}
                    type="text"
                    name="position"
                    id="position"
                    className={
                      NewExperience.position === ""
                        ? "bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    }
                    placeholder="Enter the Position you worked on"
                    required=""
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Employeer
                  </label>
                  <input
                    value={NewExperience.company}
                    onChange={(e) => {
                      setNewExperience((prevState) => ({
                        ...prevState,
                        company: e.target.value,
                      }));
                    }}
                    type="text"
                    name="company"
                    id="company"
                    className={
                      NewExperience.company === ""
                        ? "bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    }
                    placeholder="Enter the name of Comapany"
                    required=""
                  />
                </div>

                <div className="flex justify-between gap-10">
                  <div className="">
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      From
                    </label>
                    <input
                      value={NewExperience.start}
                      onChange={(e) => {
                        setNewExperience((prevState) => ({
                          ...prevState,
                          start: e.target.value,
                        }));
                      }}
                      type="month"
                      name="start"
                      id="start"
                      className={
                        " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      }
                      placeholder="Staring Date"
                    />
                  </div>

                  <div className="">
                    <div className="flex justify-between">
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        To
                      </label>
                    </div>

                    <input
                      disabled={Currently ? true : false}
                      value={NewExperience.end}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setNewExperience((prevState) => ({
                          ...prevState,
                          end: e.target.value,
                        }));
                      }}
                      type="month"
                      name="end"
                      id="end"
                      className={
                        " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      }
                      placeholder="Ending Date"
                    />
                  </div>
                </div>

                {/* <div
  class="relative mb-3"
  data-te-datepicker-init
  data-te-input-wrapper-init>
  <input
    type="date"
    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    placeholder="Select a date" />
  {/* <label
    for="floatingInput"
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Starts</label
  > 
</div> */}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    value={NewExperience.city}
                    onChange={(e) => {
                      setNewExperience((prevState) => ({
                        ...prevState,
                        city: e.target.value,
                      }));
                    }}
                    type="text"
                    name="city"
                    id="city"
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    }
                    placeholder="Enter the City of Employment"
                    required=""
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Description
                  </label>
                  <textarea
                    value={NewExperience.description}
                    onChange={(e) => {
                      setNewExperience((prevState) => ({
                        ...prevState,
                        description: e.target.value,
                      }));
                    }}
                    id="description"
                    rows={8}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write a little about your empolyeer"
                    defaultValue={""}
                  />
                </div>
              </div>
              <button
                onClick={addExperience}
                type="submit"
                disabled={
                  NewExperience.position === "" || NewExperience.company === ""
                    ? true
                    : false
                }
                className="mb-5 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Add Experience
              </button>
            </form>
          </details>
        </div>{" "}
      </details>
    </section>
  );
}

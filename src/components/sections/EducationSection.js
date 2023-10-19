import React, { useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import EducationCard from "../cards/EducationCard";
import { FaUserGraduate } from "react-icons/fa";
import PrimaryInputField from "../configurations/PrimaryInputField";

export default function EducationSection(props) {
  const [NewEducations, setNewEducations] = useState({
    education: "",
    institute: "",
    city: "",
    start: "",
    end: "",
    description: "",
  });

  const removeEducation = (index) => {
    props.setEducations((current) =>
      current.filter((item, thisindex) => thisindex !== index)
    );
  };

  const addEducation = (e) => {
    e.preventDefault();

    props.setEducations([...props.Educations, NewEducations]);

    setNewEducations({
      position: "",
      company: "",
      city: "",
      start: "",
      end: "",
      description: "",
    });

    document.getElementById("educationdetails").removeAttribute("open");
  };




  return (
    <section id="Experiences">
      <details className="experienceparent">
        <summary
          className={` mb-4 flex rounded p-4 items-center justify-between bg-gray-600 cursor-pointer`}
        >
          <div className="">
            <h3 className=" flex gap-4  items-center text-xl font-bold text-white ">
              {" "}
              <FaUserGraduate />
              Education
            </h3>
          </div>

          <div className=" text-xl font-bold text-white ">
            <AiOutlinePlusSquare />
          </div>
        </summary>
        <h3 className=" text-xs font-small mb-2 text-gray-500 ">
          All Educations
        </h3>
        <ul role="list">
          {props.Educations.map((value, index) => (
            <EducationCard
              EducationObject={value}
              removeEducation={removeEducation}
              DeletingIndex={index}
            />
          ))}
        </ul>
        <div className="mx-auto max-w-2xl">
          <details id="educationdetails" className="close">
            <summary className="my-5 justify-center flex cursor-pointer text-white ring-2 font-medium rounded-lg text-sm px-5 py-2.5 ring-gray-700">
              Add Education &nbsp; +
            </summary>
            <form onSubmit={addEducation} action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <PrimaryInputField
                    fieldid="education"
                    label="Education"
                    value={NewEducations.education}
                    onChange={(e) => {
                      setNewEducations((prevState) => ({
                        ...prevState,
                        education: e.target.value,
                      }));
                    }}
                    placeholder="Enter the degree i.e BS Software Engineering"
                  />

                  <PrimaryInputField
                    fieldid="institute"
                    label="Institute"
                    value={NewEducations.institute}
                    onChange={(e) => {
                      setNewEducations((prevState) => ({
                        ...prevState,
                        institute: e.target.value,
                      }));
                    }}
                    placeholder="Enter the Institute you studies i.e. Harvard University"
                  />

                  <PrimaryInputField
                    fieldid="educationcity"
                    label="City"
                    value={NewEducations.city}
                    onChange={(e) => {
                      setNewEducations((prevState) => ({
                        ...prevState,
                        city: e.target.value,
                      }));
                    }}
                    placeholder="Enter the city of Institite"
                  />

                  <div className="mb-4 flex justify-between gap-4">
                    <div className="">
                      <label
                        htmlFor="start"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        From
                      </label>
                      <input
                        value={NewEducations.start}
                        onChange={(e) => {
                          setNewEducations((prevState) => ({
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
                          htmlFor="end"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          To
                        </label>
                      </div>

                      <input
                        value={NewEducations.end}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setNewEducations((prevState) => ({
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

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Education Description
                    </label>
                    <textarea
                      value={NewEducations.description}
                      onChange={(e) => {
                        setNewEducations((prevState) => ({
                          ...prevState,
                          description: e.target.value,
                        }));
                      }}
                      id="description"
                      rows={8}
                      className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Write a little about your degree"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={addEducation}
                type="submit"
                disabled={
                  NewEducations.education === "" ||
                  NewEducations.institute === ""
                    ? true
                    : false
                }
                className="mb-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Add Education
              </button>
            </form>
          </details>
        </div>{" "}
      </details>
    </section>
  );
}

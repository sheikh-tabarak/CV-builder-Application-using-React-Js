import React, { useState } from "react";
// import ProjectCard from " ./cards/ProjectCard";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import {FaSitemap} from "react-icons/fa";
import ProjectCard from "../cards/ProjectCard";


export default function ProjectSection(props) {

  const [NewProject, setNewProject] = useState({
    title: "",
    company: "",
    link: "",
    description: "",
  });

  const removeProject = (index) => {
    props.setProjects((current) =>
      current.filter((item, thisindex) => thisindex !== index)
    );
  };

  const addProject = (e) => {
    e.preventDefault();
    props.setProjects([...props.Projects, NewProject]);

    setNewProject({
        title: "",
        company: "",
        link: "",
        description: "",
    });

    document.getElementById("projectdetails").removeAttribute("open");
  };
  return (
    <section id="Projects">
      <details >
        <summary
          className={` mb-4 flex rounded p-4 items-center justify-between bg-gray-600 cursor-pointer`}
        >
          <div className="">
            <h3 className="flex gap-4  items-center text-xl font-bold text-white "> <FaSitemap/> Projects</h3>
          </div>
          <div className=" text-xl font-bold text-white ">
            <AiOutlinePlusSquare />
          </div>
        </summary>
        <h3 className=" text-xs font-small mb-2 text-gray-500 ">
          All Projects
        </h3>
        <ul role="list">
          {props.Projects.map((value, index) => (
            <ProjectCard
            ProjectObject={value}
            removeProject={removeProject}
              DeletingIndex={index}
            />
          ))}
        </ul>
        <div className="mx-auto max-w-2xl">
          <details  id="projectdetails" className="open">
            <summary className="my-5 justify-center flex cursor-pointer text-white ring-2 font-medium rounded-lg text-sm px-5 py-2.5 ring-gray-700">
              Add Project &nbsp; +
            </summary>
            <form onSubmit={addProject} action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project
                  </label>
                  <input
                    value={NewProject.title}
                    onChange={(e) => {
                      setNewProject((prevState) => ({
                        ...prevState,
                        title: e.target.value,
                      }));
                    }}
                    type="text"
                    name="title"
                    id="title"
                    className={
                      NewProject.title === ""
                        ? "bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    }
                    placeholder="Enter the Title of Project"
                    required=""
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company
                  </label>
                  <input
                    value={NewProject.company}
                    onChange={(e) => {
                      setNewProject((prevState) => ({
                        ...prevState,
                        company: e.target.value,
                      }));
                    }}
                    type="text"
                    name="company"
                    id="company"
                    className={
                      NewProject.company === ""
                        ? "bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    }
                    placeholder="Project is associated with"
                    required=""
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Link
                  </label>
                  <input
                    value={NewProject.link}
                    onChange={(e) => {
                      setNewProject((prevState) => ({
                        ...prevState,
                        link: e.target.value,
                      }));
                    }}
                    type="text"
                    name="link"
                    id="link"
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    }
                    placeholder="Enter the Link of Project i.e github.com/username"
                    required=""
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Description
                  </label>
                  <textarea
                    value={NewProject.description}
                    onChange={(e) => {
                      setNewProject((prevState) => ({
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
                onClick={addProject}
                type="submit"
                disabled={
                  NewProject.title === "" || NewProject.company === ""
                    ? true
                    : false
                }
                className="mb-5  inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Add Project
              </button>
            </form>
          </details>
        </div>{" "}
      </details>
    </section>
  );
}

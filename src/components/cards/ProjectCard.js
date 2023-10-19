import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="mb-2 p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="flow-root">
        <li className="p-4 ">
          <div className="flex items-center space-x-4">

            

            <div className="flex-1 min-w-0">
            <p className="py-1 text-sm text-gray-400">
                {props.ProjectObject.company}
              </p>
              <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                {props.ProjectObject.title}{" "}
              </p>
             
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {props.ProjectObject.description}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => props.removeProject(props.DeletingIndex)}
                type="submit"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Delete{" "}
              </button>
            </div>
          </div>
        </li>
      </div>
    </div>
  )
}

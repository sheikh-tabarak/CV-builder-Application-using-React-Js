import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import sendMessagetoChatGPT from "./Messagefunction";
import sendNewMessage from "./TestingAPIs";

export default function AIEnhancer(props) {

    // const [AIResponse, setNewTechnologyUpdate] = useState()

  return (
    <div
      id="editUserModal"
      tabIndex={-1}
      aria-hidden="true"
      className={
        props.showAIEnhancer === true
          ? "fixed h-full z-50 p-4 bg-black bg-opacity-60 overflow-y-auto md:inset-0 h-screen"
          : "fixed hidden h-full z-50 p-4 bg-black bg-opacity-60 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] h-screen"
      }
    >
      <div className="bg-white rounded absolute left-1/4 right-1/4 top-10 bottom-10 w-full max-w-2xl max-h-full">
       
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
             Enhance with AI
            </h3>
            <button
              onClick={() => {
                props.OpenEditBox();
              }}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="editUserModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          {/* <div className="text-left p-5 space-y-2">
            <div className="py-2 sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technology Title
              </label>
              <input
                value={NewTechnologyUpdate.technology_title}
                onChange={(e) => {
                  setNewTechnologyUpdate({
                    technology_id: NewTechnologyUpdate.technology_id,
                    technology_title: e.target.value,
                    technology_desc: NewTechnologyUpdate.technology_desc,
                  });
                }}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div className="py-2 sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technology Description
              </label>
              <textarea
                value={NewTechnologyUpdate.technology_desc}
                onChange={(e) => {
                  setNewTechnologyUpdate({
                    technology_id: NewTechnologyUpdate.technology_id,
                    technology_title: NewTechnologyUpdate.technology_title,
                    technology_desc: e.target.value,
                  });
                }}
                id="description"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
                defaultValue={""}
              />
            </div>
          </div> */}
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
            onClick={async ()=>{
              sendNewMessage("Hey, I am Muhammmad Tabarak")
              // const answer =  await sendMessagetoChatGPT("Hey, I am Muhammmad Tabarak");
              // console.log(answer);

            }}
              className="sheikhtabarak-btn-main text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Enhance
            </button>
          </div>
        {/* </form> */}
      </div>
      {/* </div> */}
    </div>
  );
}

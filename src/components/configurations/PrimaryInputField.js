import React from "react";

export default function PrimaryInputField(props) {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={props.fieldid}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
      
        value={props.currentvalue}
        onChange={props.onChange}
        type={props.type==undefined?"text":props.type}
        name={props.fieldid}
        id={props.fieldid}
        className={
          "mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        }
        placeholder={props.placeholder}
        required=""
      />
    </div>
  );
}

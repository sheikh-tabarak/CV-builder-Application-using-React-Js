import React, { useEffect, useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import PrimaryInputField from "../configurations/PrimaryInputField";

export default function PersonalDetailsSection(props) {
  useEffect(() => {
    console.log("Image loaded");
  }, [Image]);

  return (
    <section id="PersonalDetails">
      <details open className="experienceparent">
        <summary
          className={` mb-4 flex rounded p-4 items-center justify-between bg-gray-600 cursor-pointer`}
        >
          <div className="">
            <h3 className=" flex gap-4  items-center text-xl font-bold text-white ">
              {" "}
              <BiSolidUser />
              Personal Details
            </h3>
          </div>

          <div className=" text-xl font-bold text-white ">
            <AiOutlinePlusSquare />
          </div>
        </summary>
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <div className="flex gap-5  ">
                <div className="w-6/12 pb-4">
                  <label
                    htmlFor="dropzone-file"
                    // className=
                    // " h-full flex flex-col items-center justify-stretch  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className=" h-full flex flex-col items-center justify-stretch  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div
                        style={{
                          backgroundSize: "cover",
                          backgroundImage: `url(${props.PersonalDetails.image})`,
                          backgroundPosition: "center",
                        }}
                        className="h-full w-full flex  rounded-lg  flex-col items-center justify-center pt-5 pb-6"
                      >
                        {props.PersonalDetails.image === undefined ||
                        props.PersonalDetails.image === "" ? (
                          <RxAvatar className="w-12 h-12 text-gray-500 dark:text-gray-400" />
                        ) : (
                          ""
                        )}
                      </div>
                      <input
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          const selectedFile = event.target.files[0];
                          console.log(
                            "selected: in details frame " + selectedFile.name
                          );
                          const imageUrl = URL.createObjectURL(selectedFile);
                          console.log("After: in details frame " + Image);

                          props.setPersonalDetails((prevState) => ({
                            ...prevState,
                            image: imageUrl,
                          }));
                        }}
                        id="dropzone-file"
                        type="file"
                        className="hidden w-0 h-0"
                      />
                    </div>
                  </label>
                </div>

                <div className="w-7/12">
                  <PrimaryInputField
                    fieldid="username"
                    label="Name"
                    value={props.PersonalDetails.name}
                    onChange={(e) => {
                      props.setPersonalDetails((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }));
                    }}
                    placeholder="i.e John Doe"
                  />

                  <PrimaryInputField
                    fieldid="email"
                    label="Email"
                    value={props.PersonalDetails.email}
                    onChange={(e) => {
                      props.setPersonalDetails((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }));
                    }}
                    placeholder="i.e admin@sheikhtabarak.me"
                  />
                </div>
              </div>

              <PrimaryInputField
                fieldid="headline"
                label="Headline"
                value={props.PersonalDetails.headline}
                onChange={(e) => {
                  props.setPersonalDetails((prevState) => ({
                    ...prevState,
                    headline: e.target.value,
                  }));
                }}
                placeholder="Engineer | Developer"
              />

              <div className="flex gap-4">
                <PrimaryInputField
                  fieldid="phoneno"
                  label="Phone"
                  value={props.PersonalDetails.phone}
                  onChange={(e) => {
                    props.setPersonalDetails((prevState) => ({
                      ...prevState,
                      phone: e.target.value,
                    }));
                  }}
                  placeholder="+1 234 567 5678"
                />

                <div className="sm:col-span-2">
                  <label
                    for="gender"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Choose the Gender
                  </label>
                  <select
                    onSelect={(e) => {
                      props.setPersonalDetails((prevState) => ({
                        ...prevState,
                        gender: e.target.value,
                      }));

                      console.log(e.target.selectedIndex);
                    }}
                    onChange={(e) => {
                      if (e.target.selectedIndex == 0) {
                        props.setPersonalDetails((prevState) => ({
                          ...prevState,
                          gender: "Male",
                        }));
                      } else if (e.target.selectedIndex == 1) {
                        props.setPersonalDetails((prevState) => ({
                          ...prevState,
                          gender: "Female",
                        }));
                      } else {
                        props.setPersonalDetails((prevState) => ({
                          ...prevState,
                          gender: "Others",
                        }));
                      }

                      console.log("" + e.target.selectedIndex);
                    }}
                    id="gender"
                    class="sm:col-span-2 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Others</option>
                  </select>
                </div>
              </div>

              <PrimaryInputField
                fieldid="address"
                label="Address"
                value={props.PersonalDetails.address}
                onChange={(e) => {
                  props.setPersonalDetails((prevState) => ({
                    ...prevState,
                    address: e.target.value,
                  }));
                }}
                placeholder="i.e. House 201, Street"
              />

              <PrimaryInputField
                fieldid="website"
                label="Website"
                value={props.PersonalDetails.website}
                onChange={(e) => {
                  props.setPersonalDetails((prevState) => ({
                    ...prevState,
                    website: e.target.value,
                  }));
                }}
                placeholder="i.e. https://website.me"
              />

              <PrimaryInputField
                fieldid="linkedin"
                label="Linked In"
                value={props.PersonalDetails.linkedin}
                onChange={(e) => {
                  props.setPersonalDetails((prevState) => ({
                    ...prevState,
                    linkedin: e.target.value,
                  }));
                }}
                placeholder="i.e. https://linkedin.com/in/<username>"
              />

              <div className="sm:col-span-2">
                <label
                  htmlFor="about"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  About me
                </label>
                <textarea
                  value={props.PersonalDetails.aboutme}
                  onChange={(e) => {
                    props.setPersonalDetails((prevState) => ({
                      ...prevState,
                      aboutme: e.target.value,
                    }));
                  }}
                  id="about"
                  rows={8}
                  className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write something about you"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>{" "}
      </details>
    </section>
  );
}

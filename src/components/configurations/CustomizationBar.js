import React from "react";
import { useState } from "react";
import { AiOutlineStop, AiOutlineBgColors } from "react-icons/ai";
import { BiSolidMagicWand } from "react-icons/bi";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import TemplatesData from "../templates/data";

export default function CustomizationBar(props) {
  const [OpenTemplateBar, setOpenTemplateBar] = useState(false);
  return (
    <div className="flex justify-between p-4 bg-[#374151]">
      <div className="flex gap-2  ">
        <div className="relative">
          <AiOutlineBgColors
            className={`text-[28px] text-white cursor-pointer border-[2px] border-[#374151] rounded-full`}
          />
        </div>

        <div className="">
          <AiOutlineStop
            onClick={() =>
              props.setCustomize((prevState) => ({
                ...prevState,
                color: "gray",
              }))
            }
            className={
              props.Customize.Color === "gray"
                ? "text-[28px] text-white cursor-pointer border-[2px] border-white rounded-full"
                : "text-[28px] text-white cursor-pointer border-[2px] border-gray-400  rounded-full"
            }
          />
        </div>

        <div
          className={
            props.Customize.Color === "black"
              ? "rounded-full bg-black p-3 cursor-pointer border-[2px] border-white"
              : "rounded-full bg-black p-3 cursor-pointer border-[2px] border-black"
          }
          onClick={() =>
            props.setCustomize((prevState) => ({
              ...prevState,
              color: "black",
            }))
          }
        ></div>
        <div
          className={
            props.Customize.Color === "red"
              ? "rounded-full bg-red-500 p-3 cursor-pointer border-[2px] border-white"
              : "rounded-full bg-red-500 p-3 cursor-pointer border-[2px] border-red-500"
          }
          onClick={() =>
            props.setCustomize((prevState) => ({
              ...prevState,
              color: "red",
            }))
          }
        ></div>

        <div
          className={
            props.Customize.Color === "green"
              ? "rounded-full bg-green-500 p-3 cursor-pointer border-[2px] border-white"
              : "rounded-full bg-green-500 p-3 cursor-pointer border-[2px] border-green-500"
          }
          onClick={() =>
            props.setCustomize((prevState) => ({
              ...prevState,
              color: "green",
            }))
          }
        ></div>

        <div
          className={
            props.Customize.Color === "blue"
              ? "rounded-full bg-blue-500 p-3 cursor-pointer border-[2px] border-white"
              : "rounded-full bg-blue-500 p-3 cursor-pointer border-[2px] border-blue-500"
          }
          onClick={() =>
            props.setCustomize((prevState) => ({
              ...prevState,
              color: "blue",
            }))
          }
        ></div>
      </div>

      <div className="relative border-[1px] rounded border-[#374151] hover:border-gray-400 px-3 cursor-pointer">
        <div
          className="flex gap-2 items-center"
          onClick={() => setOpenTemplateBar(!OpenTemplateBar)}
        >
          {OpenTemplateBar ? (
            <FaAngleDown className="text-white" />
          ) : (
            <FaAngleUp className="text-white" />
          )}
          <BiSolidMagicWand
            className={`text-[28px] text-white cursor-pointer border-[2px] border-[#374151] rounded-full`}
          />
        </div>

        <div
          className={
            OpenTemplateBar
              ? "absolute gap-4 flex  no-scrollbar overflow-x-auto bg-[#111827] rounded w-[740px] top-10 right-0 z-20 p-3"
              : "hidden"
          }
        >
          {TemplatesData.map((value, index) => {
            return (
              <div>
                <div

                onClick={()=>props.setCustomize((prevState)=>({
                    ...prevState,
                    template:index

                }))}
                  className={` rounded ${
                    props.Customize.template === index
                      ? "border-white border-[1px]"
                      : "border-none"
                  } w-[150px] h-[212px]`}
                  style={{
                    backgroundImage: `url(${value.image})`,
                    backgroundSize: "cover",
                  }}
                >
                  {/* <img className="" src={value.image} alt="" /> */}
                </div>
                <p className="text-sm text-gray-400 text-center py-2">
                  {value.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

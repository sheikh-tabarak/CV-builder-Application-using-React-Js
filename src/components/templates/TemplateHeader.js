import React, { useState } from "react";
import PrimaryInputField from "../configurations/PrimaryInputField";
import downLoadPdf from "../configurations/downloading";
import { LABELS } from "../Labels";

export default function TemplateHeader(props) {


    const [FileName, setFileName] = useState(LABELS.sitename);

  return (
    <header>
        <nav className="sticky top-0 z-10 bg-white border-gray-200 lg:px-4 pt-2 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex gap-2 items-center text-sm text-white">
              <PrimaryInputField
                onChange={(e) => {
                    setFileName(e.target.value);
                }}
                currentvalue={FileName}
              />
              .pdf
            </div>

          
            <button
              onClick={() => downLoadPdf(props.pdfRef, FileName)}
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </nav>
      </header>
  );
}

import books from "../../../data/material-books.json";
import { useState } from "react";

export default function BooksMaterial() {
  const [ShowContent, setShowContent] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded shadow">
      {books.map((book) => (
        <div className="border-b border-gray-200">
          <div className="w-full py-3 flex justify-between items-center mt-4">
            <div className="w-full flex flex-wrap p-6 -mx-3 wow animate__ animate__fadeIn     animated animated">
              <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                <span className="text-red-500">{book.name} </span>
              </div>
              <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                <p class="mb-4 lg:mb-6 leading-loose text-center">
                  {book.description}
                </p>
              </div>

              <div class="w-full lg:w-1/6 text-xs px-3">
                <div className="flex justify-center">
                  <img
                    onClick={() => setShowContent(!ShowContent)}
                    className={
                      showContent
                        ? "transform rotate-180 icon-plus cursor-pointer"
                        : "icon-plus cursor-pointer"
                    }
                    src="/assets/imgs/icons/circle-plus.svg"
                  />
                </div>
              </div>

              <div
                className={showContent ? "text-gray-700 text-sm mt-2" : "none"}
              >
                <div className="flex justify-center ">
                  <ul className="li w-2/3 text-center text-gray-100">
                    {book.books.map((item) => (
                      <li className="py-4 "> {item.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

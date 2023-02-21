import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";

const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className="fixed top-0 left-0 position w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0
 grid place-content-center"
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50 w-[600px] h-[600px] bg-white border-2 p-5">
            <Title addClass="text-[40px] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full"
            />
            <div>
              <ul>
                <li>
                  <image src="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;

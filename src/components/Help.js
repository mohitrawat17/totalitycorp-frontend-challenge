import React, { useState } from "react";

const Comp = ({ title, data, isVisible, setIsVisible }) => {
  return (
    <div
      className="border border-black m-4 p-2 cursor-pointer"
      onClick={() => setIsVisible()}
    >
      <div className="flex justify-between px-3">
        <div className=" font-bold text-3xl">{title}</div>
        {isVisible ? <div>/\</div> : <div>\/</div>}
      </div>
      {isVisible && <p>{data}</p>}
    </div>
  );
};

const Help = () => {
  const [visible, setVisible] = useState("");

 

  return (
    
    <div className="h-full">
      <Comp
        isVisible={visible=="ireact"}
        setIsVisible={() =>
          setVisible(visible=="ireact"?"":"ireact")
        }
          

        title={"Who are we ?"}
        data={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />

      <Comp
        setIsVisible={() =>
          setVisible(visible=="istate"?"":"istate")
        }
        isVisible={visible=="istate"}
        title={"Where is our branch ?"}
        data={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />

      <Comp
        setIsVisible={() =>
          setVisible(visible=="iredux"?"":"iredux")
        }
        isVisible={visible=="iredux"}
        title={"What services we provide ?"}
        data={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
    </div>
  );
};

export default Help;
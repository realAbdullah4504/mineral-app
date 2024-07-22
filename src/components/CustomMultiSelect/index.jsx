import React, { useState, useRef, useEffect } from "react";

const options = [
  {
    value: "1",
    label: "Government Departments",
    description: "chris",
    icon: "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "2",
    label: "Geotechnical, Geophysical & Geological Services",
    description: "david",
    icon: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "3",
    label: "Drilling Companies",
    description: "alex27",
    icon: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "4",
    label: "Mining Companies",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "5",
    label: "Mineral based industries",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "6",
    label: "Machinery suppliers",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "7",
    label: "Mineral Testing Labs",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "8",
    label: "Explosive Suppliers",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "9",
    label: "Software and Solutions Entities",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "10",
    label: "Legal Services",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "11",
    label: "Audit & Accounts",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "12",
    label: "Land Surveying",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "13",
    label: "Academia",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    value: "14",
    label: "Training Schools",
    description: "samia_samia",
    icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
];

const MultiSelect = ({ label }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option.value)) {
      setSelectedOptions(selectedOptions.filter((val) => val !== option.value));
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
    }
  };

  const handleInputClick = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2">
          {label}
        </label>
      )}

      <div
        onClick={handleInputClick}
        className="relative cursor-pointer ps-0.5 pe-9 min-h-[46px] flex items-center flex-wrap text-nowrap w-full border border-green-300 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
      >
        {selectedOptions.map((value) => {
          const selectedOption = options.find(
            (option) => option.value === value
          );
          return (
            <div
              key={value}
              className="flex flex-nowrap items-center relative z-10 bg-white border border-green-300 rounded-full p-1 m-1 dark:bg-neutral-900 dark:border-neutral-700"
            >
              <img
                className="size-6 me-1 rounded-full"
                src={selectedOption.icon}
                alt={selectedOption.label}
              />
              <div className="whitespace-nowrap text-gray-800 dark:text-neutral-200">
                {selectedOption.label}
              </div>
              <div
                className="inline-flex shrink-0 justify-center items-center size-5 ms-2 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm dark:bg-neutral-700/50 dark:hover:bg-neutral-700 dark:text-neutral-400 cursor-pointer"
                onClick={() => handleOptionClick(selectedOption)}
              >
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
            </div>
          );
        })}
        <input
          className="py-3 px-2  rounded-lg order-1 text-sm outline-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:text-neutral-400"
          placeholder="Select option..."
          readOnly
        />
        <div className="absolute top-1/2 end-3 -translate-y-1/2">
          <svg
            className="shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </div>
      </div>
      {dropdownOpen && (
        <div className="mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-green-300 rounded-lg overflow-hidden overflow-y-auto dark:bg-neutral-900 dark:border-neutral-700">
          {options.map((option) => (
            <div
              key={option.value}
              className={`py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800 ${
                option.disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => !option.disabled && handleOptionClick(option)}
            >
              <div className="flex items-center">
                <img
                  className="size-8 me-2 rounded-full"
                  src={option.icon}
                  alt={option.label}
                />
                <div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                    {option.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-neutral-500">
                    {option.description}
                  </div>
                </div>
                {selectedOptions.includes(option.value) && (
                  <div className="ms-auto">
                    <svg
                      className="shrink-0 size-4 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

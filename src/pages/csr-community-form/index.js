import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import whiteArrow from "assets/images/whiteArrow.svg";

const CsrCommunity = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "csr", label: "CSR" },
    { path: "csr-community", label: "Voice of Community" },
    { path: "csr-community-form", label: "Your Voice" },
  ];
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex mb-[62px] mt-[41px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="flex font-semibold text-[64px] mb-[60px]">
          Voice Of <span className="pl-4 text-[#009969]">Community</span>
        </div>
        <form className="w-full justify-center">
          <div className="flex flex-col">
            <div className="flex mb-[36px]">
              <div className="flex flex-col mr-6 w-1/3">
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="name"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className="flex flex-col mr-6 w-1/3">
                <div className="relative mt-2 w-full">
                  <input
                    type="email"
                    id="email"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Enter Email
                  </label>
                </div>
              </div>
              <div className="flex flex-col mr-6 w-1/3">
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="mobileNumber"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="mobileNumber"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Enter Mobile Number
                  </label>
                </div>
              </div>
            </div>
            <div className="flex mb-[36px]">
              <div className="flex flex-col mr-6 w-[31.5%]">
                <div className="relative mt-2 w-full">
                  <select
                    id="commentType"
                    className="peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                  >
                    <option value="" disabled selected hidden></option>
                    <option value="complaints">Complaints</option>
                    <option value="suggestions">Suggestions</option>
                    <option value="others">Others</option>
                  </select>
                  <label
                    htmlFor="commentType"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Comment Type
                  </label>
                </div>
              </div>
            </div>
            <div className="flex mb-[60px]">
              <div className="flex flex-col mr-6 w-full">
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="suggestion"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="suggestion"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Comment
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex bg-[#27AE60] items-center justify-center rounded-[28px] w-[150px] h-[56px] mr-4 mb-[593px] cursor-pointer text-white text-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default CsrCommunity;

import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import whiteArrow from "assets/images/whiteArrow.svg";

const CsrCommunity = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "csr", label: "CSR" },
    { path: "csr-community", label: "Community Engagement" },
  ];
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex mb-[62px] mt-[41px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="flex font-semibold text-[64px] mb-[60px]">
          Community <span className="pl-4 text-[#009969]">Engagement</span>
        </div>
        <div className="flex">
          <form action="">
            <div className="flex flex-col">
              <div className="flex mb-[36px]">
                <div className="flex flex-col mr-6">
                  <label htmlFor="" className="text-sm font-normal pl-1 pb-1">
                    Person Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Person Name"
                    className="bg-[#F3F3F4] rounded-[8px] w-[360px] h-[56px] pl-3 placeholder-black"
                  />
                </div>
                <div className="flex flex-col mr-6">
                  <label htmlFor="" className="text-sm font-normal pl-1 pb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Email"
                    className="bg-[#F3F3F4] rounded-[8px] w-[360px] h-[56px] pl-3 placeholder-black"
                  />
                </div>
                <div className="flex flex-col mr-6">
                  <label htmlFor="" className="text-sm font-normal pl-1 pb-1">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Mobile Number"
                    className="bg-[#F3F3F4] rounded-[8px] w-[360px] h-[56px] pl-3 placeholder-black"
                  />
                </div>
              </div>
              <div className="flex mb-[60px]">
                <div className="flex flex-col mr-6">
                  <label htmlFor="" className="text-sm font-normal pl-1 pb-1">
                    Add Comment
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Type your suggestion here"
                    className="bg-[#F3F3F4] rounded-[8px] w-[1132px] h-[112px] pl-6 pb-14 placeholder-black "
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex bg-[#27AE60] rounded-[28px] items-center justify-center w-[280px] h-[56px] ml-auto mr-4 mb-[593px] cursor-pointer text-white"
              >
                <div className="flex flex-col w-1/2 items-end">Continue</div>
                <div className="flex flex-col w-1/2">
                  <div className="flex rounded-full bg-white bg-opacity-10 justify-center w-[32px] h-[32px] ml-[90px]">
                    <img src={whiteArrow} alt="arrow right" />
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CsrCommunity;

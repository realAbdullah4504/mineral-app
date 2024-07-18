import React from "react";
import CsrEducation1 from "assets/images/CsrEducation1.png";
import CsrEducation2 from "assets/images/CsrEducation2.png";
import CsrWealth1 from "assets/images/CsrWealth1.png";
import CsrWealth2 from "assets/images/CsrWealth2.png";
import CsrInfr1 from "assets/images/CsrInfrastructure1.png";
import CsrInfr2 from "assets/images/CsrInfrastructure2.png";
import CsrMisc1 from "assets/images/CsrMisc1.png";
import CsrMisc2 from "assets/images/CsrMisc2.png";
import { Container } from "components/UI";

const CsrFwo = () => {
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex  h-[377px] mb-[80px]">
          <div className="flex flex-col w-[1300px] ">
            <div className="flex font-bold pb-0.5 text-[45px]">EDUCATION</div>
            <div className=" flex mb-4">
              <ul className="list-disc pl-6 text-lg font-normal">
                <li>Construction of Boya Model School</li>
                <li>Provision of furniture for Boya Model School </li>
                <li>Solarization (10kVA) of Boya Model School</li>
                <li>
                  Education under Turkish Maarif Foundation Scheme & Coaching
                  Classes
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mx-auto relative h-full w-full">
            <img
              src={CsrEducation1}
              alt="salt"
              className="absolute top-0 right-0 w-[250px] h-[300px] object-cover rounded-lg  z-10 border-solid border-[5px] border-white"
            />
            <img
              src={CsrEducation2}
              alt="salt 2"
              className="absolute top-[100px] right-[165px] w-[250px] h-[300px] object-cover rounded-lg "
            />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-[80px] h-[377px] mb-[80px] justify-around">
          <div className="flex flex-col ">
            <div className="flex font-bold pb-0.5 text-[45px]">WEALTH</div>
            <div className=" flex mb-4">
              <ul className="list-disc pl-6 text-lg font-normal">
                <li>Establishment of Maternity Centre Home</li>
                <li>Solarization (10kVA) of Maternity Centre Home</li>
                <li>Provision of Medical Equipment & Medicines </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mx-auto relative h-full w-full justify-center">
            <img
              src={CsrWealth2}
              alt=" 1"
              className="absolute top-0 left-0 w-[250px] h-[300px] object-cover rounded-lg"
            />
            <img
              src={CsrWealth1}
              alt=" 2"
              className="absolute top-[72.5px] left-[165px] w-[250px] h-[300px] object-cover rounded-lg  border-solid border-[5px] border-white"
            />
          </div>
        </div>
        <div className="flex mt-[80px] h-[377px] w-full mb-[80px]">
          <div className="flex flex-col w-[1000px]">
            <div className="flex font-bold pb-0.5 text-[45px]">
              INFRASTRUCTURE
            </div>
            <div className=" flex mb-4">
              <ul className="list-disc pl-6 text-lg font-normal ">
                <li>Solarization of tubewells.</li>
                <li>Construction of water distribution system</li>
                <li>Installation of tubewells</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mx-auto relative h-full w-full">
            <img
              src={CsrInfr1}
              alt=" 1"
              className="absolute top-0 right-0 w-[250px] h-[300px] object-cover rounded-lg  z-10 border-solid border-[5px] border-white"
            />
            <img
              src={CsrInfr2}
              alt=" 2"
              className="absolute top-[100px] right-[165px] w-[250px] h-[300px] object-cover rounded-lg "
            />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-[80px] h-[377px] mb-[80px]">
          <div className="flex flex-col ">
            <div className="flex font-bold pb-0.5 text-[45px]">
              MISCELLANEOUS
            </div>
            <div className=" flex mb-4">
              <ul className="list-disc pl-6 text-lg font-normal">
                <li>Job Creation</li>
                <li>Community Grants</li>
                <li>Technical Trainings </li>
                <li>Medical Camps </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mx-auto relative h-full w-full">
            <img
              src={CsrMisc1}
              alt=" 1"
              className="absolute top-0 left-0 w-[250px] h-[300px] object-cover rounded-lg "
            />
            <img
              src={CsrMisc2}
              alt=" 2"
              className="absolute top-[72.5px] left-[165px] w-[250px] h-[300px] object-cover rounded-lg  border-solid border-[5px] border-white"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CsrFwo;

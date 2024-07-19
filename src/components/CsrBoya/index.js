import { Container } from "components/UI";
import React from "react";
import BoyaSocial from "assets/images/BoyaSocial.png";
import BoyaEducation from "assets/images/BoyaEducation.png";
import BoyaHealth from "assets/images/BoyaHealth.png";
import BoyaInfrastructure from "assets/images/BoyaInfrastructure.png";

const CsrBoya = () => {
  return (
    <Container classes="w-[80%]">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <span className="max-w-[1130px] text-[18px] font-normal">
            Muhammad Khel Copper Mining Project , NWD is FWO / MEDO’s  milestone
            venture of Pak Army . In parallel for paving ways of forex to
            country , establishment of peace in war torn area and socio economic
            uplift of local communities are few hallmark achievements .
            Contributions with regards to CSR is regular feature and is
            continuously undertaken to help the area & communities , highlights
            of few are as under
          </span>
        </div>
        <div className="flex h-[377px] mb-[40px] mt-[80px]">
          <div className="flex flex-col w-[1300px] ">
            <div className="flex flex-col font-semibold pb-0.5 text-[45px]">
              EDUCATION SECTOR
            </div>
            <div className=" flex mb-4 text-[18px] font-normal">
              <ul className="list-disc pl-6 text-lg font-normal">
                <li>
                  Elaborate spending upto 200 Mn done on Projects under taken in
                  fol heads ;
                </li>
                <li>Boya Model High School (Const & Recurring ) </li>
                <li>
                  Full Financial Support to Turkish Maarif foundation Education
                  Scheme for education of selected students of Waziristan to top
                  ranking schools & colleges in Pakistan{" "}
                </li>
                <li>Localised Tuition centres &   Coaching Classes</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mx-auto h-full w-full items-end">
            <img
              src={BoyaEducation}
              alt=" 1"
              className="w-[250px] h-[300px] object-cover rounded-lg  mx-[18px]"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse h-[377px]  mb-[40px]">
          <div className="flex flex-col w-[1300px] font-semibold pb-0.5 text-[45px] ">
            <div className="flex">HEALTH SECTOR</div>

            <div className=" flex mb-4 text-[18px] font-normal">
              More then 100 Mns have spent so far on various commodities to
              include construction of mother child dispensary , free medical
              camps & medical insurance facilities to local employees
            </div>
          </div>
          <div className="flex flex-col mx-auto h-full w-full items-start">
            <img
              src={BoyaHealth}
              alt=" 1"
              className="w-[250px] h-[300px] object-cover rounded-lg  mx-[18px]"
            />
          </div>
        </div>
        <div className="flex h-[377px]  mb-[40px]">
          <div className="flex flex-col w-[1300px] ">
            <div className="flex flex-col font-semibold pb-0.5 text-[45px]">
              INFRASTRUCTIONAL DEVELOPMENT
            </div>
            <div className=" flex mb-4 text-[18px] font-normal">
              <div className="flex flex-col">
                Infrastructural development is continuous phenomena and has
                consumed more then 100 Mn so far under fol heads ;
                <ul className="list-disc pl-6 text-lg font-normal">
                  <li>
                    Solarisation of Water supply schemes of Muhammad Khel
                    Village
                  </li>
                  <li>
                    Installation of water supply schemes in Muhammad Khel
                    Village
                  </li>
                  <li>Const of rural tracks & roads</li>
                  <li>Community support programme</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto h-full w-full items-end">
            <img
              src={BoyaInfrastructure}
              alt=" 1"
              className="w-[250px] h-[300px] object-cover rounded-lg  mx-[18px]"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse h-[377px] mb-[80px] mt-[40px]">
          <div className="flex flex-col w-[1300px] ">
            <div className="flex flex-col font-semibold pb-0.5 text-[45px]">
               SOCIAL DEVELOPMENT
            </div>
            <div className=" flex mb-4 text-[18px] font-normal">
              <ul className="list-disc pl-6 text-lg font-normal">
                <li>
                  Upto 400 Mn PKR paid till to date in terms of Qoum commission
                  .{" "}
                </li>
                <li>Boya Model High School (Const & Recurring ) </li>
                <li>
                  Under the head of Job creation & and hiring of local machinery
                  for work , more then 600 Mns have been injected in local
                  economy .
                </li>
                <li>
                  The Project has also contributed more then 400 Mns with
                  regards to generation of works for local contractors & vendors
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mx-auto h-full w-full items-start">
            <img
              src={BoyaSocial}
              alt=" 1"
              className="w-[250px] h-[300px] object-cover rounded-lg  mx-[18px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CsrBoya;

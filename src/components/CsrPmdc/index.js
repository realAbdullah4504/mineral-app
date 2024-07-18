import React from "react";
import { Container } from "components/UI";
import saltMine1 from "assets/images/SaltMine1.png";
import saltMine2 from "assets/images/SaltMine2.png";
import saltMine3 from "assets/images/SaltMine3.png";
import saltMine4 from "assets/images/SaltMine4.png";
import coalMine1 from "assets/images/CoalMine1.png";
import coalMine2 from "assets/images/CoalMine2.png";

const CsrPmdc = () => {
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex  h-[377px] mb-[80px]">
          <div className="flex flex-col w-[1300px] ">
            <div className="flex font-bold pb-0.5 text-[45px]">
              <span className="text-[#27AE60] pr-3">KHEWRA </span> SALT MINES
            </div>
            <div className=" flex mb-4">
              <ul className="list-disc pl-6 text-lg font-normal">
                <li>
                  Operating Model High School to extend educational facility to
                  the children of the local community from Montessori to Matric
                </li>
                <li>
                  Running hospital for its employees, along with local community
                </li>
                <li>
                  Established Tourist Khewra Resort, where thousands of
                  visitors, including foreigners visit
                </li>
                <li>Established an Asthma clinic inside the mine</li>
                <li>
                  Running Degree College for Women for the education especially
                  for daughters of mining community, employees, and others of
                  adjoining areas.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mx-auto relative h-full w-full">
            <img
              src={saltMine2}
              alt="salt"
              className="absolute top-0 right-0 w-[250px] h-[300px] object-cover rounded-lg z-10 border-solid border-[5px] border-white "
            />
            <img
              src={saltMine1}
              alt="salt 2"
              className="absolute top-[100px] right-[165px] w-[250px] h-[300px] object-cover rounded-lg  "
            />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-[80px] h-[377px] mb-[80px]">
          <div className="flex flex-col ">
            <div className="flex font-bold pb-0.5 text-[45px]">
              <span className="text-[#27AE60] pr-3">WARCHA </span> SALT MINES
            </div>
            <div className=" flex mb-4">
              <ul className="list-disc pl-6 text-lg font-normal">
                <li>
                  PMDC is providing free of cost drinking water to the local
                  community regularly{" "}
                </li>
                <li>
                  Running Model School for education of employees and children
                  of local community.
                </li>
                <li>
                  Donated land to Mines Labor Welfare Department for
                  construction of building of Higher Secondary School
                </li>
                <li>
                  Dispensary remains open 24 hours for meeting emergency with
                  first aid facility both for employees and local community also
                  provides Ambulance in emergency to locals too.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mx-auto relative h-full w-full">
            <img
              src={saltMine3}
              alt="Image 1"
              className="absolute top-0 left-0 w-[250px] h-[300px] object-cover rounded-lg "
            />
            <img
              src={saltMine4}
              alt="Image 2"
              className="absolute top-[72.5px] left-[165px] w-[250px] h-[300px] object-cover rounded-lg border-solid border-[5px] border-white"
            />
          </div>
        </div>
        <div className="flex mt-[80px] h-[377px] w-full mb-[80px]">
          <div className="flex flex-col w-[1000px]">
            <div className="flex font-bold pb-0.5 text-[45px]">
              <span className="text-[#27AE60] pr-3">COAL </span>MINES
            </div>
            <div className=" flex mb-4">
              <div className="flex-col">
                <span className="font-normal text-lg">
                  At Coal mines in Balochistan, PMDC provides following
                  facilities
                </span>
                <ul className="list-disc pl-6 text-lg font-normal">
                  <li>Drinking water.</li>
                  <li>
                    Dispensary level treatment and first aid facility to the
                    local community.
                  </li>
                  <li>
                    Land for establishment of schools by Mines Labor Welfare
                    Department
                  </li>
                  <li>
                    Bus and a coaster for employees of Sor-Range and locals to
                    visit the nearby city Quetta on nominal charges.
                  </li>
                  <li>
                    Land to the FC at Sharigh for the construction of
                    School/College, locals will also be benefited
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto relative h-full w-full">
            <img
              src={coalMine1}
              alt="Image 1"
              className="absolute top-0 right-0 w-[250px] h-[300px] object-cover rounded-lg z-10 border-solid border-[5px] border-white"
            />
            <img
              src={coalMine2}
              alt="Image 2"
              className="absolute top-[100px] right-[165px] w-[250px] h-[300px] object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CsrPmdc;

import React from "react";
import CsrTree from "assets/images/CsrTree.png";
import CsrOasis from "assets/images/CsrOasis.png";
import CsrThar from "assets/images/CsrThar.png";
import { Container } from "components/UI";

const CsrSindh = () => {
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex   h-[377px] mb-[80px]">
          <div className="flex flex-col w-[1300px] ">
            <div className="flex flex-col font-semibold pb-0.5 text-[45px]">
              Establishment of Thar
              <span className="text-[#27AE60]">Foundation</span>
            </div>
            <div className=" flex mb-4 text-[18px] font-normal">
              Thar Foundation has been established as a Section 42 company under
              the Companies Act, 2017 to improve quality of life of people of
              Tharparkar through sustainable development initiatives.Thar
              Foundation aims to implement the Sustainable Development Goals
              (SDGS) framework and develop Islamkot into a model tehsil. Thar
              Foundation’s programs focus on education, mother & child health,
              provision of clean drinking water, women empowerment, technical &
              vocational training & employment, disaster management, green cover
              and food security.
            </div>
          </div>
          <div className="flex flex-col mx-auto h-full w-full items-end">
            <img
              src={CsrThar}
              alt="Image 1"
              className="w-[250px] h-[300px] object-cover rounded-lg  mx-[18px]"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse h-[377px]  mb-[80px]">
          <div className="flex flex-col w-[1300px] font-semibold pb-0.5 text-[45px] ">
            <div className="flex">
              Thar Million Tree
              <span className="text-[#27AE60] pl-3">Program</span>
            </div>

            <div className=" flex mb-4 text-[18px] font-normal">
              In 2017, SECMC initiated a way to combat desertification and
              deforestation faced in the region of Tharparkar in alignment with
              sustainable development goals SDG 13 and SDG 15 by developing
              Sindh’s largest private sector nursery having a capacity of 0.5
              Million Saplings by the first quarter of 2018. The ‘Thar Million
              Tree Nursery’ used the Miyawaki technique of plantation on 100
              acres at Thar Block-2 Site, where a dense forest was grown to
              increase greening efforts and promote biodiversity. The tree
              species include; Neem, Bairi, Sarhain, Moringa, Babur and Kandi.
              On 5th June, 2021 in celebration of the World Environment Day;
              SECMC completed its Thar Million Tree Plantation Program in the
              Thar.
            </div>
          </div>
          <div className="flex flex-col mx-auto h-full w-full items-start">
            <img
              src={CsrTree}
              alt="Image 1"
              className="w-[250px] h-[300px] object-cover rounded-lg  mx-[18px]"
            />
          </div>
        </div>
        <div className="flex   h-[377px]  mb-[80px]">
          <div className="flex flex-col w-[1300px] ">
            <div className="flex flex-col font-semibold pb-0.5 text-[45px]">
              GORANO - AN OASIS IN THE
              <span className="text-[#27AE60]">DESERT</span>
            </div>
            <div className=" flex mb-4 text-[18px] font-normal">
              Thar Foundation has been established as a Section 42 company under
              the Companies Act, 2017 to improve quality of life of people of
              Tharparkar through sustainable development initiatives.Thar
              Foundation aims to implement the Sustainable Development Goals
              (SDGS) framework and develop Islamkot into a model tehsil. Thar
              Foundation’s programs focus on education, mother & child health,
              provision of clean drinking water, women empowerment, technical &
              vocational training & employment, disaster management, green cover
              and food security.
            </div>
          </div>
          <div className="flex flex-col mx-auto h-full w-full items-end">
            <img
              src={CsrOasis}
              alt="Image 1"
              className="w-[250px] h-[300px] object-cover rounded-lg  mx-[18px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CsrSindh;

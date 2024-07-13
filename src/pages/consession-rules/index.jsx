import BreadCrumbs from "components/Breadcrumbs";
import CardComponent from "components/Cards/simpleCard";
import { Container } from "components/UI";
import React from "react";

const cardContent = [
  { text: "KP", color: "#009969" },
  { text: "Baluchistan", color: "#009969" },
  { text: "Punjab", color: "#009969" },
  { text: "Sindh", color: "#009969" },
  { text: "GB", color: "#009969" },
  { text: "AJK", color: "#009969" },
];

const ConsessionRules = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/legal-framework", label: "Legal Framework" },
    { path: "/", label: "Rules & Regulations" },
    { path: "#", label: "Concession Rules" },
  ];

  return (
    <Container classes="mt-8">
      <BreadCrumbs breadcrumbs={breadcrumbs} />

      <div className="flex flex-wrap mt-[20px]">
        <div className="max-w-[100%]">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Concession Rules
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>
          <div
            className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            The 2002 Provincial Mineral Concession Rules, which were an offshoot
            from the 1995 national mineral policy, ARE a positive step towards
            modernizing the existing regulatory regime. This Policy extends the
            Government’s drive to ensure the modernization of the mining sector
            regulatory instruments. This will be done by the Federal Government
            and federating units remaining in their respective domain and
            requirements, in addition to other measures, through the following:
          </div>

          <div className="bg-[#F4FBF7] w-[100%] mt-8 py-4">
            <ul className="list-disc ml-36">
              <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                Providing for mineral titles to be granted or renewed for
                sufficient periods to allow for the full commercial exploration,
                development and exploitation of any mineral deposit by the
                mineral title holders;
              </li>
              <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                Eliminating discretionary powers, provide time frames and
                ensuring simplicity of procedures and transparency of decisions;
                and
              </li>
              <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                Updating the mining laws to deal with international mining
                practices in Pakistan such as open pit mining and working
                practices.
              </li>
            </ul>
          </div>

          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Mineral Titles
          </h1>

          <div
            className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            Mining Concession Rules will provide information and procedures for
            obtaining relevant mineral titles.
          </div>

          <div className="grid grid-cols-2">
            <div>
              <h1 className="font-ibm-plex-sans font-medium	 text-[36px] leading-[60px]">
                Small-Scale Mining:
              </h1>

              <div className="bg-[#F4FBF7] w-[70%] mt-8 py-4">
                <ul className="list-disc ml-12">
                  <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                    Mineral Permit;
                  </li>
                  <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                    Exploration/Prospecting License; and
                  </li>
                  <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                    Mining Permit/Lease.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="font-ibm-plex-sans font-medium	 text-[36px] leading-[60px]">
                Large-Scale Mining:
              </h1>

              <div className="bg-[#F4FBF7] w-[70%] mt-8 py-4">
                <ul className="list-disc ml-12">
                  <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                    Reconnaissance License;
                  </li>
                  <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                    Exploration License;
                  </li>
                  <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                    Mineral Deposit Retention License; and
                  </li>
                  <li className="font-helvetica font-normal text-[22px] leading-[24px]">
                    Mining Lease.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            Subject to fulfillment of other determining criteria, the principle
            of first-come-first-served would be generally followed for grant of
            concessions for small-scale mining and for large-scale mining, the
            respective authority shall prescribe merit based criteria.
          </div>

          <div className="font-ibm-plex-sans mt-7 font-semibold text-[36px] p-[0px]">
            Provincial Mining Concessions Rules
          </div>

          <div className="">
            <div className="flex flex-wrap mt-6 space-x-4">
              <CardComponent content={cardContent} />
            </div>
            {/* large gap */}
            <div className="mt-64"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ConsessionRules;

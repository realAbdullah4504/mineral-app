import BreadCrumbs from "components/Breadcrumbs";
import { InstitutionalArrangementSection } from "components/InstitutionalArrangement";
import { Container } from "components/UI";
import React from "react";
const InstitutionalArrangement = () => {
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/legal-framework', label: 'Legal Framework' },
    { path: '/', label: 'Governance' },
    { path: '#', label: 'Institutional Arrangement' },
  ];

  return (
    
    <Container classes="mt-8">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <InstitutionalArrangementSection
        title="Institutional Arrangement"
        subTitle="Federal Jurisdiction"
        subTitle2="Provincial Jurisdiction"
        //   avatar={InvestmentOpportunities}
        description1={`Pakistan is a federal country and mineral resource ownership is divided between the Federal and provincial authorities. Minerals other than mineral oil, natural gas and nuclear substances are Provincial subjects. The Federal Government is mandated with geological surveys (that help identification of potential mineral bearing areas), coordination between provinces/federating units and formulation of policy/plan for development of mineral sector at national and international levels.\nThe Provinces carry out detailed work to translate exploration targets to mineral development/exploitation projects and have the executive/legislative authority for regulating extractive industry and granting mineral titles.`}
        description2={`Provincial Governments have the legislative and executive authority for regulating extractive industry and granting mineral titles. Each Province develops its own mining code, which is based on the model set forth in the National Mineral Policy that is intended to provide an investment-friendly, growth conductive regime and internationally competitive institutional and regulatory framework for the sector

In each of the provinces, a separate Department of Mines & Minerals has been established. Mineral exploration and production activities can be undertaken only under a valid mineral title to be obtained from the Provincial Licensing Authority in accordance with the procedure prescribed under the Provincial Mineral Concession Rules, i.e. through auction or against application on the principle of first-come-first-served subject to fulfillment of other determining merit-based criteria. Rules provide for different kinds of mineral titles as mentioned below, to be granted and renewed for sufficient period to allow for the intended exploration, development and exploitation of any mineral deposit by the mineral title-holder:`}
      />
      <div className="bg-[#F4FBF7] w-[100%] mt-8 py-4">
        <ul className="list-disc ml-36">
          <li className="font-helvetica font-normal text-[22px] leading-[24px]">
            Reconnaissance License (01 year, non-renewable)
          </li>
          <li className="font-helvetica font-normal text-[22px] leading-[24px]">
            Prospecting License (03 years, renewable, total 5 years)
          </li>
          <li className="font-helvetica font-normal text-[22px] leading-[24px]">
            Exploration License (03 years, renewable, total 9 years)
          </li>
          <li className="font-helvetica font-normal text-[22px] leading-[24px]">
            Mineral Deposit Retention License (01 year, renewable, total 2
            years)
          </li>
          <li className="font-helvetica font-normal text-[22px] leading-[24px]">
            Mining Permit (10 years, renewable)
          </li>
          <li className="font-helvetica font-normal text-[22px] leading-[24px]">
            Mining Lease (30 years, renewable)
          </li>
        </ul>
      </div>
      <div className="font-helvetica font-normal text-[22px] leading-[24px] mt-8">
        The Provincial Departments are mandated to map resources, grant, renew &
        cancel mineral titles, regulate mining and development operations,
        occupational health, safety & environment (HSE) concerns, collect fees &
        royalties, ensure sustainable development & resource conservation and
        monitor post-mining activities   
      </div>
      <div className="mt-64"></div>
      {/* <MineralClassification/>
      <MineralWealthSection/>
      <MineralWealth/>
      <AvenueForMineralSlider/> */}
    </Container>
  );
};

export default InstitutionalArrangement;

import React from "react";
import IntroContainer from "components/IntroContainer";
import StartingBusiness from "assets/images/StartingBusiness.png";
import PreReq from "assets/images/PreReqInvestors.png";
import BusinessCards from "./BusinessCards";
import { ShowMore } from "components/UI/ShowMore";

function StartingNewBusiness() {
  const miningPoints = [
    {
      title: "Sole Proprietorship",
      description: (
        <p>
          A sole proprietorship is an unincorporated business conducted by only one person and does not distinguish
          between the owner and the company. A sole proprietorship's owner is accountable for the company's debts,
          losses, liabilities, and all gains. The company registration process in this case is carried out through the
          Federal Board of Revenue (FBR).
        </p>
      ),
    },
    {
      title: "Association of Person",
      description: (
        <p>
          In an instance where there is more than one individual and no more than twenty, the company would be
          registered as a General Partnership / Association of Persons with the city's respective Registrar of Firms.
          Association of Persons may have one, two, or both types of owners. It does not need complex paperwork to be
          created, making them accessible and affordable. The business requires a bank account, a registered trade name,
          and a registered tax number.
        </p>
      ),
    },
    {
      title: "Single Member Company (SMC Private Limited)",
      description: (
        <p>
          A single-member company (SMC), is a private business setup with one member or director. It has the advantages
          of limited liability in such that requirements of the Firms Ordinance of 1984 that apply to limited liability
          companies also apply to sole traders, subject to specific adjustments. Having a single-member company has the
          following benefits:
          <ul style={{ listStyle: "disc" }}>
            <li>In terms of the law, SMC is distinct from its members.</li>
            <li>The member's liability is capped at the amount of his investment.</li>
            <li> When a member passes away, the firm continues to exist.</li>
            <li>SMCs pay a lesser amount of company tax.</li>
            <li> An SMC's only member has exclusive authority over all corporate operations</li>
          </ul>
        </p>
      ),
    },
    {
      title: "Public Limited Company",
      description: (
        <p>
          <p>
            In Pakistan, a Public Limited Corporation may be established by three or more people for legal purposes. As
            with Private and Single-Member companies, the partners must sign a Memorandum of Association, and the public
            limited company must adhere to the Companies Act's regulations.
            <p>
              {" "}
              Public limited businesses can be registered in Pakistan as listed or unlisted entities. The distinction
              between the two is that the former makes its portion of the shares available for public purchase. On the
              other hand, an unlisted firm does not sell shares to the general public.
            </p>
          </p>
        </p>
      ),
    },
    {
      title: "Private Limited Company (PLC)",
      description: (
        <p>
          A Private Limited Company (PLC) sits between a partnership business and a publicly held public company. It can
          be registered with a least two individuals. The company and its stockholders each have their own legal
          identities. The board, which the shareholders choose, works with the CEO to make operational decisions for the
          business. Depending on its size, a PLC can also need a company secretary, legal counsel, and auditor.
        </p>
      ),
    },
    {
      title: "Non-Profit Organizations",
      description: (
        <p>
          Non-profit companies are registered under Section 42 of the Companies Act, 2017. The registration process
          requires drafting and submitting a memorandum of association, which outlines the objectives, governance
          structure, and operational procedures of the NPO. Additionally, founding members must provide their personal
          details and sign the memorandum. Upon approval, the organization is issued a registration certificate,
          allowing it to operate legally and seek funding, grants, and donations for its activities. Compliance with
          annual reporting and audit requirements is crucial to maintain the NPO's status and credibility.
        </p>
      ),
    },
  ];
  const foreignInvestorsPreReq = [
    {
      title: "Bank Account",
      description: "Open a company bank account in any commercial bank in Pakistan",
    },
    {
      title: "Register & Obtain Authorization",
      description:
        "Register & obtain authorization from relevant regulators (federal, provincial & local governments) as per your business activity. Opt for the services from the legal advisor and create a legal contract with your clients.",
    },
    {
      title: "State Bank's Approval",
      description:
        "Obtain State Banks Approval for foreign exchange remittance. Register foreign investment & facilitate repatriation of foreign exchange with SBP. Visit sbp.org.pk",
    },
    {
      title: "Environmental Registration",
      description:
        "Registration with the Environmental Protection Agency for Environmental Impact Assessment. Register at Federal & Provincial levels. Visit https://environment.gov.pk/",
    },
  ];
  return (
    <div>
      <div className="starting-business-intro">
        {" "}
        <IntroContainer
          title="Registering your Mining Business in Pakistan"
          content=" Pakistan has made the process of starting a new business fairly easy and simple through SECP and relevant authorities. There are several options available for interested individuals and/or businesses to set-up their mining or mining related businesses in Pakistan. In order to gain a better understanding of the types of business that can be registered in Pakistan, a brief summary is provided below:"
          introHeight="300px"
          width="80%"
        ></IntroContainer>
      </div>
      <div>
        {" "}
        <div className="business-mining-cards">
          {" "}
          {miningPoints.map((item, index) => (
            <BusinessCards item={item} index={index}></BusinessCards>
          ))}
        </div>
        <div className="image-wrapper">
          <img src={StartingBusiness} alt="Starting Business" className="cropped-image" />
        </div>
        <div className="starting-business-investor">
          <IntroContainer
            title={
              <h1>
                Additional steps for foreign <span style={{ color: "green" }}>Investor</span>
              </h1>
            }
            content={
              <div>
                <p>
                  <p>
                    A foreign investor may establish an independent business with any of the above mentioned corporate
                    structures. He can establish a sole proprietorship, can enter into partnership with any local person
                    or foreigner and even can establish a company with or without participation of local shareholder(s)
                    and director(s). If a foreign enterprise wishes to establish a business
                  </p>
                  <span id="more-content-startingbusiness" className="showmore-content" style={{ display: "none" }}>
                    in Pakistan as a part of its international operations, in addition to the said corporate structures
                    it also has following choices: It can obtain registration with the Board of Investment, Government
                    of Pakistan (the Board), for opening of a branch office, marketing office or liaison office.
                    Regulations of the Board impose certain restrictions on the operations of the enterprise. It can
                    appoint an agent in Pakistan. Relevant provisions of the Contract Act, 1872 shall apply in such
                    agency arrangements. It can enter into joint ventures with other business entities. Relevant
                    provisions of Contract Act, 1872 and Partnership Act 1932 are applicable to these ventures. The
                    financial year for most of the business enterprises is from 1st July to 30th June of every year. All
                    listed companies are required to follow the best corporate practices with special reference to
                    financial statements and audits etc.
                  </span>
                </p>
                <ShowMore
                  idButton="show-more-btn-startingbusiness"
                  idContent="more-content-startingbusiness"
                ></ShowMore>
              </div>
            }
            introHeight="auto"
            width="75%"
          />
        </div>
        <div className="pre-req-investors">
          <img src={PreReq} alt="unavailable"></img>
          <div className="pre-req-investors-content">
            <h1>Pre-requisites for Foreign Investors</h1>
            <ul>
              {foreignInvestorsPreReq.map((item, index) => (
                <li key={index}>
                  <h1>
                    {" "}
                    {index + 1}. {item.title}
                  </h1>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StartingNewBusiness;

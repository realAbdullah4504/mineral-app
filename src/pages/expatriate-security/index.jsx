import React from "react";
import { Container } from "components/UI";
import { FlipCards } from "components/FlipCards";
import BreadCrumbs from "components/Breadcrumbs";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";


const ExpatriateSecurity = () => {
    const breadcrumbs = [
        { path: '/', label: 'Home' },
        { path: '/service-and-support', label: 'Service & Support' },
        { path: "/expatriate-security", label: "Expatriate Security" },
      ];

  return (
    <div
      className="w-full"
      style={{
        height: "auto",
        backgroundImage: `linear-gradient(to bottom, white, rgba(255,255,255,0)), url(${FiscalIncentivesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container classes="mt-8 w-[90%]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-wrap mt-[20px]">
          <div className="w-full">
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Expatriate Security
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              Procedures of Expat NOC Application for expatriate to obtain security clearance certificate.
            </div>
            <div className="w-full flex justify-center mt-20">
              <div className="mineral-container-cards">
                <FlipCards
                  title={"NOC Sponsor Company"}
                  flip={true}
                  flipContent={
                    "Register your NOC Sponsor Company to get access for Expat NOC Application."
                  }
                  link={"/noc-sponsor-company"}
                ></FlipCards>
                <FlipCards
                  title={"Expat NOC Application"}
                  flip={true}
                  flipContent={
                    "Security clearance Application Forms for expatriates."
                  }
                  link={"#"}
                ></FlipCards>
              </div>
            </div>

            {/* large gap */}

            <div className="mt-64"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExpatriateSecurity;

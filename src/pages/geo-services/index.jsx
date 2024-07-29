  import BreadCrumbs from "components/Breadcrumbs";
  import { Container } from "components/UI";
  import LogoImg from "assets/images/logo.jpg";
  import PMDCImg from "assets/images/pmdc.png";
  import FWOImg from "assets/images/fwo.png";
  import PPLImg from "assets/images/ppl.png";
  import React from "react";
  import DataCard from "components/Cards/dataCard";

  const data = {
    headline: "Apply for Registration",
    link: '/registerorganization?orgtype=gggs'
  };

  const GeoServices = () => {
    const breadcrumbs = [
      { path: "/", label: "Home" },
      { path: "/who-is-who", label: "Who is Who" },
      { path: "#", label: "Geotechnical Geophysical Geological Services" },
    ];

    return (
      <Container classes="mt-8 w-[90%]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-wrap mt-14">
          <div className="w-full">
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Geotechnical Geophysical Geological Services
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>

            {/* <div className="rounded-md mt-5 mb-[13.5px] w-full justify-start flex">
              <img className="w-full object-cover" src={GovernmentOrganizationImg} alt="" />
            </div> */}
            <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                <DataCard type={"add"} data={data} />
                <DataCard type={"detail"} data={{headline: "National Mineral Data Cell (NMDC)", logo: LogoImg}} />
                <DataCard type={"detail"} data={{headline: "Ministry of Energy (Petroleum Division)", logo: LogoImg}} />
                <DataCard type={"detail"} data={{headline: "Pakistan Mineral Development Corporation (PMDC)", logo: PMDCImg}} />
                <DataCard type={"detail"} data={{headline: "Frontier Work Organization (FWO)", logo: FWOImg}} />
                <DataCard type={"detail"} data={{headline: "Pakistan Petroleum Limited (PPL)", logo: PPLImg}} />
              </div>
            </div>

            <div className="mt-80"></div>
          </div>
        </div>
      </Container>
    );
  };

  export default GeoServices;

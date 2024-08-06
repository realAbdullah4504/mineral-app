  import BreadCrumbs from "components/Breadcrumbs";
  import { Container } from "components/UI";
  import LogoImg from "assets/images/logo.jpg";
  import PMDCImg from "assets/images/pmdc.png";
  import SaindakImg from "assets/images/saindakLogo.png";
  import PmplImg from "assets/images/pmplLogo.png";
  import PPLImg from "assets/images/ppl.png";
  import GSPImg from "assets/images/GSPLogo.png";
  import React from "react";
  import DataCard from "components/Cards/dataCard";
import StaticDataCard from "components/Cards/staticDataCard";

  const data = {
    headline: "Apply for Registration",
    link: '/registerorganization?orgtype=go'
  };

  const GovernmentOrganization = () => {
    const breadcrumbs = [
      { path: "/", label: "Home" },
      { path: "/who-is-who", label: "Who is Who" },
      { path: "#", label: "Government Departments" },
    ];

    return (
      <Container classes="mt-8 w-[90%]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-wrap mt-14">
          <div className="w-full">
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
              Government Departments
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>

            {/* <div className="rounded-md mt-5 mb-[13.5px] w-full justify-start flex">
              <img className="w-full object-cover" src={GovernmentOrganizationImg} alt="" />
            </div> */}
            <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                {/* <DataCard type={"add"} data={data} /> */}
                <StaticDataCard type={"detail"} data={{headline: "Ministry of Energy ",title: "(Petroleum Division)",subTitle: "(Mineral Wing)", logo: LogoImg, email: "info@minerals.gov.pk", phone: "051 9202337", address: "2nd Floor, Petroleum House, Ataturk Avenue, G-5/2, Islamabad"}} />
                <StaticDataCard type={"detail"} data={{headline: "National Minerals Data Cell ",title: "(NMDC)",subTitle: "(Petroleum Division)", logo: LogoImg, email: "nmdc@minerals.gov.pk", phone: "051 9203225", address: "2nd Floor, Petroleum House, Ataturk Avenue, G-5/2, Islamabad"}} />
                <StaticDataCard type={"detail"} data={{headline: "Geological Survey Of Pakistan",title: "(GSP)", logo: GSPImg, email: "qta@gsp.gov.pk", phone: "+9281-9211032", address: "P.O Box No 1461 Shahzad Town, Islamabad"}} />
                <StaticDataCard type={"detail"} data={{headline: "Pakistan Mineral Development Corporation ",title: "(PMDC)", logo: PMDCImg, email: "info@pmdc.gov.pk", phone: "+92-51-9265123-4", address: "Plot No 13, H-9/4, Islamabad"}} />
                <StaticDataCard type={"detail"} data={{headline: "Saindak Metals Limted", logo: SaindakImg, email: "info@saindak.com.pk", phone: "+92819201646", address: "Gul Bagh Samungli Road Quetta, Balochistan "}} />
                <StaticDataCard type={"detail"} data={{headline: "Pakistan Mineral Private Limited",title: "(PMPL)", logo: PmplImg, email: "pmpl@ghpl.com.pk", phone: "051 9211249", address: "5th Floor, Petroleum House, Ataturk Avenue, G-5/2, Islamabad"}} />
                <StaticDataCard type={"detail"} data={{headline: "Pakistan Petroleum Limited ",title: "Bolan Mining Enterprises", subTitle: "(BME)", logo: PPLImg, email: "info@bme.com.pk", phone: "0092 812838127", address: "BME House, Model Town Quetta, Balochistan"}} />
              </div>
            </div>

            <div className="mt-80"></div>
          </div>
        </div>
      </Container>
    );
  };

  export default GovernmentOrganization;

  import BreadCrumbs from "components/Breadcrumbs";
  import { Container } from "components/UI";
  import addIcon from "assets/images/addIcon.svg";
  import React from "react";
  import DataCard from "components/Cards/dataCard";

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
                <DataCard type={"add"} data={data} />
                <DataCard type={"detail"} data={data} />
                <DataCard type={"detail"} data={data} />
                <DataCard type={"detail"} data={data} />
                <DataCard type={"detail"} data={data} />
                <DataCard type={"detail"} data={data} />
              </div>
            </div>

            <div className="mt-80"></div>
          </div>
        </div>
      </Container>
    );
  };

  export default GovernmentOrganization;

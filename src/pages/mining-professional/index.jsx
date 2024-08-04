import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import DataCard from "components/Cards/dataCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "services/session/cookies";
import { notification } from "antd";
import { getUserData } from "utils/helpers";

const breadcrumbs = [
  { path: "/", label: "Home" },
  { path: "/who-is-who", label: "Who is Who" },
  { path: "#", label: "Associations" },
];

const Adddata = {
  headline: "Apply for Registration",
  link: "/registerorganization?orgtype=mp",
};

const sampleData = [
  {
    name: "Salman Ahmad",
    email: "SA89@gmail.com",
    mobileNumber: "04255681432",
    professionalRole: "CEO",
  },
  {
    name: "Waqar Ilyas Raja",
    email: "SH-illyas@gmail.com",
    mobileNumber: "03287863583",
    professionalRole: "Manager",
  },
  {
    name: "Chanazib Sai",
    email: "SH-illyas@gmail.com",
    mobileNumber: "03215547896",
    professionalRole: "Software Engineer",
  },
  {
    name: "Sardar Sarmad",
    email: "SS.123G@gmail.com",
    mobileNumber: "03151451568",
    professionalRole: "Project Manager",
  },
  {
    name: "Haji Maula Bakhsh",
    email: "Bashsh321@gmail.com",
    mobileNumber: "03337814440",
    professionalRole: "Miner",
  },
  {
    name: "Toor Khan",
    email: "Toor55@gmail.com",
    mobileNumber: "03424578963",
    professionalRole: "Coal Miner",
  },
];

const HRPro = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUser(data);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}api/PublicWhoIsWho/GetAllApproved?OrganizationType=MiningProfessionals&PageNumber=1&PageSize=100`,
          {
            headers: {
              Authorization: `Bearer ${getCookie("token")}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setData(response.data);
      } catch (error) {
        notification.error({
          message: "Error",
          description: "Failed to fetch data.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const userHasMatch = data?.data?.find((item) => item.email === user?.Email);

  console.log("userHasMatch", userHasMatch)

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Mining Professional
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="w-full flex justify-center mt-16">
            <div className="flex flex-wrap justify-center gap-20 p-4">
              {!userHasMatch && <DataCard type={"add"} data={Adddata} />}
              {userHasMatch && <DataCard type={"edit"} data={userHasMatch} />}
              {data?.data?.length > 0 &&
                data.data.map((item, index) => (
                  <div key={index} className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-[18rem] min-w-[18rem]">
                    <DataCard type={"detail"} data={item} />
                  </div>
                ))}
              {sampleData &&
                sampleData.map((item, index) => (
                  <div
                    key={index}
                    className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-[18rem] min-w-[18rem]"
                  >
                    <DataCard type={"detail"} data={item} />
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default HRPro;

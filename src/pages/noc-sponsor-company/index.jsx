import React from "react";
import { useState, useEffect } from "react";
import { Space, Table } from "antd";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import MoreInfo from "assets/images/geomapinfo.png";
import { saveSampleListingAPI } from "services/api/common";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { message } from "antd";
import { Loader } from "components";

const TableMap = () => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Service & Support" },
    { path: "/expatriate-security", label: "Expatriate Security" },
    { path: "/noc-sponsor-company", label: "NOC Company" },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Ali Akbar",
      age: "29",
      address: "Faisalabad",
    },
  ];
  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const { data, isError, message } = await saveSampleListingAPI(
          REQUEST_TYPES.GET,
          ENDPOINTS.Mineral_Form_Listing
        );
        if (isError) {
          setLoading(false);
          warning(message);
        }
        if (!isError && data) {
          setListing(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="table-data">
      <Container classes="mt-10">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="mineral-testing-title">NOC Sponsor Company</div>
        <div className="mineral-testing-table-header">
          <div></div>
          <div>
            {" "}
            <div className="geological-moreinfo" style={{ paddingBottom: "0px" }}>
              {" "}
              <button style={{ backgroundImage: `url(${MoreInfo})` }}>
                <a href="/noc-company-form">
                  {" "}
                  <div
                    style={{
                      padding: "40px",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <div>Add Company</div>
                    <svg
                      style={{ opacity: "0.5", paddingBottom: "5px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
        {loading ? <Loader></Loader> : <Table columns={columns} dataSource={data} pagination={false} />}
      </Container>
    </div>
  );
};

export default TableMap;

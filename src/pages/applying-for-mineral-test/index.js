import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Space, Table } from "antd";
import BreadCrumbs from "components/Breadcrumbs";
import MoreInfo from "assets/images/geomapinfo.png";
import { saveSampleListingAPI } from "services/api/common";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { message } from "antd";

import { setCookiesByName } from "utils/helpers";

import { Loader } from "components";
const items = [
  {
    key: "1",
    label: "Edit",
    link: "#",
  },
  {
    key: "2",
    label: "View Application",
    link: "#",
  },
  {
    key: "3",
    label: "View Sample Details",
    link: "#",
  },
  {
    key: "/shipment-detail",
    label: "Add Shipment Details",
    link: "/shipment-detail",
  },
  {
    key: "5",
    label: "Payment",
    link: "#",
  },
  {
    key: "6",
    label: "View Report",
    link: "#",
  },
  {
    key: "7",
    label: "Request Retest",
    link: "#",
  },
];

const TableMap = () => {
  const navigate = useNavigate();
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const onEdit = (key) => {
    setCookiesByName("mineralEditid", key, true);
    localStorage.setItem("mineralEditMode", true);
    navigate(`/applying-for-mineral-form`);
  };
  const handleDropdownItemClick = (e, id = "") => {
    if (e?.key) {
      const url = `${e?.key}?id=${id}`;
      navigate(url);
    }
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "testName",
      key: "testName",
      render: (text) => {
        return <strong>{text}</strong>;
      },
    },
    {
      title: "Type of Test",
      dataIndex: "mineralTestId",
      key: "mineralTestId",
    },
    {
      title: "Mineral Lab",
      dataIndex: "labName",
      key: "labName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        let color;
        let show;
        switch (text) {
          case true:
            color = "green";
            show = "active";
            break;
          case "Approved":
            color = "yellow";
            show = text;
            break;
          case false:
            color = "red";
            show = "inactive";
            break;
          case "Done":
            color = "black";
            show = text;
            break;
          default:
            color = "default";
            show = text;
        }
        return <span style={{ color, fontWeight: "bold" }}>{show}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" style={{ textAlign: "left!important", paddingLeft: "0px" }}>
          {/* <Typography.Link onClick={() => onChange(record.id)}>View</Typography.Link> */}
          <button onClick={() => onEdit(record.id)}>Edit</button>
        </Space>
      ),
    },
  ];

  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Services & Support" },
    { path: "/mineral-testing-labs", label: "Mineral Testing Labs" },
    { path: "/applying-for-mineral-test", label: "Apply" },
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
          console.log(data, "data");
          console.log(data,"Shujahat");
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
      <div className="mt-[50px]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="mineral-testing-title">Applying for Mineral Tests</div>
      <div className="mineral-testing-table-header">
        <div>My Applications</div>
        <div>
          {" "}
          <div className="geological-moreinfo" style={{ paddingBottom: "0px" }}>
            {" "}
            <button style={{ backgroundImage: `url(${MoreInfo})` }}>
              <a href="/applying-for-mineral-form">
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
                  <div>Add Application</div>
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
      {loading ? <Loader></Loader> : <Table columns={columns} dataSource={listing} pagination={false} />}
    </div>
  );
};

export default TableMap;

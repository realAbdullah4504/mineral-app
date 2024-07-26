import React from "react";
import { Dropdown, Space, Table } from "antd";
import BreadCrumbs from "components/Breadcrumbs";
import MoreInfo from "assets/images/geomapinfo.png";

const items = [
  {
    key: "1",
    label: "Edit",
  },
  {
    key: "2",
    label: "View Application",
  },
  {
    key: "3",
    label: "View Sample Details",
  },
  {
    key: "4",
    label: "Add Shipment Details",
  },
  {
    key: "5",
    label: "Payment",
  },
  {
    key: "6",
    label: "View Report",
  },
  {
    key: "7",
    label: "Request Retest",
  },
];

const TableMap = () => {
  const columns = [
    {
      title: "Sr. No",
      dataIndex: "srNo",
      key: "srNo",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <strong>{text}</strong>;
      },
    },
    {
      title: "Type of Test",
      dataIndex: "typeOfTest",
      key: "typeOfTest",
    },
    {
      title: "Mineral Lab",
      dataIndex: "mineralLab",
      key: "mineralLab",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        let color;
        switch (text) {
          case "In Progress":
            color = "green";

            break;
          case "Approved":
            color = "yellow";
            break;
          case "Failed":
            color = "red";
            break;
          case "Done":
            color = "black";
            break;
          default:
            color = "default";
        }
        return <span style={{ color, fontWeight: "bold" }}>{text}</span>;
      },
    },
    {
      title: "Action",
      key: "operation",
      render: () => (
        <Space size="middle">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      srNo: 1,
      name: "Lorem Ipsum name",
      typeOfTest: "Type of Test",
      mineralLab: "Mineral Lab",
      status: "In Progress",
    },
    {
      key: "2",
      srNo: 2,
      name: "Lorem Ipsum name",
      typeOfTest: "Type of Test",
      mineralLab: "Mineral Lab",
      status: "Approved",
    },
    {
      key: "3",
      srNo: 3,
      name: "Lorem Ipsum name",
      typeOfTest: "Type of Test",
      mineralLab: "Mineral Lab",
      status: "Failed",
    },
    {
      key: "4",
      srNo: 4,
      name: "Lorem Ipsum name",
      typeOfTest: "Type of Test",
      mineralLab: "Mineral Lab",
      status: "Done",
    },
  ];

  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Services & Support" },
    { path: "/mineral-testing-labs", label: "Mineral Testing Labs" },
    { path: "/applying-for-mineral-test", label: "Apply" },
  ];

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
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default TableMap;

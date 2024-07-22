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
    label: "View Suggestion",
  },
  {
    key: "3",
    label: "View Suggestion Details",
  },
  {
    key: "6",
    label: "View Report",
  },
  {
    key: "7",
    label: "Request Re Evaluation",
  },
];

const CsrCommunity = () => {
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    {
      title: "Comment Type",
      dataIndex: "commentType",
      key: "commentType",
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
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
          case "Rejected":
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
      name: "Suggestion for waste management",
      email: "HashaamEjaz@gmail.com",
      mobileNumber: "+92 311 0000000",
      commentType: "suggestions",
      comment: "Please add more trucks for waste disposal to avoid blockages",
      status: "In Progress",
    },
  ];

  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "csr", label: "CSR" },
    { path: "csr-community", label: "Voice Of Community" },
  ];

  return (
    <div className="table-data">
      <div className="mt-[50px] mb-[50px]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="mineral-testing-table-header">
        <div>My Suggestions</div>
        <div>
          <div className="geological-moreinfo" style={{ paddingBottom: "0px" }}>
            <button style={{ backgroundImage: `url(${MoreInfo})` }}>
              <a href="/csr-community-form">
                <div
                  style={{
                    padding: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>Add Suggestion</div>
                  <svg
                    style={{ opacity: "0.5", paddingBottom: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
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
      <div className="mb-[150px]">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};

export default CsrCommunity;

import React from "react";
import { Badge, Dropdown, Space, Table } from "antd";
import MoreInfo from "assets/images/geomapinfo.png";
function NocListing({ setState }) {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Expat Name",
      dataIndex: "expat-name",
      key: "expat name",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "Visit Place",
      dataIndex: "visit-place",
      key: "visit-place",
    },
    {
      title: "When was it applied",
      dataIndex: "applied-time",
      key: "applied-time",
    },
    {
      title: "Application Status",
      dataIndex: "application-status",
      key: "application-status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>View {record.name}</a>
          <a>Edit</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      "expat-name": "Ali Akbar",
      nationality: "29",
      "visit-place": "Faisalabad",
      "applied-time": "Saturday",
      "application-status": "Pending",
    },
  ];
  return (
    <div>
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Applications</div>
        <div>
          {" "}
          <div className="geological-moreinfo hover:text-black " style={{ paddingBottom: "0px" }}>
            {" "}
            <button style={{ backgroundImage: `url(${MoreInfo})`, width: "120%" }} onClick={() => setState("NocForm")}>
              <div
                style={{
                  padding: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <div className="mt-1">Apply NOC Application</div>
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
            </button>
          </div>
        </div>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default NocListing;

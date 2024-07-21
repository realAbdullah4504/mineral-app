import React from "react";
import { Badge, Dropdown, Space, Table } from "antd";
import MoreInfo from "assets/images/geomapinfo.png";
function NocListing({ setState }) {
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
  return (
    <div className="table-data">
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Applications</div>
        <div>
          {" "}
          <div className="geological-moreinfo hover:text-black " style={{ paddingBottom: "0px" }}>
            {" "}
            <button style={{ backgroundImage: `url(${MoreInfo})`, width: "120%" }} onClick={() => setState("form")}>
              <div
                style={{
                  padding: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <div>Apply NOC Application</div>
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

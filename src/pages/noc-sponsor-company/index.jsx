import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space, Table } from "antd";
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
    // const columns = [
     
    //     {
    //         title: 'Action',
    //         key: 'action',
    //         render: (_, record) => (
    //           <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //           </Space>
    //         ),
    //       },
    //   ];
  const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
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
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default TableMap;

import { Table, Button } from "antd";

function Listing({ dataSource, setSelectedRecord }) {
  // Add Sr No to the data source
  const dataSourceWithSrNo = dataSource.map((item, index) => ({
    ...item,
    "sr.no": index + 1,
  }));
  const handleEditClick = (record) => {
    setSelectedRecord(record);
  };

  const columns = [
    {
      title: "Sr No",
      dataIndex: "sr.no",
      key: "sr.no",
    },
    {
      title: "Sample Type",
      dataIndex: "sample-type",
      key: "sample-type",
    },
    {
      title: "Target Mineral",
      dataIndex: "target-mineral",
      key: "target-mineral",
    },
    {
      title: "Sample Location",
      dataIndex: "sample-location",
      key: "sample-location",
    },
    {
      title: "Sample Image",
      dataIndex: "sample-image",
      key: "sample-image",
      render: (_, record) => (
        <div onClick={() => handleEditClick(record)} style={{ cursor: "pointer", color: "#1677ff" }}>
          View
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div onClick={() => handleEditClick(record)} style={{ cursor: "pointer", color: "#1677ff" }}>
          Edit
        </div>
      ),
    },
  ];

  return <Table dataSource={dataSourceWithSrNo} columns={columns} />;
}

export default Listing;

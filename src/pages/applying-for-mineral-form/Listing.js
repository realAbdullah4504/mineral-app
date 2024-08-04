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
      dataIndex: "sampleType",
      key: "sampleType",
    },
    {
      title: "Target Mineral",
      dataIndex: "targetedMineral",
      key: "targetedMineral",
    },
    {
      title: "Sample Location",
      dataIndex: "sampleLocation",
      key: "sampleLocation",
    },
    // {
    //   title: "Sample Image",
    //   dataIndex: "sampleImagePath",
    //   key: "sampleImagePath",
    //   render: (_, record) => (
    //     <div onClick={() => handleEditClick(record)} style={{ cursor: "pointer", color: "#1677ff" }}>
    //       View
    //     </div>
    //   ),
    // },
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

import { Table, Button } from "antd";

function ListingNoc({ dataSource, columns }) {
  const dataSourceWithSrNo = dataSource.map((item, index) => ({
    ...item,
    "sr.no": index + 1,
  }));

  return <Table dataSource={dataSourceWithSrNo} columns={columns} />;
}

export default ListingNoc;

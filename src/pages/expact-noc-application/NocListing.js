import React, {useState, useEffect} from "react";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
import { commonAPIs } from "services/api/common";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { message, Typography } from "antd";
import { Loader } from "components";
import { Space, Table } from "antd";
import {applicationStatus} from "utils/constant/noc";
import MoreInfo from "assets/images/geomapinfo.png";
function NocListing({ setState }) {
  const [records, setRecords] = useState([]);
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const fetchListing = async() => {
      setLoading(true);
      try {
        const { data, isError, message } = await commonAPIs(
          REQUEST_TYPES.GET,
          ENDPOINTS.GET_NOC_APPLICATIONS
        );
        if (isError) {
          setLoading(false);
          warning(message);
        }
        if (!isError && data) {
          console.log(data, "data");
          setRecords(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
  }
  useEffect(()=> {
   fetchListing();
  }, []);
  const getStatus = (item) => {
    const rarray = applicationStatus.filter((value) =>  (value.status === item ));
        if(rarray.length> 0){
            return rarray[0].display_status;
        }
        else{
            return "-";
        }
  }
  const onChange = (key) => {
    navigate(`/noc-view-application?id=${key}`);
  };
  const onEdit = (key) => {
    localStorage.setItem('NOCidEdit',key);
    localStorage.removeItem('NOCidview');
    localStorage.removeItem('NOCid');
    navigate('/pageone');
};
  const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: 'Expat Name',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (title,record) => (record.expatTitle +" "+title +" "+ record.middleName +" "+record.lastName),
    },
    {
      title: 'Nationality',
      dataIndex: 'nationalityName',
      key: 'nationalityName',
    },
    {
        title: 'Visit place',
        dataIndex: 'areaToBeVisited',
        key: 'areaToBeVisited',
    },
    {
        title: 'When was it applied',
        dataIndex: 'submittedDate',
        key: 'submittedDate',
        
        render: (title) => title? (dayjs(title).format('DD/MM/YYYY')) : "-",
    },
    {
        title: 'Application Status',
        dataIndex: 'status',
        key: 'status',
        render: (key) => (getStatus(key)),
        
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle" style={{textAlign: 'left!important',paddingLeft: '0px'}}>
            <Typography.Link  onClick={() => onChange(record.id)}>View</Typography.Link>
            {
                (record.status === 'PublicNewEntry' || record.status === 'SubmissionFailed')? (
                    <Typography.Link  onClick={() => onEdit(record.id)}>Edit</Typography.Link>
                ):(<></>)
                
            }
          </Space>
        ),
      },
  ]
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
                  className="size-6"
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
      {loading ? <Loader></Loader> : <Table columns={columns} dataSource={records} pagination={false} />}
    </div>
  );
}

export default NocListing;

import React from "react";
import { useState, useEffect } from "react";
import { Space, Table, Dropdown } from "antd";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import MoreInfo from "assets/images/geomapinfo.png";
import { saveSampleListingAPI } from "services/api/common";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { Loader } from "components";
import { setCookiesByName } from "utils/helpers";
const items = [
  {
    key: "/noc-company-form",
    label: "Edit",
    link: "/noc-company-form",
  },
  {
    key: "/view-sponsor-company",
    label: "View",
    link: "/view-sponsor-company",
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
  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Service & Support" },
    { path: "/expatriate-security", label: "Expatriate Security" },
    { path: "/noc-sponsor-company", label: "NOC Company" },
  ];

  const handleDropdownItemClick = (e, id = "", status = "") => {
    let url = e?.key;
    if (e?.key === "/view-sponsor-company") {
      url = `${url}?id=${id}`;
      setCookiesByName("companyEditRecordId", id, true);
    localStorage.setItem("SponsorEditMode", true);
    }else{
      setCookiesByName("companyEditRecordId", id, true);
      localStorage.setItem("SponsorEditMode", true);
    }
    navigate(url);
  };
  const applicationStatus = [
    {
      status: "PublicNewEntry",
      display_status: "Pending Submission",
    },
    {
      status: "PublicEntrySubmitted",
      display_status: "Submitted for Approval",
    },
    {
      status: "SubmissionFailed",
      display_status: "Re-Submit Application",
    },
    {
      status: "EntrySubmitted",
      display_status: "Submitted for Approval",
    },
    {
      status: "ReviewerChanges",
      display_status: "Awaiting Approval",
    },
    {
      status: "ReviewFailed",
      display_status: "Awaiting Approval",
    },
    {
      status: "ReviewPassed",
      display_status: "Awaiting Approval",
    },
    {
      status: "ApprovalFailed",
      display_status: "Awaiting Approval",
    },
    {
      status: "ApprovalPassed",
      display_status: "Application Approved",
    },
  ];

  const getStatus = (item) => {
    const rarray = applicationStatus.filter((value) => value.status === item);

    if (rarray.length > 0) {
      return rarray[0].display_status;
    } else {
      return "-";
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Registration Type",
      dataIndex: "registrationType",
      key: "registrationType",
    },
    {
      title: "Registration City",
      dataIndex: "cityName",
      key: "cityName",
    },
    {
      title: "Business Domain",
      dataIndex: "businessDomain",
      key: "businessDomain",
    },
    {
      title: "Year of Registration",
      dataIndex: "registrationYear",
      key: "registrationYear",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <span >{getStatus(text)}</span>,
    },
    {
      title: "Action",
      key: "operation",
      render: (text, record) => {
        return (
          <Space size="middle">
            <Dropdown
              menu={{
                onClick: (e) => handleDropdownItemClick(e, record?.id, record?.status),
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
        );
      },
    },
  ];

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const { data, isError, message } = await saveSampleListingAPI(REQUEST_TYPES.GET, ENDPOINTS.NOC_SPONSOR_Listing);
        if (isError) {
          setLoading(false);
          warning(message);
        }
        if (!isError && data) {
          setListing(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    })();
    localStorage.removeItem("SponsorEditMode");
    deleteCookie("companyEditRecordId");
  }, []);

  return (
    <div className="table-data" style={{ marginBottom: "50px" }}>
      <Container classes="mt-10">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="mineral-testing-title">NOC Sponsor Company</div>
        <div className="mineral-testing-table-header">
          <div></div>
          <div>
            {" "}
            <div className="geological-moreinfo" style={{ paddingBottom: "0px" }}>
              {" "}
              {!listing.length && (
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
              )}
            </div>
          </div>
        </div>
        {loading ? <Loader></Loader> : <Table columns={columns} dataSource={listing} pagination={false} />}
      </Container>
    </div>
  );
};

export default TableMap;

export const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
export const REQUEST_TYPES = {
  DELETE: "DELETE",
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
};
export const ENDPOINTS = {
  LOGIN: `${REACT_APP_BASE_URL}api/PublicUser/Login`,
  TEST_APPLICATION_DETAILS: `${REACT_APP_BASE_URL}api/PublicTestApplication/SaveTestApplicationDetails`,
  GET_SAMPLE_DETAILS: `${REACT_APP_BASE_URL}api/PublicTestApplication/GetSampleDetailList`,
  SAVE_SAMPLE_DETAILS: `${REACT_APP_BASE_URL}api/PublicTestApplication/SaveSampleDetail`,
  SAVE_TEST_INFO: `${REACT_APP_BASE_URL}api/PublicTestApplication/SaveTestInformation`,
  SAVE_BACKGROUND_INFO: `${REACT_APP_BASE_URL}api/PublicTestApplication/SaveBackgroundInformation`,
  SAVE_SHIPMENT_INFO: `${REACT_APP_BASE_URL}api/PublicTestApplication/SaveShipmentDetails`,
  Mineral_Form_Listing: `${REACT_APP_BASE_URL}api/MineralTest/GetAll`,
  NOC_Form_Listing: `${REACT_APP_BASE_URL}api/PublicNOCApplication/GetAllNOC`,
};

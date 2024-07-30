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
  GET_MINERAL_TEST: `${REACT_APP_BASE_URL}/api/MineralTest/GetAllMineralTest`,
  GET_MINERAL_TEST_ID_DETAILS: `${REACT_APP_BASE_URL}/api/MineralTest/GetLabByMineralTestId`,
  SAVE_TEST_INFO: `${REACT_APP_BASE_URL}api/PublicTestApplication/SaveTestInformation`,
  SAVE_BACKGROUND_INFO: `${REACT_APP_BASE_URL}api/PublicTestApplication/SaveBackgroundInformation`,
  SAVE_SHIPMENT_INFO: `${REACT_APP_BASE_URL}api/PublicTestApplication/SaveShipmentDetails`,
  Mineral_Form_Listing: `${REACT_APP_BASE_URL}api/MineralTest/GetAll`,
  NOC_Form_Listing: `${REACT_APP_BASE_URL}api/PublicNOCApplication/GetAllNOC`,
  NOC_SPONSOR_Listing: `${REACT_APP_BASE_URL}api/PublicCompany/GetAllCompanies`,
  NOC_SPONSOR_CITY_Listing: `${REACT_APP_BASE_URL}/api/City/GetAllCities`,
  SAVE_NOC_SPONSOR_FORM: `${REACT_APP_BASE_URL}api/PublicCompany/CreateUpdate`,
  GET_BANK_LISTING: `${REACT_APP_BASE_URL}/api/Bank/GetAll`,
  GET_NATIONALITY_LISTING: `${REACT_APP_BASE_URL}/api/PublicNOCApplication/GetAllNationality`,
  SAVE_EXPACT_CREATE_FORM_APPLICATION: `${REACT_APP_BASE_URL}/api/PublicNOCApplication/SaveNOCApplicationDetails`,
  GET_EXPACT_APPLICATION_FORM: `${REACT_APP_BASE_URL}/api/Bank/GetAll`,
  SAVE_EXPACT_APPLICATION_DETAILS: `${REACT_APP_BASE_URL}/api/PublicNOCApplication/SaveExpatriatePersonalDetails`,
  GET_NOC_APPLICATIONS: `${REACT_APP_BASE_URL}api/PublicNOCApplication/GetAllNOC`,
  GET_ALL_NATIONALITY: `${REACT_APP_BASE_URL}api/PublicNOCApplication/GetAllNationality`,
  GET_ALL_BANKS: `${REACT_APP_BASE_URL}api/Bank/GetAll`,
  GET_NOC_APPLICATION_BY_ID: `${REACT_APP_BASE_URL}api/PublicNOCApplication/GetNOCApplicationById`,
  SAVE_EXPACT_APPLICATION_PROFESSION_DETAILS: `${REACT_APP_BASE_URL}/api/PublicNOCApplication/SaveProfessionalDetail`,
  SAVE_EXPACT_APPLICATION_PURPOSEVIST_DETAILS: `${REACT_APP_BASE_URL}api/PublicNOCApplication/SavePurposeOfVisit`,
};

export const mineralTestIdDetails = (testId) => {
  return `${REACT_APP_BASE_URL}/api/MineralTest/GetLabByMineralTestId?MineralTestId=${testId}`;
};
export const expactApplicationForm = (testId) => {
  return `${REACT_APP_BASE_URL}/api/PublicNOCApplication/GetNOCApplicationById?NocApplicationId=${testId}`;
};

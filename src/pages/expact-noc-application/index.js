import React, { useEffect } from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { useState } from "react";
import NocListing from "./NocListing";
import NocForm from "./NocForm";
import NocStep1 from "./NocStep1";
import NocStep2 from "./NocStep2";
import NocStep3 from "./NocStep3";
import NocStep4 from "./NocStep4";
import NocStep5 from "./NocStep5";
import NocStep6 from "./NocStep6";
import NocStep7 from "./NocStep7";
import NocStep8 from "./NocStep8";
const ExpatNocApplication = () => {
  const [step, setStep] = useState("NocListing");
  const [equipment, setEquipment] = useState("yes");
  const [alreadyVisited, setAlreadyVisited] = useState("Yes");

  const tabHandler = {
    NocListing: <NocListing setStep={setStep}></NocListing>,
    NocForm: <NocForm setStep={setStep}></NocForm>,
    Step1: <NocStep1 setStep={setStep}></NocStep1>,
    Step2: <NocStep2 setStep={setStep}></NocStep2>,
    Step3: <NocStep3 setStep={setStep} setEquipment={setEquipment}></NocStep3>,
    Step4: <NocStep4 setStep={setStep}></NocStep4>,
    Step5: <NocStep5 setStep={setStep} equipment={equipment}></NocStep5>,
    Step6: <NocStep6 setStep={setStep} setAlreadyVisited={setAlreadyVisited}></NocStep6>,
    Step7: <NocStep7 setStep={setStep}></NocStep7>,
    Step8: <NocStep8 setStep={setStep} alreadyVisited={alreadyVisited}></NocStep8>,
  };
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Services & Support" },
    { path: "/expatriate-security", label: "Expatriate Security" },
    { path: "/expact-noc-application", label: "NOC Applications" },
  ];
  useEffect(() => {
    const deleteCookie = (name) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    };
    localStorage.removeItem("NOCEditMode");
    deleteCookie("expactapplicationid");
    localStorage.removeItem("NOCidview");
    localStorage.removeItem("NOCid");
  }, []);
  return (
    <div className="expact-noc-application-list mx-auto mb-20 mineral-form">
      <div className="mt-[50px]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="mineral-testing-title">Applying for NOC Applications</div>
      </div>
      {step !== "NocListing" && step !== "NocForm" ? (
        <div className="my-10">
          Expatriate Security Clearance <span className="font-bold">Add Application</span>
        </div>
      ) : (
        ""
      )}

      {tabHandler[step]}
    </div>
  );
};
export default ExpatNocApplication;

import React from "react";
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
  const [state, setState] = useState("NocListing");
  const [equipment, setEquipment] = useState("yes");
  const [alreadyVisited, setAlreadyVisited] = useState("Yes");
  const tabHandler = {
    NocListing: <NocListing setState={setState}></NocListing>,
    NocForm: <NocForm setState={setState}></NocForm>,
    Step1: <NocStep1 setState={setState}></NocStep1>,
    Step2: <NocStep2 setState={setState}></NocStep2>,
    Step3: <NocStep3 setState={setState} setEquipment={setEquipment}></NocStep3>,
    Step4: <NocStep4 setState={setState}></NocStep4>,
    Step5: <NocStep5 setState={setState} equipment={equipment}></NocStep5>,
    Step6: <NocStep6 setState={setState} setAlreadyVisited={setAlreadyVisited}></NocStep6>,
    Step7: <NocStep7 setState={setState}></NocStep7>,
    Step8: <NocStep8 setState={setState} alreadyVisited={alreadyVisited}></NocStep8>,
  };
  return (
    <div className="expact-noc-application-list w-4/5 mx-auto mb-20">
      <div className="my-10">
        <h1 className="text-4xl font-bold">
          Service & Support:<span className="text-green-600">Expat NOC Application</span>
        </h1>
        <p>
          Maps and Reports Fiscal Incentives Mineral Testing Labs Mining conscessions{" "}
          <span className="font-bold">Expatriate Security Clearance</span>Reseach & development
        </p>
      </div>
      {state !== "NocListing" && state !== "NocForm" ? (
        <div className="my-10">
          Expatriate Security Clearance <span className="font-bold">Add Application</span>
        </div>
      ) : (
        ""
      )}

      {tabHandler[state]}
    </div>
  );
};
export default ExpatNocApplication;

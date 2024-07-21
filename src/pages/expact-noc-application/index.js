import React from "react";
import { useState } from "react";
import NocListing from "./NocListing";
import NocForm from "./NocForm";
const ExpatNocApplication = () => {
  const [state, setState] = useState("listing");
  return (
    <div className="expact-noc-application-list w-4/5 mx-auto">
      <div className="my-20">
        <h1 className="text-4xl font-bold">
          Service & Support:<span className="text-green-600">Expat NOC Application</span>
        </h1>
        <p>
          Maps and Reports Fiscal Incentives Mineral Testing Labs Mining conscessions{" "}
          <span className="font-bold">Expatriate Security Clearance</span>Reseach & development
        </p>
      </div>
      {state === "listing" ? <NocListing setState={setState}></NocListing> : <NocForm></NocForm>}
    </div>
  );
};
export default ExpatNocApplication;

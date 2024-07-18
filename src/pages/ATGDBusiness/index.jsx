import React, { useState } from "react";
import Map from "assets/images/PakMap.png";
// import { Modal } from "react-bootstrap";
import { Button } from "components/UI/Button";
import { InvestmentOpportunitySection } from "components";
import { Container } from "components/UI";
import BreadCrumbs from "components/Breadcrumbs";

function ATGDBusiness() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Service & Support" },
    { path: "/access-to-geological-data", label: "Geological Data" },
  ];
  return (
    <Container>
      <div className="flex mb-[62px] mt-[41px]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>

      <div className="breadcrumbbar">
        <InvestmentOpportunitySection
          title="Access to"
          subTitle="Geological Data"
          avatar={Map}
          description="The geological data of Pakistan provide reports and maps of the geological form surface & subsurface distribution of rocks and minerals which are present in specific regions. This data is essentials for mineral exploration, civil engineering works, soil surveys and various conservation projects. This data provides geological mapping of Pakistan’s minerals that will in turn help increase the efficacy & ease of mineral exploration & mining."
        />
      </div>
    </Container>
  );
}

export default ATGDBusiness;

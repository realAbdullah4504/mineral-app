import React from "react";
import GelogicalMapbg from "assets/images/geologicalMapbg.png";
import GelogicalMapDarkbg from "assets/images/geologicalMapbg1.png";
import GelogicalMapLightbg from "assets/images/geologicalMapbg2.png";
import IntroContainer from "components/IntroContainer";
import { Container } from "components/UI";
import { useState, useEffects } from "react";
import BreadCrumbs from "components/Breadcrumbs";
import GeologicalData from "components/GeologicalData";
function GeologicalMap() {
  const [state, setstate] = useState("Geological Map");

  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/business-investment", label: "Business & Investment" },
    { path: "#", label: "Fiscal Incentives" },
  ];

  const geologicalSubHeadings = {
    "Geological Map": {
      img: GelogicalMapbg,
      content: (
        <div className="geological-map-content">
          <p>
            Geological maps provide information about the distribution, composition, & structure of rocks and minerals
            in an area, essential for identifying potential mineral deposits, understanding geological processes, &
            assessing the feasibility of resource extraction in Pakistan.
          </p>
          <br></br>
          <p>
            Geological maps provide a bird’s eye view of the surface (and subsurface) distribution of various types of
            rocks & economic minerals that are found in a particu­lar region. These maps are essential for all
            geological works including, mineral exploration, civil engineering, soil surveys, land use & soil
            conservation projects.
          </p>
          <br></br>
          <p>
            The Geological Survey of Pakistan (GSP) is primarily responsible for collection and dissemination of
            geological information about the country so that the earth’s resources could be best exploited and utilized.
            The information is compiled and disseminated in the form of reports and maps.
          </p>
        </div>
      ),
    },
    "Geochemical Map": {
      img: GelogicalMapbg,
      content: (
        <div className="geological-map-content">
          <p>
            Geological maps provide information about the distribution, composition, & structure of rocks and minerals
            in an area, essential for identifying potential mineral deposits, understanding geological processes, &
            assessing the feasibility of resource extraction in Pakistan.
          </p>
          <br></br>
          <p>
            Geological maps provide a bird’s eye view of the surface (and subsurface) distribution of various types of
            rocks & economic minerals that are found in a particu­lar region. These maps are essential for all
            geological works including, mineral exploration, civil engineering, soil surveys, land use & soil
            conservation projects.
          </p>
          <br></br>
          <p>
            The Geological Survey of Pakistan (GSP) is primarily responsible for collection and dissemination of
            geological information about the country so that the earth’s resources could be best exploited and utilized.
            The information is compiled and disseminated in the form of reports and maps.
          </p>
        </div>
      ),
    },
    "Geophysical Map": {
      img: GelogicalMapbg,
      content: (
        <div className="geological-map-content">
          <p>
            Geological maps provide information about the distribution, composition, & structure of rocks and minerals
            in an area, essential for identifying potential mineral deposits, understanding geological processes, &
            assessing the feasibility of resource extraction in Pakistan.
          </p>
          <br></br>
          <p>
            Geological maps provide a bird’s eye view of the surface (and subsurface) distribution of various types of
            rocks & economic minerals that are found in a particu­lar region. These maps are essential for all
            geological works including, mineral exploration, civil engineering, soil surveys, land use & soil
            conservation projects.
          </p>
          <br></br>
          <p>
            The Geological Survey of Pakistan (GSP) is primarily responsible for collection and dissemination of
            geological information about the country so that the earth’s resources could be best exploited and utilized.
            The information is compiled and disseminated in the form of reports and maps.
          </p>
        </div>
      ),
    },
    "Aerial & Imagery": {
      img: GelogicalMapbg,
      content: (
        <div className="geological-map-content">
          <p>
            Geological maps provide information about the distribution, composition, & structure of rocks and minerals
            in an area, essential for identifying potential mineral deposits, understanding geological processes, &
            assessing the feasibility of resource extraction in Pakistan.
          </p>
          <br></br>
          <p>
            Geological maps provide a bird’s eye view of the surface (and subsurface) distribution of various types of
            rocks & economic minerals that are found in a particu­lar region. These maps are essential for all
            geological works including, mineral exploration, civil engineering, soil surveys, land use & soil
            conservation projects.
          </p>
          <br></br>
          <p>
            The Geological Survey of Pakistan (GSP) is primarily responsible for collection and dissemination of
            geological information about the country so that the earth’s resources could be best exploited and utilized.
            The information is compiled and disseminated in the form of reports and maps.
          </p>
        </div>
      ),
    },
    Topography: {
      img: GelogicalMapbg,
      content: (
        <div className="geological-map-content">
          <p>
            Geological maps provide information about the distribution, composition, & structure of rocks and minerals
            in an area, essential for identifying potential mineral deposits, understanding geological processes, &
            assessing the feasibility of resource extraction in Pakistan.
          </p>
          <br></br>
          <p>
            Geological maps provide a bird’s eye view of the surface (and subsurface) distribution of various types of
            rocks & economic minerals that are found in a particu­lar region. These maps are essential for all
            geological works including, mineral exploration, civil engineering, soil surveys, land use & soil
            conservation projects.
          </p>
          <br></br>
          <p>
            The Geological Survey of Pakistan (GSP) is primarily responsible for collection and dissemination of
            geological information about the country so that the earth’s resources could be best exploited and utilized.
            The information is compiled and disseminated in the form of reports and maps.
          </p>
        </div>
      ),
    },
  };

  const handleTab = (item) => {
    setstate(item);
  };
  return (
    <div>
      <Container classes="mt-8 w-[90%]">
        <div className="business-investment-container">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <div className="geological-map-title">Geological Data</div>
          <div className="geological-map-subheading">
            {Object.entries(geologicalSubHeadings).map(([title, item], index) => (
              <div
                key={index}
                className="geological-map-tab"
                style={{
                  backgroundImage: `url(${title === state ? GelogicalMapDarkbg : GelogicalMapLightbg})`,
                }}
                onClick={() => handleTab(title)}
              >
                <h3>{title}</h3>
              </div>
            ))}
          </div>
          <GeologicalData
            title={state}
            content={geologicalSubHeadings[state]["content"]}
            GelogicalMapbg={geologicalSubHeadings[state]["img"]}
          ></GeologicalData>
        </div>
      </Container>
    </div>
  );
}

export default GeologicalMap;

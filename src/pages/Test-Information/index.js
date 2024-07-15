import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

const TestInformation = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Services and Support" },
    { path: "/mineral-testing-labs", label: "Minerals Testing Labs" },
    { path: "/test-information", label: "Test Information" },
  ];
  return (
    <div className="mt-[3.4rem]">
      <Container>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-col max-w-[70rem]">
          <div className="row text-[64px] font-semibold">Test Information</div>
          <div className="row text-lg text-[#40384F]">
            The Geoscience Advance Research Laboratories (GARL) conducts
            research on geological phenomena, develops new techniques for
            mineral exploration, and provides training programs for
            geoscientists and engineers. Through collaborations with national
            and international organizations, GARL undertakes various research
            projects, contributing to the sustainable development of Pakistan's
            mineral resources by providing accurate geological data to support
            the mining industry.
          </div>
          <div className="row text-lg text-[#40384F]">
            GARL is equipped with state-of-the-art equipment such as X-ray
            Diffraction (XRD), X-ray Fluorescence (XRF), Scanning Electron
            Microscope (SEM), and Inductively Coupled Plasma Mass Spectrometry
            (ICP-MS), enabling detailed chemical and physical analysis.
          </div>
        </div>
        <div className="overflow-x-scroll mt-[2.5rem]">
          <table className="min-w-full bg-[#009969] bg-opacity-5 border-none font-semibold text-2xl text-center mb-5">
            <tbody>
              <tr>
                <td width={157} height={70} className="border-2 border-white">
                  Test Category
                </td>
                <td width={514} className="border-2 border-white">
                  Labaratory
                </td>
                <td width={541} className="border-2 border-white">
                  Related Tests
                </td>
              </tr>
            </tbody>
          </table>
          <table className="min-w-full bg-white border-[2px] border-white">
            <tbody>
              <tr>
                <td
                  width={157}
                  rowSpan="4"
                  className="px-2.5 py-4 border-[2px] border-white bg-[#009969] font-semibold text-white text-xl text-center"
                >
                  Chemical Analysis
                </td>
                <td
                  width={514}
                  className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white"
                >
                  Wave Dispersive X-Ray Fluorescence Spectrometer (WD-XRF Lab)
                </td>
                <td
                  width={541}
                  className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]"
                >
                  Complete Element Analysis (Rs.8,000) (Major and Trace
                  Elements)
                </td>
              </tr>
              <tr>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white">
                  Wave Dispersive X-Ray Fluorescence Spectrometer (WD-XRF Lab)
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]">
                  Complete Element Analysis (Rs.8,000) (Major and Trace
                  Elements)
                </td>
              </tr>
              <tr>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white">
                  Inductively Coupled Plasma Mass Spectrometry Laboratory
                  (ICP-MS Lab)
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]">
                  Trace Element Analysis (Rs.15,000) Parts per million (ppm) and
                  Parts per billion (ppb) level concentrations
                </td>
              </tr>
              <tr>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white">
                  Atomic Absorption Spectroscopy Laboratory (AAS Lab)
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]">
                  Single Element Analysis (Rs.2,500/element) Accessory and Trace
                  Elements
                </td>
              </tr>
              <tr>
                <td
                  rowSpan="1"
                  className="px-2.5 py-4 border-[2px] border-white bg-[#009969] font-semibold text-white text-xl text-center"
                >
                  Textural and Compositional analyses
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white">
                  Scanning Electron Microscope Laboratory (SEM Lab)
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]">
                  <ul className="list-disc pl-5">
                    <li>High Resolution Scanning</li>
                    <li>
                      Back Scattered Electron Image (BSE) Secondary Electron
                      Image (SEI)
                    </li>
                    <li>
                      Energy Dispersive Spectroscopy (EDS Analysis; major
                      elements only)
                    </li>
                    <li>Cathodoluminescence Spectroscopy (CL analysis)</li>
                    <li>Complete Package Rs.12,000 per sample</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td
                  rowSpan="3"
                  className="px-2.5 py-4 border-[2px] border-white bg-[#009969] font-semibold text-white text-xl text-center"
                >
                  Mineral Identification
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white">
                  X-Ray Diffractometer Laboratory (XRD Lab)
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]">
                  Detailed Mineralogy of Clay and Non-clay minerals through
                  X-Ray Diffraction (Rs.7,000)
                </td>
              </tr>
              <tr>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white">
                  Gemology Laboratory
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]">
                  <ul className="list-disc pl-5">
                    <li>
                      Gemstone/Mineral identification through following
                      parameters;
                    </li>
                    <li>Refractive Index (Rs.1,000)</li>
                    <li>Hardness (Moh’s Hardness Scale) (Rs.1,000)</li>
                    <li>Specific Gravity (by immersion) (Rs.2,000)</li>
                    <li>Absorption Spectrum (Rs.1,000)</li>
                    <li>
                      UV Fluorescence (for fluorescent materials) (Rs.1,000)
                    </li>
                    <li>Gemstone Quality</li>
                    <li>Inclusion Study (Rs.2,500)</li>
                    <li>
                      Differentiation between Natural and synthetic Materials
                      (Rs.2,500)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white">
                  Optical Microscopy Laboratory (Petrography Lab)
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]">
                  <ul className="list-disc pl-5">
                    <li>Petrography</li>
                    <li>
                      Thin section Study (Transmitted Light Microscopy)
                      (Rs.20,000)
                    </li>
                    <li>
                      Ore Block Study (Reflected Light Microscopy) (Rs.10,000)
                    </li>
                    <li>Fluid Inclusion Study (Rs.20,000)</li>
                    <li>Photomicrographs (Rs.10,000/photomicrograph)</li>
                    <li>Stereoscopic Analysis</li>
                    <li>
                      Stream Sediments and/or Pan Concentrates study (Rs.10,000)
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-scroll mt-[2.5rem] mb-[66px]">
          <table className="min-w-full bg-[#009969] bg-opacity-5 border-none font-semibold text-2xl text-center mb-5">
            <tbody>
              <tr>
                <td width={157} height={70} className="border-2 border-white">
                  Test Category
                </td>
                <td width={514} className="border-2 border-white">
                  Labaratory
                </td>
                <td width={541} className="border-2 border-white">
                  Related Tests
                </td>
              </tr>
            </tbody>
          </table>

          <table className="min-w-full bg-white border-[2px] border-white">
            <tbody>
              <tr>
                <td
                  width={157}
                  rowSpan="4"
                  className="px-2.5 py-4 border-[2px] border-white bg-[#009969] font-semibold text-white text-xl text-center"
                >
                  Mineral Identification through Thermal Stability Range
                </td>
                <td
                  width={514}
                  className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white"
                >
                  Differential Thermal Analyzer/Thermo-Gravimetric Analyzer
                  (DTA/TGA Lab)
                </td>
                <td
                  width={541}
                  className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]"
                >
                  Thermal Stability of Materials Differential Thermal
                  Analysis/Thermo-gravimetric Analysis (Rs.6,000)
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td
                  rowSpan="2"
                  className="px-2.5 py-4 border-[2px] border-white bg-[#009969] font-semibold text-white text-xl text-center"
                >
                  Sample Preparation
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white">
                  Rock Cutting and Thin Section Preparation Laboratory
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]">
                  Sample Preparation for Petrographic and/or SEM Analyses
                  <ul className="list-disc pl-5">
                    <li>Rock/Mineral Thin section (Rs.2000)</li>
                    <li>Polished Thin Section (Rs.2,500)</li>
                    <li>Doubly Polished Thin Section (Rs.3,000)</li>
                    <li>Polished Ore Blocks (Rs.2,000)</li>
                    <li>Grain Mounts (Rs.2,000)</li>
                    <li>Polished Grain Mounts (Rs.2,000)</li>
                    <li>Mineral Staining in Thin Section (Rs.500)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-50 text-base font-semibold text-white">
                  Crushing and Pulverizing Laboratory
                </td>
                <td className="px-2.5 py-4 border-[2px] border-white bg-[#009969] bg-opacity-25 font-normal text-base text-[#003826]">
                  Sample Preparation for Chemical Analyses
                  <ul className="list-disc pl-5">
                    <li>
                      Pulverization of materials to required mesh sizes (up to
                      150 micron) (Rs.1,000 per Kg crushing and pulverization of
                      100 gram representative fraction)
                    </li>
                    <li>
                      Splitting of Representative Fraction from sample through
                      Riffle Splitter (Free of Cost)
                    </li>
                    <li>Sieve Analysis (Rs.2,000) </li>
                  </ul>
                  Mineral Separation
                  <ul className="list-disc pl-5">
                    <li>Static Heavy-liquid Separation (Rs.2,000)</li>
                    <li>Tetrabromoethane (max. sp. gr. 2.96)</li>
                    <li>Methylene iodide (max. sp. gr. 3.32)</li>
                    <li>Centrifugal Heavy-Liquid Separation (Rs.2,000)</li>
                    <li>Tetrabromoethane (max. sp. gr. 2.96)</li>
                    <li>Methylene iodide (max. sp. gr. 3.32)</li>
                    <li>Magnetic Separation (Rs.2,000)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default TestInformation;

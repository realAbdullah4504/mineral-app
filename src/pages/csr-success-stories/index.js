import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import saindak from "assets/images/saindak.png";
import duddar from "assets/images/duddar.png";
import thar1 from "assets/images/thar1.png";
import thar2 from "assets/images/thar2.png";
import boya from "assets/images/boya.png";
import reko from "assets/images/reko.png";

const CsrSuccessStories = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "csr", label: "CSR" },
    { path: "csr-success-stories", label: "Success Stories" },
  ];
  return (
    <Container>
      <div className="flex flex-col">
        <div className="flex mb-[62px] mt-[41px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="flex font-semibold text-[64px] mb-[30px]">
          Success <span className="text-[#26AF5F] ml-4">Stories</span>
        </div>
        <div className="flex justify-between mb-[60px]">
          <div className="flex flex-col font-semibold text-[64px] mb-[40px] max-w-[690px]">
            <div className="flex">
              <span className="text-[#27AE60] mr-4">SAINDAK</span> COPPER-
            </div>
            <div className="flex">GOLD PROJECT</div>

            <div className="flex text-lg font-normal mt-[40px]">
              The Saindak Copper-Gold project is located at a distance of 35 km
              from Pakistan's border town Taftan and 325 km from the city of
              Dalbandin in Chaghai District, Balochistan. Saindak project was
              the first metallic mineral project in the country. Saindak Metals
              Limited signed an agreement in 1990 with M/S China Metallurgical
              Construction Corporation (MCC), China for construction of Saindak
              Copper Gold on turnkey basis.
            </div>
            <div className="flex text-lg font-normal ">
              <ul className="list-disc pl-6">
                <li>Pakistan’s first metal mineral project </li>
                <li>
                  Developed by Government of Pakistan with total cost of PKR 29
                  billion
                </li>
                <li>4.25 million tons of ore extracted per annum </li>
                <li>4.15 million tons of ore treated per annum </li>
                <li>20,000 tons of blister copper obtained per annum </li>
                <li>
                  90 million tons of copper ore mined from South and North Ore
                  bodies
                </li>
                <li>
                  Produced 1.40 million tons of copper concentrates since
                  inception
                </li>
                <li>Direct Employment: 1,800</li>
                <li>
                  Exported to many countries including China, Korea, Japan,
                  Poland
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={saindak} alt="Saindak Mine" />
          </div>
        </div>
        <div className="flex justify-between mb-[60px]">
          <div className="flex flex-col font-semibold text-[64px] mb-[40px] max-w-[690px]">
            <div className="flex">
              <span className="text-[#27AE60] mr-4">DUDDAR</span> LEAD-ZINC
            </div>
            <div className="flex">COPPER PROJECT</div>

            <div className="flex text-lg font-normal mt-[40px]">
              Duddar lead-zinc project is located in Duddar, District Lasbela in
              Balochistan. Pakistan Mineral Development Corporation (PMDC)
              uncovered the potential of millions of tons of zinc and lead ore
              in Duddar area of Khuzdar District of Balochistan. The project has
              been developed by the MCC Huaye Duddar Mining Company of China and
              started commercial production in 2015
            </div>
            <div className="flex text-lg font-normal ">
              <ul className="list-disc pl-6">
                <li>First underground metal mining project in Pakistan </li>
                <li>
                  Developed by MCC Huaye Duddar Mining Company (Pvt) Ltd with
                  $110 million
                </li>
                <li>Around $100 million annual earnings</li>
                <li>Ore mining capacity: 500,000 tons per year </li>
                <li>Lead concentrates: 20,000 tons </li>
                <li>Zinc concentrates: 80,000 tons</li>
                <li>Direct Employment: 1000 people</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={duddar} alt="duddar Mine" />
          </div>
        </div>
        <div className="flex justify-between mb-[60px]">
          <div className="flex flex-col font-semibold text-[64px] mb-[40px] max-w-[690px]">
            <div className="flex">
              SINO SINDH<span className="text-[#27AE60] ml-4">THAR</span>
            </div>
            <div className="flex">COAL BLOCK-I</div>

            <div className="flex text-lg font-normal mt-[40px]">
              Sino-Sindh Resources Limited, China holds a 30-year mining lease
              for coal mining at Thar coal Block-II. This Block holds lignite
              coal resources of approximately 3.5 billion tons suitable for
              power generation. The company has made an investment of USD 1
              billion to develop a mine of 7.8 million tons with an integrated
              power plant of 1,320 MW. Commercial production and power
              generation has been started in the beginning of the current year.
            </div>
            <div className="flex text-lg font-normal ">
              <ul className="list-disc pl-6">
                <li>40 billion cubic feet overburden removed </li>
                <li>3.25 million tonnes coal extracted till date</li>
                <li>2804 GWH electricity generated </li>
                <li>
                  Total investment of USD1,000 million for coal mining & power
                  generation{" "}
                </li>
                <li>Coal Mine capacity 7.8 million tons per annum </li>
                <li>Power generation 1,320 MW (2x660MW) </li>
                <li>Forex saving around USD 170 million since inception</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={thar1} alt="duddar Mine" />
          </div>
        </div>
        <div className="flex justify-between mb-[60px]">
          <div className="flex flex-col font-semibold text-[64px] mb-[40px] max-w-[690px]">
            <div className="flex">
              SINDH ENGRO<span className="text-[#27AE60] ml-4">THAR</span>
            </div>
            <div className="flex">BLOCK-II</div>

            <div className="flex text-lg font-normal mt-[40px]">
              Sindh Engro Coal Mining Company (SECMC) is Pakistan's leading coal
              producer operating Pakistan's first open-pit lignite mine located
              in Thar coalfield Block-II in Tharparker District. The company is
              a joint venture between the Government of Sindh and local
              conglomerate Engro Corporation. The company is producing 7.6
              million tons of lignite to supply coal to four power generation
              plants of 330 MW each. Mine expansion at a cumulative capacity of
              11.2 million tons per annum is underway
            </div>
            <div className="flex text-lg font-normal ">
              <ul className="list-disc pl-6">
                <li>
                  Pakistan’s first large-scale open-pit coal mining and power
                  integrated project{" "}
                </li>
                <li>Mining lease over an area of 95.50km²</li>
                <li>Phase I: 3.8 million tons per annum (completed) </li>
                <li>Phase II: 7.6 million tons per annum (completed)</li>
                <li>
                  Phase III: 12.2 million tons (under construction completion
                  expected by 2024)
                </li>
                <li>
                  Supplying coal to mine mouth power plants of 1320 MW (4x330
                  MW)
                </li>
                <li>Forex saving ~$400 million per year </li>
                <li>Generated direct employment of 5,000</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={thar2} alt="duddar Mine" />
          </div>
        </div>
        <div className="flex justify-between mb-[60px]">
          <div className="flex flex-col font-semibold text-[64px] mb-[40px] max-w-[690px]">
            <div className="flex">
              <span className="text-[#27AE60] mr-4">BOYA</span> MUHAMMAD
            </div>
            <div className="flex">KHEL</div>

            <div className="flex text-lg font-normal mt-[40px]">
              Boya, Waziristan copper project is a signature project developed
              through indigenous resources. This is the second copper project
              after Saindak located at a distance of approximately 30 km from
              Miranshah tehsil. Frontier Works Organization through its Special
              Purpose Vehicle (SPV), Degan Exploration Works (DEW) has initiated
              the exploration and mining operations in 2016.
            </div>
            <div className="flex text-lg font-normal ">
              <ul className="list-disc pl-6">
                <li>
                  After Saindak, Boya Project is the second copper mining and
                  beneficiation project in Pakistan constructed with total
                  investment of PKR4,000 million{" "}
                </li>
                <li>Approx. 2.6 million tons of waste has been removed </li>
                <li>Produced 1 million tons of ore so far </li>
                <li>
                  copper beneficiation plant has the capacity to process 1,500
                  tons per day
                </li>
                <li>15,000 tons of copper concentrate produced</li>
                <li>Exports revenue of USD 20 million</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={boya} alt="Boya Mine" />
          </div>
        </div>
        <div className="flex justify-between mb-[60px]">
          <div className="flex flex-col font-semibold text-[64px] mb-[40px] max-w-[690px]">
            <div className="flex">
              <span className="text-[#27AE60] mr-4">REKO</span> DIQ COPPER
            </div>
            <div className="flex">PROJECT</div>

            <div className="flex text-lg font-normal mt-[40px]">
              Reko Diq Copper-Gold Project is a one of the largest copper-gold
              projects situated in the District Chagai, Balochistan. The project
              is being developed by the Reko-Diq Mining Company, a joint venture
              of the Barrick Gold 50%, Government of Pakistan through its State
              Owned Enterprises (OGDCL, GHPL, PPL) 25%, 15% by the Province of
              Balochistan through its entity Balochistan Mineral Resources
              Limited. The copper resources at Reko Diq have been estimated to
              5.9 billion tons with expected life of at least 40 years. The
              company is updating and expanding feasibility study and is
              expected to be completed by 2024 with target production in 2028.
            </div>
          </div>
          <div className="flex flex-col">
            <img src={boya} alt="Boya Mine" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CsrSuccessStories;

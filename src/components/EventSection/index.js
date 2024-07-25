import { Container, SectionTitle } from "components/UI";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import arrowRight from "../../assets/images/arrowRight.png";

export const NewsAndEvent = () => {
  return (
    <Container classes="px-[124.56px] mb-[70px]">
      <SectionTitle heading="News and Events" />
      <div className="w-full flex gap-4">
        <Link to="https://www.arabnews.pk/node/2511931/pakistan" target="_blank" className="bg-pakistan-image bg-auto bg-no-repeat text-white w-[754px] rounded-md  flex justify-center items-end min-h-[659.78px] gap-[5.77px]">
          <div className="pb-8">
            <div className="font-semibold text-[40px] leading-[45px] w-[600px] uppercase ">
            PM invites Chinese firm to invest in Pakistan ...
            </div>
            <div className="">May 17, 2024</div>
          </div>
        </Link>
        <div className="h-full ">
          <Link to="https://www.app.com.pk/national/pm-for-steps-to-grant-industrial-status-to-gems-precious-stones-sector/" target="_blank" className=" bg-china-image bg-cover bg-no-repeat rounded-md mb-[13.5px]  flex items-end w-[431px]  h-[211px]   ">
            <div className="w-[372px] h-full flex items-end relative m-auto text-white">
              <div className="mb-4">
                <div className="font-bold leading-[30px] text-[24px]   flex justify-center line-clamp-1 ">
                PM for steps to grant industrial status to gems, precious stones sector
                </div>
                <div className="text-[11px] flex gap-2 mt-2 leading-[13px]">
                  <span>READ MORE</span>{" "}
                  <img src={arrowRight} width={"12.67px"} height={"12.67px"} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="https://inp.net.pk/news-detail/pak-china/pakistan-eyes-chinese-collaboration-to-revitalize-gemstone-sector" target="_blank" className=" bg-rectangle-image bg-cover bg-no-repeat rounded-md mb-[13.5px]  flex items-end w-[431px]  h-[211px]   ">
            <div className="w-[372px] h-full flex items-end relative m-auto text-white">
              <div className="mb-4">
                <div className="font-bold leading-[30px] text-[24px]   flex justify-center   ">
                  Pakistan eyes China Collaboration to revitalize Gemstone Sector
                </div>
                <div className="text-[11px] flex gap-2 mt-2 leading-[13px]">
                  <span>READ MORE</span>{" "}
                  <img src={arrowRight} width={"12.67px"} height={"12.67px"} />
                </div>
              </div>
            </div>
          </Link>
          <Link to="https://www.bolnews.com/business/2024/06/ceo-asiapak-daewoo-express-shaheryar-chishty-signs-mous-with-chinese-firms-on-thar-coal-gasification-electric-bus-manufacturing/" target="_blank" className=" bg-president-image bg-cover bg-no-repeat rounded-md  flex items-end w-[431px]  h-[211px]   ">
            <div className="w-[372px] h-full flex items-end relative m-auto text-white">
              <div className="mb-4">
                <div className="font-bold leading-[30px] text-[24px]   flex justify-center   ">
                DAEWOO Express signs MOUs with Chinese firms on Thar Coal Gasification 
                </div>
                <div className="text-[11px] flex gap-2 mt-2 leading-[13px]">
                  <span>READ MORE</span>{" "}
                  <img src={arrowRight} width={"12.67px"} height={"12.67px"} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

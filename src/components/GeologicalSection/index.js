import { Card } from "./Card"
import Arrow11 from "../../assets/images/Arrow11.png"


/* Pakistan’s Geological Significance */

export const GeologicalSection = () => {
    return (
        <div className="bg-geological-section bg-cover w-full min-h-[754.25px] bg-no-repeat text-white flex items-center box-border justify-evenly">
            <div>
                <div className="w-[376px] mb-[22px]">
                    <p className="font-roboto-condensed font-[700] text-[35px] leading-[43.6px]">Pakistan’s Geological Significance</p><br />
                    <p className="font-roboto-condensed font-[400] text-[18px] leading-[22.28px]">Pakistan’s proximity to marine sedimentary deposits influences the availability of various minerals. Salt and gypsum, found in various parts of the country are the result of the presence of ancient seas in the region.</p>
                </div>

                <div className="border border-white rounded-[34.06px] py-[14px] w-[125.94px] flex items-center justify-center gap-[6.24px]">
                    <span className="font-[400] text-[14.26px] leading-[15.54px]">Explore</span> <img src={Arrow11} className="mr-2" alt="Arrow" />
                </div>
            </div>
            <div className="flex gap-[33px]">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
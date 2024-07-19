import { Card } from "./Card";
import Arrow from "../../assets/images/Arrow.png";
import { Container } from "components/UI";

/* Pakistan’s Geological Significance */

const geologicalData = [
  {
    title: "Mineralization Zones",
    description:
      "Pakistan’s geological formations, shaped by its location on tectonic plates account for the presence of minerals like Emerald in Swat Valley, Rubies in Hunza Valley, gold & copper in Balochistan & coal in Thar.",
    buttonText: "Potohar Plateau, Punjab",
    image: "bg-san-andreas-fault",
  },
  {
    title: "Mountainous Terrain",
    description:
      "The mountainous terrain of Pakistan hosts a wealth of minerals including marble, limestone, gypsum, chromite, rare gemstones & granite. They are abundant in regions of Swat, Hunza, Himalayan & Karakoram Range.",
    buttonText: "Rakaposhi Mountain GB",
    image: "bg-pexels-jack-redgate",
  },
  {
    title: "Deserts & Fertile Plains",
    description:
      " The deserts & fertile plains of Pakistan are rich in minerals essentials of salt in the Khewra mines, coal reserves in the desert of Thar. Fertile plains of Sindh & Punjab boast clay, silica sand and gold",
    buttonText: "Thar Desert, Tharparkar",
    image: "bg-pexels-dario-fernandez-ruz",
  },
];

export const GeologicalSection = () => {
  return (
    <div className="bg-geological-section bg-cover bg-no-repeat text-white  ">
      <Container classes="min-h-[723px] w-full flex justify-evenly  items-center">
        <div className="max-w-[376px]">
          <div className="font-roboto-condensed font-[700] text-[35px] leading-[43.6px]">
            Pakistan’s Geological Significance
          </div>
          <div className="font-roboto-condensed font-[400] text-[18px] leading-[22.28px] my-[22px]">
            Pakistan’s proximity to marine sedimentary deposits influences the
            availability of various minerals. Salt and gypsum, found in various
            parts of the country are the result of the presence of ancient seas
            in the region.
          </div>

          <div className="border border-white rounded-[34.06px] py-[14px] w-[125.94px] flex items-center justify-center gap-[6.24px]">
            <span className="font-[400] text-[14.26px] leading-[15.54px]">
              Explore
            </span>{" "}
            <img src={Arrow} className="mr-2" alt="Arrow" />
          </div>
        </div>
        <div className="flex gap-[33px]">
          {geologicalData?.map(
            ({ title, description, buttonText, image }, index) => (
              <Card
                key={index}
                title={title}
                description={description}
                buttonText={buttonText}
                image={image}
              />
            )
          )}
        </div>
      </Container>
    </div>
  );
};

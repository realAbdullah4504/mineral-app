import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

const FiscalTaxRegime = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/fiscal-regime", label: "Fiscal Regime" },
    { path: "/fiscal-regime-tax", label: "Tax Structure" },
  ];
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex mt-[52px] mb-[25px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="flex mb-[30px]">
          <div className="title font-ibm-plex-sans flex">
            <span className="">
              Tax
              <div className="py-[3px] rounded bg-[#009969] w-[120px]"></div>
            </span>
            Structure
          </div>
        </div>
        <div className="flex font-helvetica text-[22px] mb-[46px]">
          Mining fiscal regimes are almost exclusively a mix of income-based
          taxes and royalties. Whereas royalties become payable as soon as
          production starts, income taxes are only payable once the company
          begins to realise net profits.{" "}
        </div>
        <div className="flex text-white bg-[#009969] text-[36px] font-medium w-[270px] h-[64px] justify-center items-center font-ibm-plex-sans rounded-[8px] mb-[20px]">
          1. Income Tax
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          1.1 Rate of Corporate Tax
        </div>
        <div className="flex text-[22px] font-helvetica mb-[20px]">
          The Government embarked upon a progressive reduction in the effective
          rate of corporate tax. The applicable rate of tax as regulated under
          the Income Tax Ordinance, 2001, is 35% for companies.
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          1.2 Minimum Corporate Tax
        </div>
        <div className="flex text-[22px] font-helvetica mb-[20px]">
          A minimum amount of corporate tax is payable annually at the rate of
          1.0% of the declared turnover by resident companies. However, where
          the corporate tax payable exceeds this amount in any year, the minimum
          tax is not charged.
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          1.3 Exemption from taxation on refining or concentration of mineral
          deposits:
        </div>
        <div className="flex text-[22px] font-helvetica mb-[20px]">
          Exemption from taxation on profits from refining or concentrating
          mineral deposits is also allowed at the rate and for the period
          prescribed under tax laws.
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          1.4 Pre-commencement expenditure
        </div>
        <div className="flex text-[22px] font-helvetica mb-[20px]">
          Expenditure incurred before commencement of business including
          feasibility studies etc., is also allowed to be amortized on a
          straight line basis at the specified rates.
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          1.5 Development Expenditure Deduction and Loss Carry Forward
        </div>
        <div className="flex text-[22px] font-helvetica mb-[20px]">
          Expenditure incurred on exploration operations qualifies for immediate
          deduction in the determination of taxable income. Expenditure incurred
          for project development operations will be allowed deduction at a rate
          of 25% per annum, in line with international practice. However, the
          depletion allowance will be allowed as per provision of current tax
          laws.
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          1.6 Ring-Fencing
        </div>
        <div className="flex text-[22px] font-helvetica mb-[50px]">
          A mining company will be assessed for income tax on the entirety of
          its mining operations in Pakistan.
        </div>
        <div className="flex text-white bg-[#009969] text-[36px] font-medium w-[386px] h-[64px] justify-center items-center font-ibm-plex-sans rounded-[8px] mb-[20px]">
          2. Withholding Taxes
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          2.1 Dividends
        </div>
        <div className="flex text-[22px] font-helvetica mb-[20px]">
          Except where lower rates are specified in the Avoidance of Double
          Taxation Treaty with the country of the recipient, the withholding tax
          levied on dividends paid is 10%.
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          2.2 Non-Resident Contractors
        </div>
        <div className="flex text-[22px] font-helvetica mb-[20px]">
          The rate of withholding tax is 6% on payments made either in full or
          part to a non-resident on the execution of a contract or sub-contract
          under a construction, assembly or installation project in Pakistan,
          including a contract for the supply of supervisory activities in
          relation to such project. The tax collected shall be a final tax if
          the contractor furnishes on option under clause (4) of the Part-IV of
          the Second Schedule to the Income Tax Ordinance, 2001. 16
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          2.3 Interest
        </div>
        <div className="flex text-[22px] font-helvetica mb-[20px]">
          Interest paid to non-residents in respect of availed approved loans is
          exempt from withholding tax.
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          2.4 Royalty & Fee for Technical Services
        </div>
        <div className="flex text-[22px] font-helvetica mb-[30px]">
          Tax @ 15% shall be deducted from the gross amount paid to a
          non-resident person on account of royalty and fee for technical
          services.
        </div>
        <div className="flex text-white bg-[#009969] text-[36px] font-medium w-[280px] h-[64px] justify-center items-center font-ibm-plex-sans rounded-[8px] mb-[20px]">
          3. Other Taxes
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          3.1 Sales Tax
        </div>
        <div className="flex text-[22px] font-helvetica mb-[20px]">
          Mining companies shall be liable to pay general sales tax at the rate
          prescribed by the Government from time to time.
        </div>
        <div className="flex text-[23px] font-bold font-ibm-plex-sans mb-[12px]">
          3.2 Additional Profits Tax (APT)
        </div>
        <div className="flex text-[22px] font-helvetica mb-[48px]">
          An Additional Profits Tax is payable by large scale mining companies
          at agreed rates based on the economic projections as stipulated in the
          agreement with the Government. The APT will be determined based on a
          three-tier mechanism and will be payable only when the mining project
          achieves the agreed threshold level of profitability. The three-tier
          mechanism is summarized below:-
        </div>
        <div className="flex w-full justify-center mb-[150px]">
          <div className="flex flex-col mr-[12px]">
            <div className="flex text-[24px] bg-[#27AE60] text-white w-[438px] h-[64px] rounded-lg justify-center items-center mb-[8px]">
              Rate of Return (ROR) Threshold
            </div>
            <div className="flex justify-center items-center text-[24px] bg-[#F4FBF7] rounded-lg w-[438px] h-[56px] mb-[8px]">
              10%
            </div>
            <div className="flex justify-center items-center text-[24px] bg-[#F4FBF7] rounded-lg w-[438px] h-[56px] mb-[8px]">
              20%
            </div>
            <div className="flex justify-center items-center text-[24px] bg-[#F4FBF7] rounded-lg w-[438px] h-[56px] mb-[8px]">
              25%
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex text-[24px] bg-[#27AE60] text-white w-[438px] h-[64px] rounded-lg justify-center items-center mb-[8px]">
              Resource Rent Tax (RRT) Rate
            </div>
            <div className="flex justify-center items-center text-[24px] bg-[#F4FBF7] rounded-lg w-[438px] h-[56px] mb-[8px]">
              10%
            </div>
            <div className="flex justify-center items-center text-[24px] bg-[#F4FBF7] rounded-lg w-[438px] h-[56px] mb-[8px]">
              15%
            </div>
            <div className="flex justify-center items-center text-[24px] bg-[#F4FBF7] rounded-lg w-[438px] h-[56px] mb-[8px]">
              18%
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FiscalTaxRegime;

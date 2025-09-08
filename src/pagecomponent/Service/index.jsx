import BestDeserve from "@/component/Home/BestDeserve";
import LimitedSlots from "@/component/Home/LimitedSlots";
import VisitEyeCare from "@/component/Home/VisitEyeCare";
import ChooseLens from "@/component/Service/ChooseLens";
import EyeCare from "@/component/Service/EyeCare";
import ServiceBanner from "@/component/Service/serviceBanner";
import ServiceSpecialist from "@/component/Service/serviceSpecialist";
import SurgicalOptions from "@/component/Service/SurgicalOptions";
import WHyPeopleChoose from "@/component/Service/WhyPeopleChoose";
import Affecting from "@/component/Service/Affecting";
import CandidateSurgery from "@/component/Service/CandidateSurgery";
import ClearVision from "@/component/Service/ClearVision";
import Estimate from "@/component/Service/Estimate";
import Faq from "@/component/Service/Faq";
import SurgeryDay from "@/component/Service/SurgeyDay";
import { servicePageData } from "@/constant/Services";
import BestDeserveService from "@/component/Service/bestDeserveService";
import { limitedSlotsData } from "@/constant/Home/limitedSlot";
import { eyeCareData } from "@/constant/Home/visitEyeCare";
import { bestDeserveData } from "@/constant/Home/bestDeserve";
import Testimonal from "@/component/Home/Testimonal";
import { TestimonalData } from "@/constant/Home/testimonal";
import { consultationData } from "@/constant/Home/consultation";
import Consultation from "@/component/Home/Consultation";

const ServicePageComponent = () => {
  return (
    <>
      <ServiceBanner data={servicePageData?.bannerData} />

      <Affecting affect={servicePageData?.affecting} />

      <WHyPeopleChoose data={servicePageData?.whyPeopleChoose} />

      <ClearVision clearPathvisiondata={servicePageData?.clearPathVision} />

      <SurgicalOptions data={servicePageData?.surgicalOptions} />

      <ChooseLens data={servicePageData?.ChooseLens} />

      <SurgeryDay
        surgery_list={servicePageData?.surgeryDay?.step_by_step}
        do_list={servicePageData?.surgeryDay?.what_do}
        dont_do_list={servicePageData?.surgeryDay?.what_dont_do}
      />

      <CandidateSurgery
        surgerypoints={servicePageData?.candidateSurgery?.surgerylist}
      />

      <Estimate />

      <Faq faqlist={servicePageData?.faqs} />

      <ServiceSpecialist data={servicePageData?.serviceSpecialistData} />

      <EyeCare data={servicePageData?.eyeCare} />

      <BestDeserveService data={servicePageData?.clearVision} />

      <Testimonal testimonalData={TestimonalData} />

      <Consultation consultationData={consultationData} />

      <LimitedSlots limitedSlotsData={limitedSlotsData} />

      <VisitEyeCare eyeCareData={eyeCareData} />

      <BestDeserve bestDeserveData={bestDeserveData} />
    </>
  );
};

export default ServicePageComponent;

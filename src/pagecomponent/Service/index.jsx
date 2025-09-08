import BestDeserve from "@/component/Home/BestDeserve";
import LimitedSlots from "@/component/Home/LimitedSlots";
import VisitEyeCare from "@/component/Home/VisitEyeCare";
import ChooseLens from "@/component/Service/ChooseLens";
import EyeCare from "@/component/Service/EyeCare";
import ServiceBanner from "@/component/Service/serviceBanner";
import ServiceSpecialist from "@/component/Service/serviceSpecialist";
import SurgicalOptions from "@/component/Service/SurgicalOptions";
import WHyPeopleChoose from "@/component/Service/WhyPeopleChoose";
import { servicePageData } from "@/constant/Services";
import BestDeserveService from "@/component/Service/bestDeserveService";
import { limitedSlotsData } from "@/constant/Home/limitedSlot";
import { eyeCareData } from "@/constant/Home/visitEyeCare";
import { bestDeserveData } from "@/constant/Home/bestDeserve";

const ServicePageComponent = () => {
    return (
        <>
            <ServiceBanner data={servicePageData?.bannerData} />

            <WHyPeopleChoose data={servicePageData?.whyPeopleChoose} />
            <SurgicalOptions data={servicePageData?.surgicalOptions} />
            <ChooseLens data={servicePageData?.ChooseLens} />
            <ServiceSpecialist data={servicePageData?.serviceSpecialistData} />
            <EyeCare data={servicePageData?.eyeCare} />
            <BestDeserveService data={servicePageData?.clearVision} />

            <LimitedSlots limitedSlotsData={limitedSlotsData} />

            <VisitEyeCare eyeCareData={eyeCareData} />

            <BestDeserve bestDeserveData={bestDeserveData} />
        </>
    );
};

export default ServicePageComponent;

import { Carousel } from '@material-tailwind/react';
import imgHomeAdminDM from '../../assets/protfolio_img_AdmitHome_DM.png';
import imgAssignDM from '../../assets/protfolio_img_Assign_DM.png';
import imgReportsDM from '../../assets/protfolio_img_Reports_DM.png';
import imgAllEventsDM from '../../assets/protfolio_img_ALlEvent_DM.png';
import imgUserHomeDM from '../../assets/protfolio_img_UserHome_DM.png';
import imgCreateEventDM from '../../assets/protfolio_img_CreateEvent_DM.png';

function CarouselTransition() {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay="5000"
      transition={{ duration: 2 }}
      className="rounded-xl "
    >
      <div className="flex text-color-primary-variant flex-col items-center">
        <h3>Admin Home Page</h3>
        <img
          src={imgHomeAdminDM}
          alt="imgHomeAdminDM"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex text-color-primary-variant flex-col items-center">
        <h3>Assign Musician To Event</h3>
        <img
          src={imgAssignDM}
          alt="imgAssignDM"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex text-color-primary-variant flex-col items-center">
        <h3>Admin Reports Page</h3>
        <img
          src={imgReportsDM}
          alt="imgReportsDM"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex text-color-primary-variant flex-col items-center">
        <h3>All Events Page</h3>
        <img
          src={imgAllEventsDM}
          alt="imgAllEventsDM"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex text-color-primary-variant flex-col items-center">
        <h3>User Home Page</h3>
        <img
          src={imgUserHomeDM}
          alt="imgUserHomeDM"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex text-color-primary-variant flex-col items-center">
        <h3>Admin Home Page</h3>
        <img
          src={imgCreateEventDM}
          alt="imgUserHomeDM"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
}
export default CarouselTransition;

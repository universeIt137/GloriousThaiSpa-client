import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/adminSide/dashboard/Dashboard';
import GalleryPage from '../pages/clientSide/galleryPage/GalleryPage';
import MainLayoutTow from '../layoutTow/MainLayoutTow';
import HomePageTow from '../pages/clientSide/home-page-tow/HomePageTow';
import ServicePage from '../pages/clientSide/service-page/ServicePage';
import AboutTwoPage from '../pages/clientSide/about-two/AboutTwoPage';
import ContactUpdate from '../pages/clientSide/contact-update/ContactUpdate';
import UpdatePackages from '../pages/clientSide/update-packages/UpdatePackages';
import PackagesDetails from '../pages/clientSide/packages-details/PackagesDetails';
import Bookingfrom from '../pages/clientSide/booking-from/BookingFrom';
import WhyChooseUsCreate from '../pages/adminSide/why-choose-us/WhyChooseUsCreate';
import WhyChooseUsManage from '../pages/adminSide/why-choose-us/WhyChooseUsManage';
import WhyChooseUsUpdate from '../pages/adminSide/why-choose-us/WhyChooseUsUpdate';
import ManageContact from '../pages/adminSide/contact/ManageContact';
import CreateSliderPackage from '../pages/adminSide/packages-slider/CreateSliderPackage';
import ManageSliderPackage from '../pages/adminSide/packages-slider/ManageSliderPackage';
import UpdateSliderPackage from '../pages/adminSide/packages-slider/UpdateSliderPackage';
import CreateBanner from '../pages/adminSide/banner/CreateBanner';
import ManageBanner from '../pages/adminSide/banner/ManageBanner';
import BannerUpdate from '../pages/adminSide/banner/BannerUpdate';
import ManageTestimonial from '../pages/adminSide/testimonial/ManageTestimonial';
import ManageOfficeHour from '../pages/adminSide/office/ManageOfficeHour';
import ManagePhotoGallery from '../pages/adminSide/img-gallery/ManagePhotoGallery';
import AddPackagePage from '../pages/adminSide/packages/AddPackagePage';
import ManagePackagePage from '../pages/adminSide/packages/ManagePackagePage';
import UpdatePackagePage from '../pages/adminSide/packages/UpdatePackagePage';
import ManageBooking from '../pages/adminSide/booking/ManageBooking';
import HomePageContentForm from '../pages/adminSide/home-page-content/HomePageContentForm';
import RegistrationForm from '../pages/clientSide/login-register/RegisterFrom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutTow></MainLayoutTow>,
    children: [
      {
        path: "",
        element: <HomePageTow></HomePageTow>
      },
      {
        path: "services",
        element: <ServicePage></ServicePage>
      },
      {
        path: "about",
        element: <AboutTwoPage></AboutTwoPage>
      },
      {
        path: "contact",
        element: <ContactUpdate></ContactUpdate>
      },
      {
        path: "gallery",
        element: <GalleryPage></GalleryPage>
      },
      {
        path: "packages",
        element: <UpdatePackages></UpdatePackages>
      },
      {
        path: "package-details/:id",
        element: <PackagesDetails></PackagesDetails>
      },
      {
        path: "/book-now/:id",
        element: <Bookingfrom></Bookingfrom>
      },

    ]
  },

  {
    path: "registration",
    element: <RegistrationForm></RegistrationForm>
  },
  // {
  //   path: "/",
  //   element: <MainLayout></MainLayout>,
  //   children: [
  //     {
  //       path: "/",
  //       element: <HomePage></HomePage>
  //     },
  //     {
  //       path: "/packages",
  //       element: <Packages></Packages>
  //     },
  //     {
  //       path: "/package-details",
  //       element: <PackageDetails></PackageDetails>
  //     },
  //     {
  //       path: "/about",
  //       element: <AboutPage></AboutPage>
  //     },
  //     {
  //       path: "/contact",
  //       element: <ContactPage></ContactPage>
  //     },
  //     {
  //       path: "/gallery",
  //       element: <GalleryPage></GalleryPage>
  //     }
  //   ]
  // },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "add-package",
        element: <AddPackagePage></AddPackagePage>
      },
      {
        path: "manage-package",
        element: <ManagePackagePage></ManagePackagePage>
      },
      {
        path: "update-package/:id",
        element: <UpdatePackagePage></UpdatePackagePage>
      },
      {
        path: "manage-booking",
        element: <ManageBooking></ManageBooking>
      },
      {
        path: "manage-content",
        element: <HomePageContentForm></HomePageContentForm>
      },
      {
        path: "manage-gallery",
        element: <ManagePhotoGallery></ManagePhotoGallery>
      },
      {
        path: "manage-office-hour",
        element: <ManageOfficeHour></ManageOfficeHour>
      },
      {
        path: "manage-testimonial",
        element: <ManageTestimonial></ManageTestimonial>
      },
      // banner related route
      {
        path: "upload-banner",
        element: <CreateBanner></CreateBanner>
      },

      {
        path: "manage-banner",
        element: <ManageBanner></ManageBanner>
      },
      {
        path: "banner-update/:id",
        element: <BannerUpdate></BannerUpdate>
      },
      // packages slider routes
      {
        path: "upload-packages-slider",
        element: <CreateSliderPackage></CreateSliderPackage>
      },
      {
        path: "manage-packages-slider",
        element: <ManageSliderPackage></ManageSliderPackage>
      },
      {
        path: "update/:id",
        element: <UpdateSliderPackage></UpdateSliderPackage>
      },
      // contact related routes
      {
        path: "contact-list",
        element: <ManageContact></ManageContact>
      },
      // choose us related route
      {
        path: "choose-us-upload",
        element: <WhyChooseUsCreate></WhyChooseUsCreate>
      },
      {
        path: "choose-us-list",
        element: <WhyChooseUsManage></WhyChooseUsManage>
      },
      {
        path: "chooseUs-update/:id",
        element: <WhyChooseUsUpdate></WhyChooseUsUpdate>
      }

    ]
  }
]);



export default router;
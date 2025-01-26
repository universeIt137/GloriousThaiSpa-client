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
import LoginForm from '../pages/clientSide/login-register/LoginFrom';
import PrivateRoute from './PrivateRouter';

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
  {
    path: "login",
    element: <LoginForm></LoginForm>
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
        element: <PrivateRoute role={"admin"} ><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path: "add-package",
        element: <PrivateRoute role={"admin"} ><AddPackagePage></AddPackagePage></PrivateRoute>
      },
      {
        path: "manage-package",
        element: <PrivateRoute role={"admin"} ><ManagePackagePage></ManagePackagePage></PrivateRoute>
      },
      {
        path: "update-package/:id",
        element: <PrivateRoute role={"admin"} ><UpdatePackagePage></UpdatePackagePage></PrivateRoute>
      },
      {
        path: "manage-booking",
        element: <PrivateRoute role={"admin"} ><ManageBooking></ManageBooking></PrivateRoute>
      },
      {
        path: "manage-content",
        element: <PrivateRoute role={"admin"} ><HomePageContentForm></HomePageContentForm></PrivateRoute>
      },
      {
        path: "manage-gallery",
        element: <PrivateRoute role={"admin"} ><ManagePhotoGallery></ManagePhotoGallery></PrivateRoute>
      },
      {
        path: "manage-office-hour",
        element: <PrivateRoute role={"admin"} ><ManageOfficeHour></ManageOfficeHour></PrivateRoute>
      },
      {
        path: "manage-testimonial",
        element: <PrivateRoute role={"admin"} ><ManageTestimonial></ManageTestimonial></PrivateRoute>
      },
      // banner related route
      {
        path: "upload-banner",
        element: <PrivateRoute role={"admin"} ><CreateBanner></CreateBanner></PrivateRoute>
      },

      {
        path: "manage-banner",
        element: <PrivateRoute role={"admin"} ><ManageBanner></ManageBanner></PrivateRoute>
      },
      {
        path: "banner-update/:id",
        element: <PrivateRoute role={"admin"} ><BannerUpdate></BannerUpdate></PrivateRoute>
      },
      // packages slider routes
      {
        path: "upload-packages-slider",
        element: <PrivateRoute role={"admin"} ><CreateSliderPackage></CreateSliderPackage></PrivateRoute>
      },
      {
        path: "manage-packages-slider",
        element: <PrivateRoute role={"admin"} ><ManageSliderPackage></ManageSliderPackage></PrivateRoute>
      },
      {
        path: "update/:id",
        element: <PrivateRoute role={"admin"} ><UpdateSliderPackage></UpdateSliderPackage></PrivateRoute>
      },
      // contact related routes
      {
        path: "contact-list",
        element: <PrivateRoute role={"admin"} ><ManageContact></ManageContact></PrivateRoute>
      },
      // choose us related route
      {
        path: "choose-us-upload",
        element: <PrivateRoute role={"admin"} ><WhyChooseUsCreate></WhyChooseUsCreate></PrivateRoute>
      },
      {
        path: "choose-us-list",
        element: <PrivateRoute role={"admin"} ><WhyChooseUsManage></WhyChooseUsManage></PrivateRoute>
      },
      {
        path: "chooseUs-update/:id",
        element: <PrivateRoute role={"admin"} ><WhyChooseUsUpdate></WhyChooseUsUpdate></PrivateRoute>
      }

    ]
  }
]);



export default router;
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/adminSide/dashboard/Dashboard';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/clientSide/homePage/HomePage';
import AboutPage from '../pages/clientSide/aboutPage/AboutPage';
import ContactPage from '../pages/clientSide/contactPage/ContactPage';
import GalleryPage from '../pages/clientSide/galleryPage/GalleryPage';
import Packages from '../pages/clientSide/packagePage/Packages';
import PackageDetails from '../pages/clientSide/packagePage/PackageDetails';
import AddPackagePage from '../pages/adminSide/packageRelatedPages/AddPackagePage';
import MainLayoutTow from '../layoutTow/MainLayoutTow';
import HomePageTow from '../pages/clientSide/home-page-tow/HomePageTow';
import ServicePage from '../pages/clientSide/service-page/ServicePage';
import AboutTwoPage from '../pages/clientSide/about-two/AboutTwoPage';
import ContactTwo from '../pages/clientSide/home-page-tow/ContactTwo';
import ContactUpdate from '../pages/clientSide/contact-update/ContactUpdate';

const router = createBrowserRouter([
  {
    path: "/update",
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
      }
    ]
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/packages",
        element: <Packages></Packages>
      },
      {
        path: "/package-details",
        element: <PackageDetails></PackageDetails>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>
      }
    ]
  },
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
      }

    ]
  }
]);



export default router;
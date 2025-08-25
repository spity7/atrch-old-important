import "../public/scss/styles.scss";
import "photoswipe/dist/photoswipe.css";
import "react-modal-video/scss/modal-video.scss";
import "rc-slider/assets/index.css";
import WOW from "./utlis/wow";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages";
import HomePage2 from "./pages/homes/home-02";
import HomePage3 from "./pages/homes/home-03";
import HomePage4 from "./pages/homes/home-04";
import HomePage5 from "./pages/homes/home-05";
import HomePage6 from "./pages/homes/home-06";
import ProjectsPage from "./pages/projects/main-page";
import MilaOne from "./pages/projects/mila-one/main-page";
import MilaTwo from "./pages/projects/mila-two/main-page";
import MilaOneSingle from "./pages/projects/mila-one/single-page/main-page";
import MilaTwoSingle from "./pages/projects/mila-two/single-page/main-page";
import { useEffect } from "react";
import LoginModals from "./components/modals/LoginModals";
import Register from "./components/modals/Register";
import BackToTop from "./components/common/BackToTop";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import PropertyHalfmapGridPage from "./pages/properties/property-halfmap-grid";
import PropertyHalfmapListPage from "./pages/properties/property-halfmap-list";
import TopmapGridPage from "./pages/properties/topmap-grid";
import TopmapListPage from "./pages/properties/topmap-list";
import SidebarGridPage from "./pages/properties/sidebar-grid";
import SidebarListPage from "./pages/properties/sidebar-list";
import PropertyDetailsPageV1 from "./pages/property-details/property-details-v1";
import PropertyDetailsPageV2 from "./pages/property-details/property-details-v2";
import PropertyDetailsPageV3 from "./pages/property-details/property-details-v3";
import PropertyDetailsPageV4 from "./pages/property-details/property-details-v4";
import AboutUsPage from "./pages/other-pages/about-us";
import OurServicePage from "./pages/other-pages/our-service";
import PricingPage from "./pages/other-pages/pricing";
import ContactPage from "./pages/other-pages/contact";
import FaqPage from "./pages/other-pages/faq";
import PrivacyPolicyPage from "./pages/other-pages/privacy-policy";
import BlogPage from "./pages/blogs/blog";
import BlogGridPage from "./pages/blogs/blog-grid";
import BlogDetailsPage from "./pages/blogs/blog-detail";
import DashboardPage from "./pages/dashboard/dashboard";
import MyPropertyPage from "./pages/dashboard/my-property";
import PropertiesPage from "./pages/dashboard/my-properties";
import MessagePage from "./pages/dashboard/message";
import MyFavoritePage from "./pages/dashboard/my-favorites";
import ReviewPage from "./pages/dashboard/reviews";
import MyProfilePage from "./pages/dashboard/my-profile";
import AddPropertyPage from "./pages/dashboard/add-property";
import UpdatePropertyPage from "./pages/dashboard/update-property";
import { Modal } from "bootstrap";
import { GlobalProvider } from "./context/globalContext";
import AuthPage from "./pages/auth/AuthPage";
import CreatePropertyPage from "./pages/dashboard/create-property";

import "../public/css/styles.css";
import { useAtom } from "jotai";
import userAtom from "./atoms/userAtom";
import VerifyEmailCard from "./components/VerifyEmailCard";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  useEffect(() => {
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);

  const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/register") {
  //     const modalElement = document.getElementById("modalRegister");
  //     if (modalElement) {
  //       const modal = new Modal(modalElement);
  //       modal.show();
  //     }
  //   }
  // }, [location]);

  // useEffect(() => {
  //   if (location.pathname === "/login") {
  //     const modalElement = document.getElementById("modalLogin");
  //     if (modalElement) {
  //       const modal = new Modal(modalElement);
  //       modal.show();
  //     }
  //   }
  // }, [location]);

  // const [user] = useAtom(userAtom);

  // useEffect(() => {
  //   console.log("1", localStorage.getItem("signup-status"));
  //   console.log("2", localStorage.getItem("user-app"));
  //   if (user.role) {
  //     console.log("3", user);
  //   }
  // });

  return (
    <GlobalProvider>
      <div id="wrapper">
        <div id="pagee" className="clearfix">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home-02" element={<HomePage2 />} />

              <Route path="home-03" element={<HomePage3 />} />
              <Route path="home-04" element={<HomePage4 />} />
              <Route path="home-05" element={<HomePage5 />} />
              <Route path="home-06" element={<HomePage6 />} />

              <Route path="projects" element={<ProjectsPage />} />
              <Route path="mila-one" element={<MilaOne />} />
              <Route path="mila-two" element={<MilaTwo />} />
              <Route path="mila-one/single/:id" element={<MilaOneSingle />} />
              <Route path="mila-two/single/:id" element={<MilaTwoSingle />} />

              <Route path="gallery" element={<PropertyHalfmapGridPage />} />
              <Route
                path="property-halfmap-list"
                element={<PropertyHalfmapListPage />}
              />
              <Route path="topmap-grid" element={<TopmapGridPage />} />
              <Route path="topmap-list" element={<TopmapListPage />} />
              <Route path="sidebar-grid" element={<SidebarGridPage />} />
              <Route path="sidebar-list" element={<SidebarListPage />} />

              <Route
                path="property-details-v1/:id"
                element={<PropertyDetailsPageV1 />}
              />
              <Route
                path="property-details-v2"
                element={<PropertyDetailsPageV2 />}
              />
              <Route
                path="property-details-v3"
                element={<PropertyDetailsPageV3 />}
              />
              <Route
                path="property-details-v4"
                element={<PropertyDetailsPageV4 />}
              />

              <Route path="lifestyle" element={<AboutUsPage />} />
              <Route path="our-service" element={<OurServicePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

              <Route path="blog" element={<BlogPage />} />
              <Route path="blog-grid" element={<BlogGridPage />} />
              <Route path="blog-detail/:id" element={<BlogDetailsPage />} />

              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="my-property" element={<MyPropertyPage />} />
              <Route path="message" element={<MessagePage />} />
              <Route path="my-favorites" element={<MyFavoritePage />} />
              <Route path="reviews" element={<ReviewPage />} />
              <Route path="my-profile" element={<MyProfilePage />} />
              <Route path="add-property" element={<AddPropertyPage />} />

              <Route path="properties" element={<PropertiesPage />} />
              <Route
                path="update-property/:id"
                element={<UpdatePropertyPage />}
              />
              <Route path="create-property" element={<CreatePropertyPage />} />

              <Route path="/auth" element={<AuthPage />} />
              <Route path="/verify-email" element={<VerifyEmailCard />} />
            </Route>
          </Routes>
        </div>
      </div>
      <LoginModals />
      <Register />
      <BackToTop />
      <ScrollTopBehaviour />
    </GlobalProvider>
  );
}

export default App;

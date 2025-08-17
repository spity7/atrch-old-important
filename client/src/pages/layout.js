import { useEffect } from "react";
import "../public/scss/styles.scss";
import "photoswipe/dist/photoswipe.css";
import "react-modal-video/scss/modal-video.scss";
import "rc-slider/assets/index.css";

import LoginModals from "@/components/modals/LoginModals";
import Register from "@/components/modals/Register";

import BackToTop from "@/components/common/BackToTop";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  return (
    <html lang="en">
      <body className="body">
        <div id="wrapper">
          <div id="pagee" className="clearfix">
            {children}
          </div>
        </div>
        <LoginModals />
        <Register />
        <BackToTop />
      </body>
    </html>
  );
}

import React from "react";

// COMPONENT
import Share from "../components/Share";
import BackToTop from "../components/BackToTop";
import NavSidebar from "../components/NaviSidebar";
import BlogSidebar from "../components/BlogSidebar";
import PageEmpty from "../components/PageEmpty";
import HeadingSection from "../components/HeadingSection";

//ANIMATION
import ani from "../assets/gif/maintrance.json";
import Lottie from "lottie-react";

function QuotationPage() {
  const icons = `<svg class="w-6 h-6 text-emerald-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
  </svg>`;

  return (
    <div className="quotation-page pt-4 pb-10 md:pt-6 lg:py-10">
      <div className="container">
        <div className="row">
          <div
            className="col relative order-last lg:order-0"
            style={{ "--col-sm": "12", "--col-md": "4", "--col-lg": "3" }}
          >
            <div className="sticky top-40 pt-10 lg:pt-0">
              <div className="categories-detail__item">
                <NavSidebar />
              </div>
              <div className="categories-detail__item pt-8">
                <BlogSidebar />
              </div>
            </div>
          </div>
          <div
            className="col relative"
            style={{ "--col-sm": "12", "--col-md": "8", "--col-lg": "9" }}
          >
            <div className="quotation-page__title">
              <HeadingSection title="Báo giá dịch vụ" icon={icons} />
            </div>
            <div className="pt-4">
              <PageEmpty title="Trang báo giá hiện đang được cập nhật..." />
            </div>
            <div className="quotation-page__animate pt-6 md:pt-8 lg:pt-0 w-60 md:w-full flex items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
              <Lottie
                animationData={ani}
                loop={true}
                className="w-72 md:w-96"
              />
            </div>
          </div>
        </div>
      </div>
      {/* sharing  */}
      <Share></Share>
      {/* back to top */}
      <BackToTop />
    </div>
  );
}

export default QuotationPage;

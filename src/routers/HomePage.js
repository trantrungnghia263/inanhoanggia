import React, { useEffect } from "react";

//COMPONENTS
import BannerSlide from "../components/BannerSlide";
import MultiColumn from "../components/MultiColumn";
import HeadingSection from "../components/HeadingSection";
import Service from "../components/Service";
import Categories from "../components/Categories";
import BlogPost from "../components/BlogPost";
import ScrollImage from "../components/ScrollImage";

//HOOKS
import useDocumentTitle from "../hooks/useDocumentTitle";

//AOS ANIMATION
import AOS from "aos";

function HomePage() {
  useDocumentTitle("Trang chủ - Công ty in Hoàng Gia");

  const icons = [
    `<svg class="w-6 h-6 text-emerald-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
    </svg>`,
    `<svg class="w-6 h-6 text-emerald-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z"/>
  </svg>`,
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="home-page">
      {/* banner-slide */}
      <div className="home-page__banner">
        <BannerSlide />
      </div>
      {/* multi column */}
      <div className="home-page__multi-column">
        <MultiColumn />
      </div>
      {/* service */}
      <div className="home-page__service">
        <div className="home-page__heading">
          <HeadingSection
            icon={icons[1]}
            title="Dịch vụ của chúng tôi"
            alignment="start"
          />
        </div>
        <Service />
      </div>
      {/* categories */}
      <div className="home-page__categories">
        <div className="home-page__heading">
          <HeadingSection
            icon={icons[1]}
            title="Dịch vụ in"
            alignment="start"
          />
        </div>
        <Categories />
      </div>
      {/* example design */}
      <div className="home-page__blog-post">
        <div className="home-page__heading">
          <HeadingSection
            icon={icons[0]}
            title="Mẫu thiết kế nổi bật"
            alignment="start"
          />
        </div>
        <ScrollImage />
      </div>
      {/* blog post */}
      <div className="home-page__blog-post">
        <div className="home-page__heading">
          <HeadingSection
            icon={icons[0]}
            title="Tin tức nổi bật"
            alignment="start"
          />
        </div>
        <BlogPost />
      </div>
    </div>
  );
}

export default HomePage;

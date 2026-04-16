import React from "react";
import HeroSlider from "../components/HeroSlider";
import CollectionHighlights from "../components/CollectionHighlights";
import SectionHeading from "../components/SectionHeading";
import FeaturedProducts from "../components/FeaturedProducts";
import ComfortBanner from "../components/ComfortBanner";
import ScrollingTextBar from "../components/ScrollingTextBar";
import BootsHeading from "../components/BootsHeading";
import BootCollectionsGrid from "../components/BootCollectionsGrid";
import FashionSneakersSection from "../components/FashionSneakersSection";
import BrandDealsSection from "../components/BrandDealsSection";
import SeasonSaleProducts from "../components/SeasonSaleProducts";
import PopularStylesSection from "../components/PopularStylesSection";
import StoreFinderBanner from "../components/StoreFinderBanner";
import CustomerFeedbackHighlights from "../components/CustomerFeedbackHighlights";
import RecentlyOurPosts from "../components/RecentlyOurPosts";
import NewsletterArticlesBanner from "../components/NewsletterArticlesBanner";

function Home() {
  return (
    <>
      <HeroSlider />
      <CollectionHighlights />
      <SectionHeading />
      <FeaturedProducts />
      <ComfortBanner />
      <ScrollingTextBar />
      <BootsHeading />
      <BootCollectionsGrid />
      <FashionSneakersSection />
      <BrandDealsSection />
      <SeasonSaleProducts />
      <PopularStylesSection />
      <StoreFinderBanner />
      <CustomerFeedbackHighlights />
      <RecentlyOurPosts />
      <NewsletterArticlesBanner />
    </>
  );
}

export default Home;

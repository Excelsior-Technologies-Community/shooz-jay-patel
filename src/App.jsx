import AnnouncementBar from "./components/AnnouncementBar";
import BrandDealsSection from "./components/BrandDealsSection";
import BootCollectionsGrid from "./components/BootCollectionsGrid";
import CollectionHighlights from "./components/CollectionHighlights";
import BootsHeading from "./components/BootsHeading";
import ComfortBanner from "./components/ComfortBanner";
import CustomerFeedbackHighlights from "./components/CustomerFeedbackHighlights";
import FashionSneakersSection from "./components/FashionSneakersSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Header from "./components/header";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import NewsletterArticlesBanner from "./components/NewsletterArticlesBanner";
import ScrollingTextBar from "./components/ScrollingTextBar";
import PopularStylesSection from "./components/PopularStylesSection";
import RecentlyOurPosts from "./components/RecentlyOurPosts";
import SeasonSaleProducts from "./components/SeasonSaleProducts";
import SectionHeading from "./components/SectionHeading";
import SiteFooter from "./components/SiteFooter";
import StoreFinderBanner from "./components/StoreFinderBanner";

function App() {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <Navbar />
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
      <CustomerFeedbackHighlights />
      <StoreFinderBanner />
      <RecentlyOurPosts />
      <NewsletterArticlesBanner />
      <SiteFooter />
    </div>
  );
}

export default App;

import AnnouncementBar from "./components/AnnouncementBar";
import BrandDealsSection from "./components/BrandDealsSection";
import BootCollectionsGrid from "./components/BootCollectionsGrid";
import CollectionHighlights from "./components/CollectionHighlights";
import BootsHeading from "./components/BootsHeading";
import ComfortBanner from "./components/ComfortBanner";
import FashionSneakersSection from "./components/FashionSneakersSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Header from "./components/header";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import ScrollingTextBar from "./components/ScrollingTextBar";
import PopularStylesSection from "./components/PopularStylesSection";
import SeasonSaleProducts from "./components/SeasonSaleProducts";
import SectionHeading from "./components/SectionHeading";

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
    </div>
  );
}

export default App;

import AnnouncementBar from "./components/AnnouncementBar";
import CollectionHighlights from "./components/CollectionHighlights";
import FeaturedProducts from "./components/FeaturedProducts";
import Header from "./components/header";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
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
    </div>
  );
}

export default App;

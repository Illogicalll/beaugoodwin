import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Fujifilm from "./pages/Fujifilm";
import Armadillo from "./pages/Armadillo";
import AmericanGiant from "./pages/AmericanGiant";
import NationalGallery from "./pages/NationalGallery";
import NotFound from "./pages/NotFound";
import Campaign from "./components/Campaign";
import { campaigns } from "./components/Campaign/data";
import Info from "./components/Info";
import Divider from "./components/Divider";
import ImageViewer, { ViewerImage } from "./components/ImageViewer";
import { Layout, Page, Sidebar } from "./index.styled";

export default function Index() {
  const [image, setImage] = useState<ViewerImage | null>(null);

  return (
    <Layout>
      <Sidebar>
        <Info />
        <Divider />
      </Sidebar>
      {/* Any <img> on any page opens the zoom/pan viewer */}
      <Page
        onClick={(e) =>
          e.target instanceof HTMLImageElement &&
          setImage({ src: e.target.currentSrc, alt: e.target.alt })
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fujifilm" element={<Fujifilm />} />
          <Route path="/armadillo" element={<Armadillo />} />
          <Route path="/american" element={<AmericanGiant />} />
          <Route path="/gallery" element={<NationalGallery />} />
          {campaigns.map((c) => (
            <Route key={c.page} path={c.page} element={<Campaign campaign={c} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Page>
      <ImageViewer image={image} onClose={() => setImage(null)} />
    </Layout>
  );
}

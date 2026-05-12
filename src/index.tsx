import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Fujifilm from "./pages/Fujifilm";
import Armadillo from "./pages/Armadillo";
import AmericanGiant from "./pages/AmericanGiant";
import NationalGallery from "./pages/NationalGallery";
import NotFound from "./pages/NotFound";
import Info from "./components/Info";
import Divider from "./components/Divider";
import { Layout, Page, Sidebar } from "./index.styled";

export default function Index() {
  return (
    <Layout>
      <Sidebar>
        <Info />
        <Divider />
      </Sidebar>
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fujifilm" element={<Fujifilm />} />
          <Route path="/armadillo" element={<Armadillo />} />
          <Route path="/american" element={<AmericanGiant />} />
          <Route path="/gallery" element={<NationalGallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Page>
    </Layout>
  );
}

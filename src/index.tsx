import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Page>
    </Layout>
  );
}

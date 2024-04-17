import { createBrowserRouter } from "react-router-dom";
import Layout from "./view/page/Layout";
import List from "./view/page/Layout/index";
import DetailPage from "./view/detail/content";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <List/>
      </Layout>
    ),
  },

  {
    path: "/detail/:owner/:repo/:number",
    element: (
      <Layout>
        <DetailPage />
      </Layout>
    ),
  },
]);

export default router;

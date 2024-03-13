//모든 페이지의 부모역할
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const EmptyLayout = ({ children }) => <>{children}</>;
  const SubLayout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
  );
}

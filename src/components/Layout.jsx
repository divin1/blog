import Footer from "components/Footer";
import Header from "components/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

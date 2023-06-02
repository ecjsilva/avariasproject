import Navbar from "./Navbar";
import Footer from "./Footer";
import "./LayoutStyle.css"

export default function Layout({ children }) {
  return (
    <div className="container-main">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

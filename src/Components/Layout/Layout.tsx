import Footer from "Components/Footer";
import Navbar from "Components/Navbar/Navbar";

type LayoutTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutTypes) => (
  <div className="h-full bg-inside-bg-light">
    <header>
      <Navbar />
    </header>
    <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;

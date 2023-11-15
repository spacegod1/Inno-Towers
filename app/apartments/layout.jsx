import ApartmentNav from "../components/ApartmentNav";
import Footer from "../components/Footer";

export default function ApartmentLayout({ children }) {
  return (
    <section>
      {children}
      <ApartmentNav />
      <Footer />
    </section>
  );
}

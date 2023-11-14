import ApartmentNav from "../components/ApartmentNav";

export default function ApartmentLayout({ children }) {
  return (
    <section>
      {children}
      <ApartmentNav />
    </section>
  );
}

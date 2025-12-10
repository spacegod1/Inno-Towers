import "./globals.css";
import Navbar from "./components/Navbar";
import AOSInit from "./components/aos";

export const metadata = {
  title: "Inno Towers",
  description: "Luxury in the heart of Tse Addo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Abril+Fatface&family=Nunito+Sans:wght@300;800&family=EB+Garamond:ital,wght@0,400;0,500;1,500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,900&family=Poiret+One&family=Niconne&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <AOSInit />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import "./button.scss";
import "./Header.scss";
import "./_Css/afterEffect.scss";
import "./_Css/anime.scss";
import Providers from "./components/Providers";
import Footer from "./components/Footer";
import Shadow from "./components/utils/Shadow";
import Header from "./components/Header";
export const metadata = {
  title: "Wordgame Wizard",
  description: "word game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="duration-200 w-full h-screen relative">
        <Providers>
          <Header />
          {children}
          <Shadow />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

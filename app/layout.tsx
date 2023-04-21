import "./globals.css";
import "./button.scss";
import Header from "./components/Header";
import { Providers } from "./GlobalRedux/provider";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[url('./img/back.jpg')] bg-cover bg-no-repeat bg-center w-full h-screen">
      <Providers>
        <Header/>
        {children}
      </Providers>

      </body>
    </html>
  );
}

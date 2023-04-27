import { Inter } from "next/font/google";
import FirstPage from "./components/FirstPage";
import EnToMn from "./components/EnToMn/EnToMn";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      <FirstPage />
      <EnToMn />
    </main>
  );
}

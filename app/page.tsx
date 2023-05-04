import { Inter } from "next/font/google";
import FirstPage from "./components/FirstPage";
import EnToMn from "./components/EnToMn/EnToMn";
import Shadow from "./components/utils/Shadow";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      <Shadow />
      <FirstPage />
      <EnToMn />
    </main>
  );
}

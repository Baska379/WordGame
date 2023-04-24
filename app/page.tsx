import { Inter } from "next/font/google";
import Providers from "./components/Providers"
import FirstPage from "./components/FirstPage";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return <main>
    <Providers>
       <FirstPage/>
    </Providers>
  </main>;
}

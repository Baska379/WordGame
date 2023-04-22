import { Inter } from "next/font/google";
import First from "./First";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return <main>
    <First/>
  </main>;
}

import { Inter } from "next/font/google";
import StartButton from "./components/StartButton";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="w-full h-full bg-gradient-to-r from-slate-100 to-green-500">
      <StartButton />
    </main>
  );
}

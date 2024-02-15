import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Profile from "@/components/profile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-100%">
      <Layout />
    </div>
  );
}

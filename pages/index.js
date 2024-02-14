import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <title>신재일의 포트폴리오</title>
    </Layout>
  );
}

import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import ContentLayout from "@/components/contentLayout";
import About from "@/components/about";
import Skill from "@/components/skill";
import Education from "@/components/education";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1 p-4 bg-gray-200 h-screen w-300px">
          <Layout />
        </div>
        <div className="md:col-span-1 m-8">
          <ContentLayout title="About Me">
            <About />
          </ContentLayout>
          <ContentLayout title="Skills">
            <Skill />
          </ContentLayout>
        </div>
        <div className="md:col-span-1 m-8">
          <ContentLayout title="Education">
            <Education />
          </ContentLayout>
        </div>
      </div>
    </>
  );
}

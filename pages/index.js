import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import ContentLayout from "@/components/contentLayout";
import About from "@/components/about";
import Skill from "@/components/skill";
import Education from "@/components/education";
import Career from "@/components/career";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:col-span-1 p-4 bg-gray-200 h-screen md:flex-shrink-0 z-50">
        <Layout />
      </div>
      <div className="md:col-span-1 m-8 basis-full md:basis-3/6">
        <ContentLayout title="About Me">
          <About />
        </ContentLayout>
        <ContentLayout title="Skills">
          <Skill />
        </ContentLayout>
      </div>
      <div className="md:col-span-1 m-8 basis-full md:basis-2/6">
        <ContentLayout title="Education">
          <Education />
        </ContentLayout>
        <ContentLayout title="Career">
          <Career />
        </ContentLayout>
      </div>
    </div>
  );
}

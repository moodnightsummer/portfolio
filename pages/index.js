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
      {/* Layout 영역 */}
      <div className="md:col-span-1 p-4 bg-gray-200 md:w-2/8 h-full md:flex-shrink-0 z-50 sticky top-0">
        <Layout />
      </div>

      {/* 나머지 두 개의 영역 */}
      <div className="md:col-span-1 flex-1 flex flex-col m-8">
        <div className="mb-8">
          <ContentLayout title="About Me">
            <About />
          </ContentLayout>
        </div>
        <div>
          <ContentLayout title="Skills">
            <Skill />
          </ContentLayout>
        </div>
      </div>

      <div className="md:col-span-1 flex-1 flex flex-col m-8">
        <div className="mb-8">
          <ContentLayout title="Education">
            <Education />
          </ContentLayout>
        </div>
        <div>
          <ContentLayout title="Career">
            <Career />
          </ContentLayout>
        </div>
      </div>
    </div>
  );
}

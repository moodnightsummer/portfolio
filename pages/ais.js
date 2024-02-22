import CareerLayout from "@/components/careerLayout";
import Layout from "@/components/layout";
export default function Ais() {
  return (
    <div className="flex flex-col md:flex-row sticky top-0">
      {/* Layout 영역 */}
      <div className="md:col-span-1 p-4 bg-gray-200 md:w-2/8 h-full md:flex-shrink-0 z-50 sticky top-0">
        <Layout />
      </div>

      {/* 나머지 두 개의 영역 */}
      <div className="md:col-span-1 flex-1 flex flex-col m-8">
        <div className="mb-8">
          <CareerLayout />
        </div>
      </div>
    </div>
  );
}

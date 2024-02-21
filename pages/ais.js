import CareerLayout from "@/components/careerLayout";
import Layout from "@/components/layout";
export default function Ais() {
  return (
    <div className="flex flex-row">
      <div className="md:col-span-1 p-4 bg-gray-200 h-screen flex-shrink-0">
        <Layout />
      </div>
      <div className="md:col-span-1 m-8 basis-4/6">
        <CareerLayout />
      </div>
    </div>
  );
}

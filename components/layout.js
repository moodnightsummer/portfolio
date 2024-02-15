import ContentLayout from "./contentLayout";
import About from "./about";
import Contact from "./contact";
import Profile from "./profile";

export default function Layout(children) {
  return (
    <>
      <div className="custom-width custom-height p-4 bg-gray-300">
        <Profile />
        <ContentLayout title="Contact">
          <Contact />
        </ContentLayout>
      </div>
    </>
  );
}

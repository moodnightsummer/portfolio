import ContentLayout from "./contentLayout";
import Contact from "./contact";
import Profile from "./profile";

export default function Layout(children) {
  return (
    <>
      <div className="">
        <Profile />
        <ContentLayout title="Contact">
          <Contact />
        </ContentLayout>
      </div>
    </>
  );
}

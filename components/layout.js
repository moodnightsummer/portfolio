import ContentLayout from "./contentLayout";
import Contact from "./contact";
import Profile from "./profile";

export default function Layout(children) {
  return (
    <div className="h-screen p-4 flex-col flex justify-between items-center">
      <Profile />
      <ContentLayout title="Contact" isUnderbar={false}>
        <Contact />
      </ContentLayout>
    </div>
  );
}

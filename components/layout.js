import ContentLayout from "./contentLayout";
import Contact from "./contact";
import Profile from "./profile";

export default function Layout(children) {
  return (
    <div className="h-screen p-4 flex-col flex justify-between items-center sticky top-0">
      <title>신재일 포트폴리오</title>
      <Profile />
      <ContentLayout title="Contact" isUnderbar={false}>
        <Contact />
      </ContentLayout>
    </div>
  );
}

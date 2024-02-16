import Image from "next/image";
import profile from "../contents/profile";

export default function Profile() {
  return (
    <div className="container flex flex-col px-2 py-2 mt-8 justify-center items-center">
      <Image
        alt="profile"
        src="/profile.png"
        width={200}
        height={200}
        className="mb-8"
      ></Image>
      <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
          {profile.nameEN}
        </h1>
        <span className="leading-relaxed">
          {profile.nameKR} | {profile.age}
        </span>
        <span>{profile.position}</span>
      </div>
    </div>
  );
}

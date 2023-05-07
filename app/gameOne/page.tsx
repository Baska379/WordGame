"use client";
import FirstPage from "../components/FirstPage";
import EnToMn from "../components/EnToMn/EnToMn";
import Providers from "../components/Providers";
const page = () => {
  return (
    <Providers>
      <div className="bg-[url('./img/back.jpg')] bg-cover bg-no-repeat bg-center ">
        <FirstPage />
        <EnToMn />
      </div>
    </Providers>
  );
};

export default page;

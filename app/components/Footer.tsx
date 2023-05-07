"use client";
import { useAppSelector } from "../useState";
const Footer = () => {
  const { footerBoolean } = useAppSelector((state) => state.main);
  return (
    <div
      style={{ display: footerBoolean ? "block" : "none" }}
      className="w-full h-20 bg-black"
    ></div>
  );
};

export default Footer;

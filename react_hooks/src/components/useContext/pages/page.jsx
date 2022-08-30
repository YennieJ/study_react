import React from "react";
import Content from "./components/content/content";
import Footer from "../layouts/footer/footer";
import Header from "../layouts/header/header";

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export default Page;

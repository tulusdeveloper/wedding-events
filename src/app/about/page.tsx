import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export const metadata: Metadata = {
  title: "About | Bliss and Blooms Wedding and Events Planners",
  description:
    "This is Bliss and Blooms Wedding and Events Planners About Page",
};

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="About Us" />

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         
        </div>
      </div>
      <AboutUs/>
      <Footer/>
    </DefaultLayout>
  );
};

export default Profile;

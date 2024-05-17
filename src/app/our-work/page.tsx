import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Footer from "@/components/Footer";
import EventGrid from "@/components/EventGrid";

export const metadata: Metadata = {
  title: "About | Bliss and Blooms Wedding and Events Planners",
  description:
    "This is Bliss and Blooms Wedding and Events Planners About Page",
};

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Our Work" />
      </div>
      <EventGrid/>
      <br/>
      <Footer/>
    </DefaultLayout>
  );
};

export default Profile;

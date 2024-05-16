import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact | Bliss and Blooms",
  description:
    "This is Contact Page for Bliss and Blooms",
};

const Contact = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Our Services" />
      <Services/>
      <Footer/>
    </DefaultLayout>
  );
};

export default Contact;

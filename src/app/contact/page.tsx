import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Bliss and Blooms",
  description:
    "This is Contact Page for Bliss and Blooms",
};

const Contact = () => {
  return (
    <DefaultLayout>
      <ContactForm/>
      <br/>
      <GoogleMap/><br/>
      <Footer/>
    </DefaultLayout>
  );
};

export default Contact;

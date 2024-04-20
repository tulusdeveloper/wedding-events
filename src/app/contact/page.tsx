import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Bliss and Blooms",
  description:
    "Get in touch with Bliss and Blooms for all your wedding and event planning needs. Our experienced team is here to help you create unforgettable moments that exceed your expectations.",
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

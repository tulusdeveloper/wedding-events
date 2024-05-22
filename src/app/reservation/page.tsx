import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";

export const metadata: Metadata = {
  title: "Reservation| Bliss and Blooms",
  description:
    "This is Reservation form for Bliss and Blooms",
};

const ReservationPage = () => {
  return (
    <DefaultLayout>
      <Reservation/><br/>
      <Footer/>
    </DefaultLayout>
  );
};

export default ReservationPage;

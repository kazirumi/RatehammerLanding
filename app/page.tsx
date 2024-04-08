import Benefits from "@/components/Home/Benefits";
import ContactUs from "@/components/Home/ContactUs";
import Intro from "@/components/Home/Intro";
import Offers from "@/components/Home/Offers";
import Offices from "@/components/Home/Offices";
import Image from "next/image";

export default function Home() {
  return (
    
      <>
            <Intro/>
            <Offers/>
            <Benefits/>
            <Offices/>
            <ContactUs/>
      </>
      
    
  );
}

import Navbar from "@/components/Navbar/Navbar";
import Content from "@/components/contents/Content";
import Event from "@/components/events/Event"
import Teams from "@/components/Teams/teams";
import Footer from "@/components/Footer/footer";
import LandingPage from "@/components/LandingPage/LandingPage";
import FooterNew from "@/components/FooterNew/footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <LandingPage/>
      <Content />
      <Event />
      <Teams />
      <Footer/>
      {/* <FooterNew/> */}
    </main>
  );
}

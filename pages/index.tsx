import type { NextPage } from "next";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import Trust from "../components/trust";
import Benefits from "../components/benefits";
import FeedbackDemo from "../components/feedback-demo";
import Products from "../components/products";
import HowToOrder from "../components/how-to-order";
import RecommendationMobile from "../components/recommendation-mobile";
import Tutorial from "../components/tutorial";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.page2}>
      <Navbar />
      <HeroSection />
      <Trust />
      <Benefits />
      <FeedbackDemo />
      <Products />
      <HowToOrder />
      <RecommendationMobile />
      <Tutorial />
      <Footer />
    </div>
  );
};

export default Page;

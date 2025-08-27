// src/pages/Index.jsx (or wherever your page lives)
import { useState } from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import TestimonialsSection from "../components/Testimonial";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";

import SubscriptionModal from "../components/SubscriptionModal";
import SuccessPopup from "../components/SuccessPop";
import VideoSection from "../components/VideoSection";
// import PricingSection from "../components/PricingSection"; // ⬅️ removed for now

const Index = () => {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openSubscribe = () => setIsSubscribeOpen(true);
  const closeSubscribe = () => setIsSubscribeOpen(false);

  return (
    <>
      {/* If you want header CTA to open modal too, pass openSubscribe down and handle inside Header */}
      <Header />

      {/* Pass the opener to the hero so "Get Started" opens the modal */}
      <HeroSection onOpenSubscribe={openSubscribe} />

      <FeaturesSection />
      <VideoSection/>
      {/* <PricingSection onSubscribe={openSubscribe} /> */}
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <Footer />

      {/* Email-only modal */}
      <SubscriptionModal
        isOpen={isSubscribeOpen}
        onClose={closeSubscribe}
        onSuccess={() => setShowSuccess(true)}
      />

      {/* Optional success toast/popup */}
      <SuccessPopup
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};

export default Index;

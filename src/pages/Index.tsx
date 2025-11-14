import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RewardCards from "@/components/RewardCards";
import Footer from "@/components/Footer";
import LiveNotification from "@/components/LiveNotification";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 text-slate-900">
      <Header />
      <main className="pb-16">
        <HeroSection />
        <RewardCards />
        {/* Agar koi extra section (FAQ, HowItWorks) ho to yaha niche add karo */}
      </main>
      <Footer />
      <LiveNotification />
    </div>
  );
}

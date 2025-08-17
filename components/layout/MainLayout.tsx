import CTASection from "../CTASection";
import Footer from "../Footer";
import Header from "../Header";


import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
  showCTA?: boolean;
  className?: string;
};

export default function MainLayout({ children, showCTA = true, className = "" }: MainLayoutProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      <Header />
      <main>
        {children}
      </main>
      {showCTA && <CTASection />}
      <Footer />
    </div>
  )
}
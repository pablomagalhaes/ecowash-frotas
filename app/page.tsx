import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Simulator from '@/components/Simulator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Page(){
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <Simulator />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

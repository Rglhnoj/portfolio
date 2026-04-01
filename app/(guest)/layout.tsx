import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <main className="flex-1 w-full"> 
        {children}
      </main>

      <Footer />
    </div>
  );
}
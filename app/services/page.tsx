import Header from "@/components/Header";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
        <Services />
      </main>
    </div>
  );
}




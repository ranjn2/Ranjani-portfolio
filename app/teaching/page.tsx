import Header from "@/components/Header";
import Teaching from "@/components/Teaching";

export default function TeachingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
        <Teaching />
      </main>
    </div>
  );
}




import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import DietPlanDialog from "@/components/DietPlanDialog";
import Navbar from "@/components/Navbar";
import heroBanner from "@/assets/hero-banner.jpg";
import { Leaf, Shield, Truck } from "lucide-react";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDietPlan = (id: string) => {
    setSelectedProduct(id);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Health supplements" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center md:py-32">
          <h1 className="animate-fade-in font-display text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Your Trusted Online Pharmacy
          </h1>
          <p className="mx-auto mt-4 max-w-xl animate-fade-in text-lg text-primary-foreground/80" style={{ animationDelay: "200ms" }}>
            Medicines & supplements with AI-powered health recommendations — delivered to your doorstep.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-b bg-card">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Genuine Medicines", desc: "100% authentic & certified" },
            { icon: Shield, title: "Lab Tested", desc: "Third-party quality assured" },
            { icon: Truck, title: "Free Delivery", desc: "On orders above ₹499" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3 text-center md:text-left">
              <Icon className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-card-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products by Category */}
      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.id);
        return (
          <section key={cat.id} className="container mx-auto px-4 py-10">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{cat.label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">Click "View Diet Plan" for AI-powered health recommendations</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {catProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} onViewDietPlan={handleViewDietPlan} index={i} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-foreground">NutriStore</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">© 2026 NutriStore. All rights reserved.</p>
        </div>
      </footer>

      <DietPlanDialog productId={selectedProduct} open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Index;

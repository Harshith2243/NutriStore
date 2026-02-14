import { ShoppingCart, BookOpen } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
  onViewDietPlan: (id: string) => void;
  index: number;
}

const ProductCard = ({ product, onViewDietPlan, index }: Props) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    addToCart(product);
  };

  return (
    <div
      className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          ₹{product.price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-foreground">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button onClick={handleAddToCart} className="flex-1 gap-2">
            <ShoppingCart className="h-4 w-4" /> Add to Cart
          </Button>
          <Button variant="outline" onClick={() => onViewDietPlan(product.id)} className="flex-1 gap-2">
            <BookOpen className="h-4 w-4" /> View Diet Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Cart = () => {
  const { items, removeFromCart, clearCart, totalPrice, totalItems } = useCart();

  const handleCheckout = () => {
    clearCart();
    toast({ title: "Order placed! 🎉", description: "Thank you for your purchase. Your supplements are on the way!" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground">Your Cart</h1>
        <p className="mt-1 text-muted-foreground">{totalItems} item(s)</p>

        {items.length === 0 ? (
          <div className="mt-16 flex flex-col items-center gap-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
            <p className="text-lg text-muted-foreground">Your cart is empty</p>
            <Link to="/"><Button>Continue Shopping</Button></Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 rounded-lg border bg-card p-4">
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="font-semibold text-primary">₹{item.price * item.quantity}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-card-foreground">Order Summary</h3>
              <div className="mt-4 space-y-2 text-sm">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-muted-foreground">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t pt-2">
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span>₹{totalPrice}</span>
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-full" onClick={handleCheckout}>Checkout</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

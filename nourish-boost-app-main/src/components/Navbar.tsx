import { ShoppingCart, LogOut, User, Leaf, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">NutriStore</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-muted-foreground">
                <User className="mr-1 inline h-4 w-4" />
                {user?.name}
              </span>
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-5 w-5 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="mr-1 h-4 w-4" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login"><Button variant="ghost" size="sm">Login</Button></Link>
              <Link to="/signup"><Button size="sm">Sign Up</Button></Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-card p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">
                  <User className="mr-1 inline h-4 w-4" /> {user?.name}
                </span>
                <Link to="/cart" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" /> Cart ({totalItems})
                </Link>
                <Button variant="ghost" size="sm" onClick={() => { handleLogout(); setMobileOpen(false); }}>
                  <LogOut className="mr-1 h-4 w-4" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)}><Button variant="ghost" className="w-full">Login</Button></Link>
                <Link to="/signup" onClick={() => setMobileOpen(false)}><Button className="w-full">Sign Up</Button></Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

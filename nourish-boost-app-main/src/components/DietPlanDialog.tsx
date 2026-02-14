import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { dietPlans, products } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Salad, Dumbbell } from "lucide-react";

interface Props {
  productId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DietPlanDialog = ({ productId, open, onOpenChange }: Props) => {
  if (!productId) return null;
  const plan = dietPlans[productId];
  const product = products.find((p) => p.id === productId);
  if (!plan || !product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            AI Recommendation: {product.name}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Personalized diet & workout plan based on your supplement choice
          </p>
        </DialogHeader>

        <Tabs defaultValue="benefits" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="benefits" className="gap-1">
              <Heart className="h-4 w-4" /> Benefits
            </TabsTrigger>
            <TabsTrigger value="diet" className="gap-1">
              <Salad className="h-4 w-4" /> Diet
            </TabsTrigger>
            <TabsTrigger value="workout" className="gap-1">
              <Dumbbell className="h-4 w-4" /> Workout
            </TabsTrigger>
          </TabsList>

          <TabsContent value="benefits" className="mt-4 space-y-3">
            {plan.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 rounded-md bg-secondary p-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {i + 1}
                </span>
                <p className="text-sm text-secondary-foreground">{b}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="diet" className="mt-4 space-y-3">
            {plan.diet.map((d, i) => (
              <div key={i} className="rounded-md border bg-card p-3 text-sm text-card-foreground">
                {d}
              </div>
            ))}
          </TabsContent>

          <TabsContent value="workout" className="mt-4 space-y-3">
            {plan.workout.map((w, i) => (
              <div key={i} className="rounded-md border bg-card p-3 text-sm text-card-foreground">
                {w}
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default DietPlanDialog;

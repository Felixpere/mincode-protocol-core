import { motion } from "framer-motion";

const PRODUCTS = [
  { name: "MODULAR PATCH CABLE SET", available: 12, total: 50, price: "€45" },
  { name: "MINCODE × KORG VOLCA MOD", available: 3, total: 15, price: "€380" },
  { name: "INDUSTRIAL NOISE UNIT", available: 0, total: 20, price: "€220" },
  { name: "SIGNAL PROCESSOR V2", available: 7, total: 30, price: "€165" },
];

const SalesSection = () => {
  return (
    <section id="sales" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-12 border-b border-border pb-4">
        HARDWARE BOUTIQUE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
        {PRODUCTS.map((product, i) => {
          const soldOut = product.available === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 relative"
            >
              {/* Product image placeholder */}
              <div className="aspect-square bg-muted mb-4 relative overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(${200 + i * 25}deg, hsl(0 0% 12%), hsl(0 0% 6%))`,
                  }}
                />
                {soldOut && (
                  <div className="absolute inset-0 bg-destructive/20 flex items-center justify-center">
                    <span className="font-display text-2xl md:text-3xl text-destructive tracking-wider">
                      SIGNAL DEAD
                    </span>
                  </div>
                )}
              </div>

              <p className="font-display text-sm tracking-wider mb-2">{product.name}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-mono text-foreground">{product.price}</span>
                <span
                  className={`text-xs font-mono tracking-wider ${
                    soldOut ? "text-destructive" : "text-accent"
                  }`}
                >
                  {soldOut ? "SOLD OUT" : `${product.available}/${product.total} AVAILABLE`}
                </span>
              </div>

              {!soldOut && (
                <button className="mt-4 w-full border border-border py-3 text-xs font-mono tracking-[0.2em] hover:border-primary hover:text-primary transition-colors crt-hover">
                  ADD TO CART
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SalesSection;

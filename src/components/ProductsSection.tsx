import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ShoppingCart, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Milano Roofing Sheets",
      description: "High quality stone coated Milano roofing sheets with 50-year warranty",
      price: "₦45,000",
      rating: 5,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Classic Roofing Tiles",
      description: "Durable stone coated roofing tiles for residential and commercial use",
      price: "₦38,000",
      rating: 5,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Premium Roofing Solutions",
      description: "Complete roofing package with installation and maintenance",
      price: "₦65,000",
      rating: 5,
      image: "/api/placeholder/300/200"
    }
  ];

  const handleBuyProduct = (productId: number) => {
    // In a real application, this would handle the purchase
    alert(`Product ${productId} added to cart! Contact us for purchase.`);
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-roofing-navy mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium range of stone coated roofing solutions designed for durability and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Carousel 
                className="w-full h-48"
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
              >
                <CarouselContent>
                  {[1, 2, 3].map((imageIndex) => (
                    <CarouselItem key={imageIndex}>
                      <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <span className="text-gray-600 text-lg font-medium">Product Image {imageIndex}</span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-roofing-navy">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-roofing-blue">
                    {product.price}
                  </span>
                  <div className="flex items-center">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => handleBuyProduct(product.id)}
                  variant="orange"
                  className="w-full"
                >
                  <ShoppingCart className="mr-2 w-4 h-4" />
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="roofing-primary" size="lg" className="px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
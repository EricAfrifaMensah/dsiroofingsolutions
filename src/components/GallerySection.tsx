import { Button } from "@/components/ui/button";
import { useState } from "react";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'milano', name: 'Milano Sheets' },
    { id: 'bond', name: 'Bond Sheets' },
    { id: 'classic', name: 'Classic' },
    { id: 'romania', name: 'Romania Sheets' },
    { id: 'shingle', name: 'Shingle Sheets' },
    { id: 'woodshake', name: 'Woodshake Sheets' }
  ];

  const galleryItems = [
    { id: 1, category: 'milano', title: 'Milano Roofing Installation', location: 'Lagos, Nigeria' },
    { id: 2, category: 'bond', title: 'Bond Sheets Project', location: 'Abuja, Nigeria' },
    { id: 3, category: 'classic', title: 'Classic Roofing Style', location: 'Ibadan, Nigeria' },
    { id: 4, category: 'romania', title: 'Romania Roofing Project', location: 'Port Harcourt, Nigeria' },
    { id: 5, category: 'shingle', title: 'Shingle Sheets Installation', location: 'Kano, Nigeria' },
    { id: 6, category: 'woodshake', title: 'Woodshake Premium', location: 'Benin, Nigeria' },
    { id: 7, category: 'milano', title: 'Milano Classic Style', location: 'Calabar, Nigeria' },
    { id: 8, category: 'bond', title: 'Bond Commercial Project', location: 'Kaduna, Nigeria' },
    { id: 9, category: 'classic', title: 'Classic Residential', location: 'Ilorin, Nigeria' },
    { id: 10, category: 'romania', title: 'Romania Premium', location: 'Owerri, Nigeria' },
    { id: 11, category: 'shingle', title: 'Shingle Luxury Villa', location: 'Uyo, Nigeria' },
    { id: 12, category: 'woodshake', title: 'Woodshake Modern Home', location: 'Lokoja, Nigeria' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-roofing-navy mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed roofing projects and see the quality of our workmanship
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "roofing-primary" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="px-6 py-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg bg-gray-300 aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder for image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <span className="text-gray-600 text-lg font-medium">Project Image</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.location}</p>
                  <Button variant="orange" className="mt-4">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="roofing-primary" size="lg" className="px-8 py-3">
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
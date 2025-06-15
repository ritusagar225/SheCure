import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  {
    href: "/mental health",
    name: "Mental Health Care",
    imageUrl: "/Mental health.png",
  },
  {
    href: "/mother and baby",
    name: "Mother and baby Care",
    imageUrl: "/Mother and baby.jpg",
  },
  {
    href: "/personal care",
    name: "Personal Care and Hygiene",
    imageUrl: "/Personal Care and Hygiene.jpg",
  },
  {
    href: "/sexual health",
    name: "Sexual Health",
    imageUrl: "/Sexual health.webp",
  },
  {
    href: "/women health",
    name: "Women's Health",
    imageUrl: "/Women's health.png",
  },
  {
    href: "/diagnostic kits",
    name: "Diagnostic Kits",
    imageUrl: "/Diagnostic.avif",
  },
  {
    href: "/herbal care",
    name: "Herbal Care",
    imageUrl: "/Herbal care.jpg",
  },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Trusted care, tailored for her body and beyond
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};
export default HomePage;

"use client";
import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductCategories = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // e.g. "?category=shoes"
  const pathName = usePathname(); // e.g. "/products"

  const selectedCategory = searchParams.get("category") || "all"; // Get the selected category from the URL --> selectedCategory = bags, t-shirts, etc. | all.
  const categories = [
    { name: "All", icon: <ShoppingBasket className="w-5 h-5" />, slug: "all" },
    { name: "T-shirts", icon: <Shirt className="w-5 h-5" />, slug: "t-shirts" },
    { name: "Shoes", icon: <Footprints className="w-5 h-5" />, slug: "shoes" },
    {
      name: "Accessories",
      icon: <Glasses className="w-5 h-5" />,
      slug: "accessories",
    },
    { name: "Bags", icon: <Briefcase className="w-5 h-5" />, slug: "bags" },
    { name: "Dresses", icon: <Venus className="w-5 h-5" />, slug: "dresses" },
    { name: "Jackets", icon: <Shirt className="w-5 h-5" />, slug: "jackets" },
    { name: "Gloves", icon: <Hand className="w-5 h-5" />, slug: "gloves" },
  ];

  const handleSelectedCategory = (categorySlug: string) => {
    const currentSearchParams = new URLSearchParams(searchParams);
    if (categorySlug === "all") {
      currentSearchParams.delete("category");
    } else {
      currentSearchParams.set("category", categorySlug);
    }
    router.push(`${pathName}?${currentSearchParams.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div>
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide justify-between bg-gray-200 rounded-md p-2">
        {categories.map((category) => (
          <button
            onClick={() => handleSelectedCategory(category.slug)}
            key={category.slug}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white  transition cursor-pointer shrink-0 ${
              category.slug === selectedCategory ? "bg-white" : ""
            }`}
          >
            {category.icon}
            <span className="text-sm font-medium whitespace-nowrap">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;

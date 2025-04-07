"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "breads", name: "Breads" },
  { id: "pastries", name: "Pastries" },
  { id: "cakes", name: "Cakes" },
  { id: "seasonal", name: "Seasonal Specials" },
];

const tags = [
  { id: "bestseller", name: "Bestsellers" },
  { id: "traditional", name: "Traditional" },
  { id: "chocolate", name: "Chocolate" },
  { id: "fruit", name: "Fruit" },
  { id: "healthy", name: "Healthy" },
  { id: "breakfast", name: "Breakfast" },
  { id: "celebration", name: "Celebration" },
  { id: "seasonal", name: "Seasonal" },
];

export function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get filter values from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const tag = params.get("tag");

    if (category) {
      setSelectedCategory(category);
    }

    if (tag) {
      setSelectedTags(tag.split(","));
    }
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const handleTagChange = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedCategory) {
      params.set("category", selectedCategory);
    }

    if (selectedTags.length > 0) {
      params.set("tag", selectedTags.join(","));
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
    router.push(pathname);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <Accordion type="multiple" defaultValue={["categories", "tags"]}>
          <AccordionItem value="categories">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategory === category.id}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    <Label
                      htmlFor={`category-${category.id}`}
                      className="text-sm cursor-pointer"
                    >
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="tags">
            <AccordionTrigger>Tags</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {tags.map((tag) => (
                  <div key={tag.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`tag-${tag.id}`}
                      checked={selectedTags.includes(tag.id)}
                      onCheckedChange={() => handleTagChange(tag.id)}
                    />
                    <Label
                      htmlFor={`tag-${tag.id}`}
                      className="text-sm cursor-pointer"
                    >
                      {tag.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col space-y-2">
        <Button
          onClick={applyFilters}
          className="w-full bg-primary hover:bg-primary/90"
        >
          Apply Filters
        </Button>
        <Button onClick={clearFilters} variant="outline" className="w-full">
          Clear Filters
        </Button>
      </div>
    </div>
  );
}

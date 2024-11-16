import { notFound } from "next/navigation";
import { StaticImageData } from "next/image";
import getCategory from "./getCategory";
import ArticleCard from "@/app/components/ui/ArticleCard";

interface CategoryItem {
  thumbnail?: string;
  id: number;
  author: string;
  title: string;
  content: string;
  category: {
    name: string;
  };
  publishedAt: string;
}

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;
  const categoryData = await getCategory(category);

  if (!categoryData || !categoryData.data || categoryData.data.length === 0) {
    notFound();
  }

  return (
    <div className="py-10">
      <h1 className="text-center font-bold uppercase">{category}</h1>
      <div className="grid grid-cols-12">
        {categoryData.data.map((article: CategoryItem) => (
          <ArticleCard
            key={article.id}
            thumbnail={article.thumbnail || "/thumbnail.png"}
            author={article.author}
            title={article.title}
            category={article.category.name}
            date={article.publishedAt}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

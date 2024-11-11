import Link from "next/link";
import thumbnail from "@/../public/thumbnail.png";
import { Button } from "@/components/ui/button";
import ArticleCardHalf from "./ui/ArticleCardHalf";

const Entertainment = () => {
  return (
    <section className="my-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Entertainment</h2>
        <Button variant={"link"} asChild>
          <Link className="text-lg" href="#">
            Lihat Semua
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-10">
        {[1, 2, 3].map((item) => (
          <ArticleCardHalf
            key={item}
            thumbnail={thumbnail}
            author="Author"
            title="This is example Title Page"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            sem leo..."
            category="Categories"
            date="11 November 2024"
          />
        ))}
      </div>
    </section>
  );
};

export default Entertainment;

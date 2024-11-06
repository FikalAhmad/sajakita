import Image from "next/image";
import Link from "next/link";

// "use client"
export default function Home() {
  return (
    <div>
      <article className="grid md:grid-cols-2 gap-8 mb-12">
        <Image
          alt="Featured image"
          className="rounded-lg"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
          width="600"
        />
        <div className="space-y-4">
          <div className="text-sm">Author</div>
          <h1 className="text-2xl font-bold">This is example Title Page</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem
            leo. Nunc turpis urcu, porttitor a orci at, vestibulum aliquam mi.
            Vivamus arcu nisi, ornare nec eleifend at, placerat non velit. Cras
            et felis posuere, aliquam risus vitae.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Categories</span>
            <span>4 min read</span>
          </div>
        </div>
      </article>

      {/* Latest News */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Berita Terbaru</h2>
          <Link className="text-sm" href="#">
            Lihat Semua
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <article key={item} className="space-y-3">
              <Image
                alt="News thumbnail"
                className="rounded-lg w-full"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="text-sm">Author</div>
              <h3 className="font-bold">This is example Title Page</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                sem leo...
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Categories</span>
                <span>6 min read</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

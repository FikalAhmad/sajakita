import Link from "next/link";
import Image from "next/image";

const Nasional = () => {
  return (
    <div className="mx-auto mt-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Nasional</h2>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
          Lihat Semua
        </Link>
      </div>

      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <Link href="/" key={item}>
            <article key={item} className="bg-white rounded-lg overflow-hidden">
              <div className="py-5">
                <div className="flex gap-4">
                  <Image
                    src="/thumbnail.png"
                    alt="Article thumbnail"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="text-sm text-gray-600">Author</div>
                    <h3 className="font-semibold text-lg">
                      This is example Title Page
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed et sem leo. Nunc turpis arcu, porttitor arcu at,
                      vestibulum.
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Link href="#" className="text-primary hover:underline">
                        Categories
                      </Link>
                      <span>•</span>
                      <span>10 Des 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nasional;

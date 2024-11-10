import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="col-span-4">
      <div className="sticky inline-block float-right h-30 -top-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold">Berita Rekomendasi</h2>
        </div>
        <div className="flex flex-col">
          {[1, 2, 3].map((item) => (
            <Link href="/" key={item}>
              <article>
                <div className="py-5">
                  <div className="flex gap-2">
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Article thumbnail"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold">
                        This is example Title Page
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>Categories</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

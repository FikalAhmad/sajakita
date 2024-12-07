import Link from "next/link";
import Image from "next/image";
import thumbnail from "@/../public/thumbnail.png";
import SidebarAd from "./SidebarAd";

type SidebarProps = {
  marginTop: number;
};

const Sidebar = ({ marginTop }: SidebarProps) => {
  return (
    <div className={`hidden lg:block w-[400px] max-w-[400px] mt-${marginTop}`}>
      <div className="sticky top-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-3xl">Berita Rekomendasi</h2>
        </div>
        <div className="flex flex-col gap-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <article key={item}>
              <div className="flex gap-2">
                <Image
                  src={thumbnail}
                  alt="Article thumbnail"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1 space-y-2">
                  <Link href="/">
                    <h3 className="font-semibold">
                      This is example Title Page
                    </h3>
                  </Link>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span>Categories</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="my-10">
          <SidebarAd />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

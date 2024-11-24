import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

interface NavLink {
  name: string;
  url: string;
}

const navLinks: NavLink[] = [
  { name: "Nasional", url: "/kategori/nasional" },
  { name: "Teknologi", url: "/kategori/teknologi" },
  { name: "Gaya Hidup", url: "/kategori/gayahidup" },
  { name: "Bisnis", url: "/kategori/bisnis" },
  { name: "Infotainment", url: "/kategori/infotainment" },
];
const navLinks2: NavLink[] = [
  { name: "Nasional", url: "/kategori/nasional" },
  { name: "Teknologi", url: "/kategori/teknologi" },
  { name: "Gaya Hidup", url: "/kategori/gayahidup" },
  { name: "Bisnis", url: "/kategori/bisnis" },
  { name: "Infotainment", url: "/kategori/infotainment" },
  { name: "Internasional", url: "/kategori/internasional" },
  { name: "Olahraga", url: "/kategori/olahraga" },
  { name: "Kesehatan", url: "/kategori/kesehatan" },
];

const Navbar = () => {
  return (
    <nav className="bg-white py-5 flex gap-5 justify-between items-center">
      <div className="text-black text-2xl lg:text-4xl font-bold">
        <Link href="/">Sajakita</Link>
      </div>
      <div className="flex items-center justify-between gap-10">
        <ul className="hidden md:flex items-center gap-5 lg:gap-16">
          {navLinks.map((link) => (
            <li className="text-black text-xs lg:text-sm" key={link.name}>
              <Button variant={"link"} asChild>
                <a href={link.url}>{link.name}</a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Popover>
          <PopoverTrigger asChild className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 38 38"
              fill="black"
            >
              <path
                d="M3.16667 28.5C3.16667 26.061 3.16667 24.8414 3.71566 23.9455C4.02284 23.4442 4.44431 23.0228 4.94559 22.7156C5.84146 22.1667 7.06097 22.1667 9.5 22.1667C11.939 22.1667 13.1585 22.1667 14.0544 22.7156C14.5557 23.0228 14.9772 23.4442 15.2843 23.9455C15.8333 24.8414 15.8333 26.061 15.8333 28.5C15.8333 30.939 15.8333 32.1586 15.2843 33.0544C14.9772 33.5557 14.5557 33.9772 14.0544 34.2844C13.1585 34.8333 11.939 34.8333 9.5 34.8333C7.06097 34.8333 5.84146 34.8333 4.94559 34.2844C4.44431 33.9772 4.02284 33.5557 3.71566 33.0544C3.16667 32.1586 3.16667 30.939 3.16667 28.5Z"
                stroke="black"
                strokeWidth="1.25"
              />
              <path
                d="M22.1667 28.5C22.1667 26.061 22.1667 24.8414 22.7156 23.9455C23.0228 23.4442 23.4443 23.0228 23.9455 22.7156C24.8414 22.1667 26.061 22.1667 28.5 22.1667C30.939 22.1667 32.1586 22.1667 33.0545 22.7156C33.5557 23.0228 33.9772 23.4442 34.2844 23.9455C34.8333 24.8414 34.8333 26.061 34.8333 28.5C34.8333 30.939 34.8333 32.1586 34.2844 33.0544C33.9772 33.5557 33.5557 33.9772 33.0545 34.2844C32.1586 34.8333 30.939 34.8333 28.5 34.8333C26.061 34.8333 24.8414 34.8333 23.9455 34.2844C23.4443 33.9772 23.0228 33.5557 22.7156 33.0544C22.1667 32.1586 22.1667 30.939 22.1667 28.5Z"
                stroke="black"
                strokeWidth="1.25"
              />
              <path
                d="M3.16667 9.49999C3.16667 7.06096 3.16667 5.84144 3.71566 4.94558C4.02284 4.4443 4.44431 4.02283 4.94559 3.71565C5.84146 3.16666 7.06097 3.16666 9.5 3.16666C11.939 3.16666 13.1585 3.16666 14.0544 3.71565C14.5557 4.02283 14.9772 4.4443 15.2843 4.94558C15.8333 5.84144 15.8333 7.06096 15.8333 9.49999C15.8333 11.939 15.8333 13.1585 15.2843 14.0544C14.9772 14.5557 14.5557 14.9772 14.0544 15.2843C13.1585 15.8333 11.939 15.8333 9.5 15.8333C7.06097 15.8333 5.84146 15.8333 4.94559 15.2843C4.44431 14.9772 4.02284 14.5557 3.71566 14.0544C3.16667 13.1585 3.16667 11.939 3.16667 9.49999Z"
                stroke="black"
                strokeWidth="1.25"
              />
              <path
                d="M22.1667 9.49999C22.1667 7.06096 22.1667 5.84144 22.7156 4.94558C23.0228 4.4443 23.4443 4.02283 23.9455 3.71565C24.8414 3.16666 26.061 3.16666 28.5 3.16666C30.939 3.16666 32.1586 3.16666 33.0545 3.71565C33.5557 4.02283 33.9772 4.4443 34.2844 4.94558C34.8333 5.84144 34.8333 7.06096 34.8333 9.49999C34.8333 11.939 34.8333 13.1585 34.2844 14.0544C33.9772 14.5557 33.5557 14.9772 33.0545 15.2843C32.1586 15.8333 30.939 15.8333 28.5 15.8333C26.061 15.8333 24.8414 15.8333 23.9455 15.2843C23.4443 14.9772 23.0228 14.5557 22.7156 14.0544C22.1667 13.1585 22.1667 11.939 22.1667 9.49999Z"
                stroke="black"
                strokeWidth="1.25"
              />
            </svg>
          </PopoverTrigger>
          <PopoverContent
            className="w-screen bg-white rounded-lg mt-5"
            align={"center"}
            // collisionPadding={{ right: 200 }}
          >
            <div className="container mx-auto">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {navLinks2.map((link) => (
                  <li key={link.name}>
                    <Button variant="link" asChild>
                      <Link href={link.url} className="text-sm">
                        {link.name}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="relative hidden md:block">
        <Input
          type="search"
          className="pl-4 pr-8 border-0 rounded-full bg-slate-200"
          placeholder="Search..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={23}
          height={23}
          color={"#000000"}
          fill={"none"}
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        >
          <path
            d="M17.5 17.5L22 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;

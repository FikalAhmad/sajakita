import Bisnis from "./bisnis";
import Entertainment from "./entertainment";
import Nasional from "./nasional";
import Sidebar from "./sidebar";

export default function Other() {
  return (
    <div className="mt-5 grid grid-cols-12 gap-5 w-full">
      <div className="col-span-8">
        <Entertainment />
        <Nasional />
        <Bisnis />
      </div>
      <Sidebar />
    </div>
  );
}

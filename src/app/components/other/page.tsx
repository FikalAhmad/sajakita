import Bisnis from "./Bisnis";
import Entertainment from "./Entertainment";
import Nasional from "./Nasional";
import Sidebar from "../Sidebar";

const Other = () => {
  return (
    <div className="mt-5 grid grid-cols-12 gap-5 w-full my-5">
      <div className="col-span-8">
        <Entertainment />
        <Nasional />
        <Bisnis />
      </div>
      <Sidebar />
    </div>
  );
}

export default Other;
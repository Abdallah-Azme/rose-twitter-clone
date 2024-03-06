import Followbar from "@/components/followbar/Followbar";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-4 h-full">
      <Sidebar />
      <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
        <Header label="Home" />
      </div>
      <Followbar />
    </div>
  );
}

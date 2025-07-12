import NetworkGraph from "@/components/NetworkGraph";
import { data } from "@/utils/data";

const Home = () => {
  return (
    <main className="h-screen w-full bg-gradient-to-br from-slate-900 to-gray-800 text-white flex flex-col">
        <header className="p-6 text-center">
          <h1 className="text-3xl font-bold">Network Graph Demo</h1>
          <p className="text-sm text-gray-300 mt-1">
            Built with React, D3, and Tailwind CSS
          </p>
        </header>

        <div className="flex-1 relative">
          <div className="absolute inset-0">
            <NetworkGraph data={data} />
          </div>
        </div>
      </main>
  );
};

export default Home;

import { Sprout } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Sprout size={48} className="mr-2" />
          <h1 className="text-3xl md:text-3xl font-bold ">
            Smart Greenhouse Communication for Urban Market Integration
          </h1>
        </div>
        <p className="text-xl md:text-xl text-green-100">
          Providing Real-Time Crop Data to Optimize Harvest and Order Placement
        </p>
      </div>
    </header>
  );
}

import { HardwareComponent } from '../../types/hardware';

interface HardwareCardProps {
  component: HardwareComponent;
}

export default function HardwareCard({ component }: HardwareCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img
        src={component.imageUrl}
        alt={component.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{component.name}</h3>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
            ৳{component.price}
          </span>
        </div>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
          {component.category}
        </span>
        <p className="text-gray-600 mb-4">{component.description}</p>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-gray-700">
            Specifications:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {component.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
import { hardwareComponents } from '../../data/hardwareComponents';
import HardwareCard from './HardwareCard';
import { useState } from 'react';

export default function HardwareSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'sensor', 'controller', 'power', 'communication', 'actuator', 'display'];

  const filteredComponents = selectedCategory === 'all'
    ? hardwareComponents
    : hardwareComponents.filter(component => component.category === selectedCategory);

  return (
    <section id="hardware" className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-8">Hardware Components</h2>
      
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredComponents.map((component) => (
          <HardwareCard key={component.id} component={component} />
        ))}
      </div>
    </section>
  );
}
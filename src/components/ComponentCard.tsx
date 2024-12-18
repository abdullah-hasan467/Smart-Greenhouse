interface ComponentCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ComponentCard({ title, description, price, imageUrl }: ComponentCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-green-600 font-bold">${price}</p>
      </div>
    </div>
  );
}
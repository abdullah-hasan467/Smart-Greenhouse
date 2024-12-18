export interface HardwareComponent {
  id: string;
  name: string;
  category: 'sensor' | 'controller' | 'power' | 'communication' | 'actuator' | 'display';
  price: number;
  description: string;
  specifications: string[];
  imageUrl: string;
  voltage?: string;
  current?: string;
  dimensions?: string;
}
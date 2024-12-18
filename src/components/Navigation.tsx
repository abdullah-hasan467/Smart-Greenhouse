import NavigationLink from './navigation/NavigationLink';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          <NavigationLink href="#components">Components</NavigationLink>
          <NavigationLink href="#features">Features</NavigationLink>
          <NavigationLink href="#team">Team</NavigationLink>
          <NavigationLink href="#contact">Contact</NavigationLink>
        </div>
      </div>
    </nav>
  );
}
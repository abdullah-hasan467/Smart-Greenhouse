interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavigationLink({ href, children }: NavigationLinkProps) {
  return (
    <a 
      href={href} 
      className="hover:text-green-400 transition-colors"
    >
      {children}
    </a>
  );
}
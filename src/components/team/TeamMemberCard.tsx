import { TeamMember } from '../../types/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img 
        src={member.imageUrl} 
        alt={member.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-gray-600 mb-2">{member.role}</p>
        <div className="space-y-1 text-sm text-gray-500">
          <p>UID: {member.uid}</p>
          <p>Department: {member.department}</p>
        </div>
      </div>
    </div>
  );
}
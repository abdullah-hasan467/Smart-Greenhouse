import { teamMembers } from '../../data/teamMembers';
import TeamMemberCard from './TeamMemberCard';

export default function TeamSection() {
  return (
    <section id="team" className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.uid} member={member} />
        ))}
      </div>
    </section>
  );
}
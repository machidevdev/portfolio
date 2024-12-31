import ExpCard from './expCard';
import { useAtom } from 'jotai';
import { selectedItemAtom, virtualPathAtom } from '@/lib/atoms';

export default function ProjectList() {
  const [, setSelectedItem] = useAtom(selectedItemAtom);
  const [, setVirtualPath] = useAtom(virtualPathAtom);

  const handleProjectClick = (project: string) => {
    setSelectedItem(`Projects/${project}`);
    setVirtualPath(`/src/Projects/${project}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="grid gap-4">
        <ExpCard
          title="Project 1"
          description="A cool project"
          onClick={() => handleProjectClick('Project-1')}
        />
        <ExpCard
          title="Project 2"
          description="Another cool project"
          onClick={() => handleProjectClick('Project-2')}
        />
      </div>
    </div>
  );
}

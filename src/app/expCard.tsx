import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ExpCardProps {
  title: string;
  description: string;
  onClick?: () => void;
  selected?: boolean;
}

export default function ExpCard({
  title,
  description,
  onClick,
  selected,
}: ExpCardProps) {
  return (
    <Card
      className={`cursor-pointer ${
        selected ? 'bg-accent' : 'hover:bg-accent/10'
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription className={selected ? 'text-foreground' : ''}>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

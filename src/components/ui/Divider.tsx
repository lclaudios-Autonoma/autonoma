import { cn } from '../../lib/cn';

interface Props {
  className?: string;
}

export default function Divider({ className }: Props) {
  return <div className={cn('divider-hairline w-full my-12', className)} aria-hidden />;
}

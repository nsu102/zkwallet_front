import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0 relative w-32 h-8 md:w-40 md:h-10">
      <Image
        src="/imgs/zkvoting_logo_gradient.avif"
        alt="zkVoting"
        fill
        objectFit='contain'
        priority
      />
    </Link>
  );
}

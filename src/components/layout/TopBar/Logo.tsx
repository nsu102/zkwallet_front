import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/imgs/zkvoting_logo_gradient.avif"
        alt="zkVoting"
        width={140}
        height={40}
        priority
      />
    </Link>
  );
}

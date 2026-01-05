import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link
      href="https://admin.zkvoting.com/login"
      className="px-3 md:px-8 py-2 bg-[#9B8BFA] hover:bg-primary-hover text-white rounded-lg font-semibold transition-colors text-sm md:text-base whitespace-nowrap"
    >
      로그인
    </Link>
  );
}

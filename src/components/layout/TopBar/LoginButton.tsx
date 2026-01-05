import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link
      href="/login"
      className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold transition-colors"
    >
      로그인
    </Link>
  );
}

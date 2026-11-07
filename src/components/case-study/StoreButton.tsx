import Link from "next/link";
import { Apple, PlayCircle } from "lucide-react";

interface StoreButtonProps {
  kind: "ios" | "android";
  href: string;
}

export default function StoreButton({ kind, href }: StoreButtonProps) {
  const isIos = kind === "ios";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-[#0B0F17] transition-transform duration-200 hover:-translate-y-0.5"
    >
      {isIos ? <Apple size={20} /> : <PlayCircle size={20} />}
      <span className="text-left leading-tight">
        <span className="block text-[9px] uppercase tracking-wide text-[#0B0F17]/60">
          {isIos ? "Download on the" : "Get it on"}
        </span>
        <span className="block text-sm font-semibold">
          {isIos ? "App Store" : "Google Play"}
        </span>
      </span>
    </Link>
  );
}
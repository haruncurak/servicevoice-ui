import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import ServiceVoiceLogoBlue from "./ServiceVoiceLogoBlue";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
        </a>
        <span className="border-l rotate-45 h-6" />
          <ServiceVoiceLogoBlue />
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}

import { NavBar } from "@/components/layouts/NavBar";
import { Providers } from "@/components/layouts/Providers";
import LogoFathSchool from "@/assets/Logo FathSchool Light.png";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <NavBar />
      <div className="container pt-8 pb-12">{children}</div>

      <footer className="px-4">
        <div className="container py-8">
          <Image src={LogoFathSchool.src} alt="logo" blurDataURL={LogoFathSchool.blurDataURL} width={170} height={170} />
        </div>
      </footer>
    </Providers>
  );
}
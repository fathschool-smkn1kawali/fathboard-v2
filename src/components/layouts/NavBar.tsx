"use client";

import { useEffect, useState } from "react";
import { useGetData } from "@/lib/hooks/GET/useGetData";
import { getCurrentDate, getCurrentTime } from "@/lib/utils/moment";
import { useTheme } from "@/lib/utils/useTheme";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { RefreshCw, Monitor, Sun, Moon, User } from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export const NavBar = () => {
  const { data } = useGetData("others");
  const quotes = data?.data?.data?.quote_of_the_day;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [hasOpenedModal, setHasOpenedModal] = useState(false);

  useEffect(() => {
    if (!hasOpenedModal) {
      setTimeout(() => {
        onOpen();
        setHasOpenedModal(true);
      }, 500); // Delay agar tidak langsung terbuka
    }
  }, [hasOpenedModal, onOpen]);

  const marqueeText =
    quotes?.join("  •  ") || "Selamat datang di SMKN 1 Kawali!";

  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-xl px-8 transition-colors">
      <div className="container flex sm:justify-between items-center gap-2 flex-col sm:flex-row py-6 border-b">
        {/* Logo Sekolah */}
        <div className="flex items-center gap-4">
          <Image
            src="/Logo SMKN 1 Kawali.png"
            alt="logo"
            width={60}
            height={60}
            priority
          />
          <h5 className="text-black dark:text-white">SMKN 1 Kawali</h5>
        </div>

        {/* Marquee Text (Desktop) */}
        <div className="w-full lg:w-2/5 sm:hidden lg:block">
          <Marquee speed={50} gradient={false}>
            {marqueeText}
          </Marquee>
        </div>

        {/* Waktu & Tombol */}
        <div className="flex items-center gap-4">
          <p className="text-center text-black dark:text-white line-clamp-1">
            {getCurrentTime()} | {getCurrentDate()}
          </p>
          <Button isIconOnly variant="light" onPress={toggleDarkMode}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button isIconOnly variant="light">
            <User size={20} />
          </Button>
          <button
            onClick={onOpen}
            className="p-2 rounded-full bg-gradient-to-r from-[#5A9BFF] to-[#3036A0] hover:opacity-80 transition"
          >
            <RefreshCw size={22} className="text-white" />
          </button>
        </div>
      </div>

      {/* Marquee Text (Mobile) */}
      <div className="w-full hidden sm:block mt-4 lg:hidden">
        <Marquee speed={50} gradient={false}>
          {marqueeText}
        </Marquee>
      </div>

      {/* Modal Pilihan Dashboard */}
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent className="py-8 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 transition-colors">
          <ModalBody>
            <p className="text-center text-2xl sm:text-3xl font-bold mb-6 text-black dark:text-white">
              Pilih Dashboard yang Ingin Dilihat:
            </p>

            {/* Grid Card */}
            <div className="grid grid-cols-3 gap-10 mt-6 px-6">
              {[
                { href: "/", label: "Absensi" },
                { href: "/kbm", label: "KBM" },
                { href: "/iot", label: "IoT" },
              ].map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  prefetch={false}
                  legacyBehavior
                >
                  <a className="w-full">
                    <div className="cursor-pointer rounded-2xl p-8 shadow-lg flex flex-col items-center w-full h-56 sm:h-64 bg-gradient-to-r from-[#5A9BFF] to-[#3036A0] text-white hover:opacity-90 transition">
                      <Monitor size={90} className="text-white" />
                      <p className="mt-6 text-xl sm:text-2xl font-bold">
                        {item.label}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </nav>
  );
};

"use client";

import { Information } from "@/components/pages/home/Information";
import { InformationClass } from "@/components/pages/home/InformationClass";

export default function Page() {

  return (
    <>
      {/* Information, Absence, Attendance and Leave */}
      <Information />

      {/* Information, Classroom */}
      <InformationClass/>
    </>
  );
}

"use client";
import CardInfoCondition from "@/components/fragments/CardInfoCondition";
import { useGetCondition } from "@/lib/hooks/GET/useCondition";
import { Card } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";

const InfoCondition = () => {
  const { Condition, ConditionLoad, ConditionError } = useGetCondition();
  console.log("Data dari API:", Condition);


  return (
    <main className="space-y-6">
      <div>
        <h4>Info Kondisi Sekolah</h4>
        <p>Pantau kondisi lingkungan sekolah secara real-time.</p>

        <Tabs aria-label="Informasi Kondisi" className="mt-4" variant="underlined">
          <Tab key="kondisi-saat-ini" title="Kondisi Saat Ini">
            {ConditionLoad ? (
              <p className="text-gray-500">Memuat data kondisi...</p>
            ) : ConditionError ? (
              <p className="text-red-500">Gagal memuat data kondisi!</p>
            ) : (
              <CardInfoCondition {...Condition} />
            )}
          </Tab>
          <Tab key="status-perangkat" title="Status Perangkat" isDisabled />
        </Tabs>
      </div>

      <div>
        <h4>Lihat CCTV Sekolah</h4>
        <p>Pantau kondisi lingkungan sekolah secara real-time.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="h-52 shadow-md border" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default InfoCondition;

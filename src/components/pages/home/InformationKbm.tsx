
import { EmptyCard } from "@/components/fragments/CardEmpty";
import { KbmCard } from "@/components/fragments/CardKbm";
import ChartActiveEmptyClass from "@/components/fragments/ChartActiveEmptyClass";
import { ClassActiveModal } from "@/components/fragments/ClassActiveModal";
import { ClassEmptyModal } from "@/components/fragments/ClassEmptyModal";
import { useGetData } from "@/lib/hooks/GET/useGetData";
import { Spinner, useDisclosure } from "@nextui-org/react";

export const InformationKbm = () => {
  const { data, isLoading } = useGetData("class");

  const gradeX = data?.data?.data.classes[0];
  const gradeXActiveModal = useDisclosure();
  const gradeXEmptyModal = useDisclosure();

  const gradeXI = data?.data?.data.classes[1];
  const gradeXIActiveModal = useDisclosure();
  const gradeXIEmptyModal = useDisclosure();

  const gradeXII = data?.data?.data.classes[2];
  const gradeXIIActiveModal = useDisclosure();
  const gradeXIIEmptyModal = useDisclosure();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Kbm Cards */}
        <KbmCard 
          gradeData={gradeX} 
          onActiveClassClick={gradeXActiveModal.onOpen} 
          onEmptyClassClick={gradeXEmptyModal.onOpen} 
        />
        <KbmCard 
          gradeData={gradeXI} 
          onActiveClassClick={gradeXIActiveModal.onOpen} 
          onEmptyClassClick={gradeXIEmptyModal.onOpen} 
        />
        <KbmCard 
          gradeData={gradeXII} 
          onActiveClassClick={gradeXIIActiveModal.onOpen} 
          onEmptyClassClick={gradeXIIEmptyModal.onOpen} 
        />

        {/* Chart Sejajar dengan Kbm Cards */}
        <ChartActiveEmptyClass gradeData={gradeX} />
        <ChartActiveEmptyClass gradeData={gradeXI} />
        <ChartActiveEmptyClass gradeData={gradeXII} />

        <EmptyCard gradeData={gradeX} onEmptyClassClick={gradeXEmptyModal.onOpen}/>
        <EmptyCard gradeData={gradeXI} onEmptyClassClick={gradeXIEmptyModal.onOpen}/>
        <EmptyCard gradeData={gradeXII} onEmptyClassClick={gradeXIIEmptyModal.onOpen}/>
      </div>

      {/* Modal Kelas Aktif */}
      <ClassActiveModal
        isOpen={gradeXActiveModal.isOpen}
        onOpenChange={gradeXActiveModal.onOpenChange}
        gradeData={gradeX}
      />
      <ClassActiveModal
        isOpen={gradeXIActiveModal.isOpen}
        onOpenChange={gradeXIActiveModal.onOpenChange}
        gradeData={gradeXI}
      />
      <ClassActiveModal
        isOpen={gradeXIIActiveModal.isOpen}
        onOpenChange={gradeXIIActiveModal.onOpenChange}
        gradeData={gradeXII}
      />

      {/* Modal Kelas Kosong */}
      <ClassEmptyModal
        isOpen={gradeXEmptyModal.isOpen}
        onOpenChange={gradeXEmptyModal.onOpenChange}
        gradeData={gradeX}
      />
      <ClassEmptyModal
        isOpen={gradeXIEmptyModal.isOpen}
        onOpenChange={gradeXIEmptyModal.onOpenChange}
        gradeData={gradeXI}
      />
      <ClassEmptyModal
        isOpen={gradeXIIEmptyModal.isOpen}
        onOpenChange={gradeXIIEmptyModal.onOpenChange}
        gradeData={gradeXII}
      />
    </div>
  );
};
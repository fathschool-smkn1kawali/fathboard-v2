import { GradeCard } from "@/components/fragments/CardGrade";
import { ClassDetailModal } from "@/components/fragments/ClassDetailModal";
import { useGetData } from "@/lib/hooks/GET/useGetData";
import { useDisclosure } from "@nextui-org/react";

export const InformationClass = () => {
  const { data } = useGetData('class');

  const gradeX = data?.data?.data.classes[0] 
  const gradeXModal = useDisclosure();

  const gradeXI = data?.data?.data.classes[1] 
  const gradeXIModal = useDisclosure();
  
  const gradeXII = data?.data?.data.classes[2] 
  const gradeXIIModal = useDisclosure();


  // useGetData By Class Level and Mayor 

  return (
    <div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <GradeCard gradeData={gradeX} onClick={gradeXModal.onOpen} />
        <GradeCard gradeData={gradeXI} onClick={gradeXIModal.onOpen} />
        <GradeCard gradeData={gradeXII} onClick={gradeXIIModal.onOpen} />
      </div>

      {/* Grade Level Modals */}
      <ClassDetailModal
        isOpen={gradeXModal.isOpen}
        onOpenChange={gradeXModal.onOpenChange}
        gradeData={gradeX}
      />

      <ClassDetailModal
        isOpen={gradeXIModal.isOpen}
        onOpenChange={gradeXIModal.onOpenChange}
        gradeData={gradeXI}
      />

      <ClassDetailModal
        isOpen={gradeXIIModal.isOpen}
        onOpenChange={gradeXIIModal.onOpenChange}
        gradeData={gradeXII}
      />
      
    </div>
  );
};

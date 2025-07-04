export type Response = {
  status: number,
  message: string,
  data: {

    students: {
      total: number
      present: number
      absent: number
      leave: number
      presentPercentage: number
      absentPercentage: number
      leavePercentage: number
      dataPresent: [
        {
          id: number,
          name: string,
          // ...
        }
      ],
      dataAbsent: [
        {
          id: number,
          name: string,
          // ...
        }
      ],
      dataLeave: [
        {
          id: number,
          name: string,
          // ...
        }
      ]
    }

    // ...
    
    classes: [ // list of classes ex: [X, XI, XII]
      {
        id: number,
        name: string // class name, ex: 'X'
        kelasKosong: number
        totalAllSiswaClass: number // total siswa class X
        data: [
          {
            id: number,
            nameClass: string // class x name, ex: 'X RPL 1'
            total_student_attendance: number // total kehadiran
            total_student_absent: number // total tidak hadir
            total_student_leave: number // total izin
          },
          {
            id: number,
            nameClass: string // class x name, ex: 'X TKJ 1'
            // ...
          }
        ],
      },
      {
        id: number,
        name: string // class name, ex: 'XI'
        kelasKosong: number
        totalAllSiswaClass: number
        data: [
          {
            id: number,
            nameClass: string // class xi name, ex: 'XI AKL 1'
            total_student_attendance: number // total kehadiran
          },
          {
            id: number,
            nameCLass: string // class xi name, ex: 'XI TKJ 1'
            total_student_attendance: number
          }
        ],
      }
    ]
  }
}


// Interface untuk setiap item kelas individu
export interface ClassData {
  id: number;
  name: string;
  status: string;
  teacher: string;
  lesson: string;

  students_present: {
    total_student_present: number;
    data: Student[]
  };

  students_absent: {
    total_student_absent: number;
    data: Student[]
  };

  students_leave: { 
    total_student_leave: number;
    data: Student[]
  };
}

export interface Student {
  id: number;
  name: string;
  status: string;
}

// Interface untuk data level kelas
export interface Class {
  id: number;
  name: string;
  total_present: number;
  total_absent: number;
  total_leave: number;
  percentage_present: string;
  percentage_absent: string;
  percentage_leave: string;
  percentage_active_class: string;
  percentage_empty_class: string;
  active_class: number;
  empty_class: number;
  total_class: number;
  total_students: number;
  data: ClassData[];
}

// Interface untuk response utama
export interface ResponseClass {
  status: boolean;
  messages: string;
  data: {
    classes: Class[];
  };
}

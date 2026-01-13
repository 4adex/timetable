export interface CourseEvent {
  type?: "L" | "T" // Lecture or Tutorial
  code: string
  batch?: string
  faculty?: string
  location?: string
}

export interface TimeSlot {
  time: string
  monday: CourseEvent[]
  tuesday: CourseEvent[]
  wednesday: CourseEvent[]
  thursday: CourseEvent[]
  friday: CourseEvent[]
}

export const timetableData: TimeSlot[] = [
  {
    time: "08.00-08.55",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  },
  {
    time: "09.00-09.55",
    monday: [{ type: "L", code: "HSS-301", batch: "Batch 1", faculty: "Aparajita Singh", location: "APJ AKB-003" }],
    tuesday: [{ type: "L", code: "HSS-301", batch: "Batch 1", faculty: "Aparajita Singh", location: "APJ AKB-003" }],
    wednesday: [],
    thursday: [{ type: "T", code: "HSS-301", batch: "Batch 1", faculty: "Aparajita Singh", location: "APJ AKB-005" }],
    friday: [],
  },
  {
    time: "10.00-10.55",
    monday: [],
    tuesday: [{ type: "T", code: "MAC-302", batch: "MA1, MA2", faculty: "Ram Jiwari", location: "" }],
    wednesday: [{ type: "T", code: "MAT-106", batch: "Batch 1", faculty: "Chaman Kumar", location: "" }],
    thursday: [],
    friday: [],
  },
  {
    time: "11.05-12.00",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  },
  {
    time: "12.05-13.00",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  },
  {
    time: "13.00-14.00",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  },
  {
    time: "14.00-14.55",
    monday: [{ type: "L", code: "MAC-302", batch: "Batch 1", faculty: "Ram Jiwari", location: "GB-003" }],
    tuesday: [{ type: "L", code: "MAC-302", batch: "Batch 1", faculty: "Ram Jiwari", location: "GB-003" }],
    wednesday: [{ type: "L", code: "MAT-106", batch: "Batch 1", faculty: "Chaman Kumar", location: "GB-303" }],
    thursday: [{ type: "L", code: "MAC-302", batch: "Batch 1", faculty: "Ram Jiwari", location: "GB-003" }],
    friday: [{ type: "L", code: "MAT-106", batch: "Batch 1", faculty: "Chaman Kumar", location: "GB-303" }],
  },
  {
    time: "15.00-15.55",
    monday: [],
    tuesday: [{ type: "L", code: "MAT-106", batch: "Batch 1", faculty: "Chaman Kumar", location: "GB-303" }],
    wednesday: [],
    thursday: [],
    friday: [],
  },
  {
    time: "16.05-17.00",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  },
  {
    time: "17.05-18.00",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  },
  {
    time: "18.05-19.00",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  },
]

export interface CourseDetail {
  semester: string
  programName: string
  subBatch: string
  subjectArea: string
  subjectCodeSlot: string
  subjectName: string
  lectureHallNo: string
  facultyName: string
  credit: number
}

export const courseDetailsData: CourseDetail[] = [
  {
    semester: "Third Year - 2nd Sem (Spring)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "HSSEC",
    subjectCodeSlot: "HSS-301 [G0G2]",
    subjectName: "Indian Economy",
    lectureHallNo: "APJ AKB-003",
    facultyName: "Aparajita Singh",
    credit: 3,
  },
  {
    semester: "Third Year - 2nd Sem (Spring)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "PCC",
    subjectCodeSlot: "MAC-300 []",
    subjectName: "Lab/Industry Based Project",
    lectureHallNo: "",
    facultyName: "",
    credit: 4,
  },
  {
    semester: "Third Year - 2nd Sem (Spring)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "PCC",
    subjectCodeSlot: "MAC-302 [A2]",
    subjectName: "Theory of Differential Equations",
    lectureHallNo: "GB-003",
    facultyName: "Ram Jiwari",
    credit: 4,
  },
  {
    semester: "Third Year - 2nd Sem (Spring)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "TEB",
    subjectCodeSlot: "MAT-106 [F2]",
    subjectName: "Financial Risk Management",
    lectureHallNo: "GB-303",
    facultyName: "Chaman Kumar",
    credit: 4,
  },
]

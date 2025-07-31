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
    monday: [{ type: "L", code: "CSO-101", batch: "Batch 1", faculty: "Manoj Mishra", location: "APJ AKB-206" }],
    tuesday: [],
    wednesday: [{ type: "L", code: "CSO-101", batch: "Batch 1", faculty: "Manoj Mishra", location: "APJ AKB-206" }],
    thursday: [],
    friday: [{ type: "L", code: "CSO-101", batch: "Batch 1", faculty: "Manoj Mishra", location: "APJ AKB-206" }],
  },
  {
    time: "09.00-09.55",
    monday: [
      { type: "T", code: "MAL-545", batch: "Batch 1", location: "GB-314" },
      { type: "T", code: "MAL-545", batch: "Batch 1", location: "GB-314" },
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [{ type: "T", code: "CSO-101", batch: "Batch 1", faculty: "Manoj Mishra", location: "APJ AKB-206" }],
  },
  {
    time: "10.00-10.55",
    monday: [
      { type: "T", code: "MAL-545", batch: "Batch 2" },
      { type: "T", code: "MAL-545", batch: "Batch 2" },
    ],
    tuesday: [{ type: "T", code: "MAC-301", batch: "MA1MA2", faculty: "Maheshanand", location: "GB-206" }],
    wednesday: [{ type: "T", code: "MAC-351", batch: "MA1MA2", faculty: "Chaman Kumar", location: "GB-104" }],
    thursday: [],
    friday: [],
  },
  {
    time: "11.05-12.00",
    monday: [{ type: "T", code: "MAL-544", batch: "Batch 1", faculty: "Aditi Gangopadhyay", location: "APJ AKB-602" }],
    tuesday: [],
    wednesday: [{ type: "T", code: "MAL-415", batch: "Batch 1", faculty: "Sanjeev Kumar", location: "GB-101" }],
    thursday: [],
    friday: [],
  },
  {
    time: "12.05-13.00",
    monday: [{ type: "T", code: "MAL-544", batch: "Batch 2", location: "APJ AKB-602" }],
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
    monday: [{ type: "L", code: "MAT-105", batch: "Batch 1", faculty: "Aditi Gangopadhyay" }],
    tuesday: [{ type: "L", code: "MAT-105", batch: "Batch 1", faculty: "Aditi Gangopadhyay" }],
    wednesday: [{ type: "L", code: "MAL-545", batch: "Batch 1", faculty: "Chaman Kumar", location: "GB-201" }],
    thursday: [{ type: "L", code: "MAT-105", batch: "Batch 1", faculty: "Aditi Gangopadhyay" }],
    friday: [{ type: "L", code: "MAL-545", batch: "Batch 1", faculty: "Chaman Kumar", location: "GB-201" }],
  },
  {
    time: "15.00-15.55",
    monday: [{ type: "L", code: "MAC-301", batch: "Batch 1", faculty: "Maheshanand", location: "GB-204" }],
    tuesday: [{ type: "L", code: "MAL-545", batch: "Batch 1", faculty: "Chaman Kumar", location: "GB-201" }],
    wednesday: [{ type: "L", code: "MAC-301", batch: "Batch 1", faculty: "Maheshanand", location: "GB-204" }],
    thursday: [],
    friday: [{ type: "L", code: "MAC-301", batch: "Batch 1", faculty: "Maheshanand", location: "GB-204" }],
  },
  {
    time: "16.05-17.00",
    monday: [{ type: "L", code: "MAC-351", batch: "Batch 1", faculty: "Chaman Kumar", location: "GB-204" }],
    tuesday: [],
    wednesday: [],
    thursday: [{ type: "L", code: "MAC-351", batch: "Batch 1", faculty: "Chaman Kumar", location: "GB-204" }],
    friday: [{ type: "L", code: "MAC-351", batch: "Batch 1", faculty: "Chaman Kumar", location: "GB-204" }],
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
    semester: "Third Year - 1st Sem (Autumn)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "OEC",
    subjectCodeSlot: "CSO-101 [X]",
    subjectName: "System Software",
    lectureHallNo: "APJ AKB-206",
    facultyName: "Manoj Mishra",
    credit: 3,
  },
  {
    semester: "Third Year - 1st Sem (Autumn)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "PCC",
    subjectCodeSlot: "MAC-301 [C2]",
    subjectName: "Basic Abstract Algebra",
    lectureHallNo: "GB-204",
    facultyName: "Maheshanand",
    credit: 4,
  },
  {
    semester: "Third Year - 1st Sem (Autumn)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "PCC",
    subjectCodeSlot: "MAC-351 [D2]",
    subjectName: "Fundamentals of AI/ML",
    lectureHallNo: "GB-204",
    facultyName: "Chaman Kumar",
    credit: 2,
  },
  {
    semester: "Third Year - 1st Sem (Autumn)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "CORE",
    subjectCodeSlot: "MAC-399 []",
    subjectName: "Community Outreach",
    lectureHallNo: "",
    facultyName: "Chaman Kumar",
    credit: 2,
  },
  {
    semester: "Third Year - 1st Sem (Autumn)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "PEC",
    subjectCodeSlot: "MAL-545 [F2]",
    subjectName: "Stochastic Differential Equations",
    lectureHallNo: "GB-201",
    facultyName: "Chaman Kumar",
    credit: 4,
  },
  {
    semester: "Third Year - 1st Sem (Autumn)",
    programName: "BS-MS (MATHEMATICS AND COMPUTING)",
    subBatch: "MA1",
    subjectArea: "TEB",
    subjectCodeSlot: "MAT-105 [A2]",
    subjectName: "Financial Mathematics",
    lectureHallNo: "",
    facultyName: "Aditi Gangopadhyay",
    credit: 4,
  },
]

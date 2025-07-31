import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { timetableData, courseDetailsData, type CourseEvent } from "@/lib/data"

export default function TimetablePage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  const renderCourseEvent = (event: CourseEvent) => (
    <div key={`${event.code}-${event.batch}-${event.location}`} className="text-sm leading-tight">
      <span className={`font-medium ${event.type === "L" ? "text-ctp-lavender" : "text-ctp-green"}`}>
        {event.type} {event.code} {event.batch}
      </span>
      {event.faculty && <span className="block text-muted-foreground">{event.faculty}</span>}
      {event.location && <span className="block text-muted-foreground">{event.location}</span>}
    </div>
  )

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-8">University Timetable</h1>

      <Card className="mb-8 bg-card border-border">
        <CardHeader className="bg-muted/20 border-b border-border">
          <CardTitle className="text-xl text-foreground">Weekly Schedule</CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <Table className="min-w-[900px] table-fixed">
            <TableHeader className="bg-muted/30">
              <TableRow className="border-b border-border">
                <TableHead className="w-[120px] sm:w-[150px] text-foreground font-bold sticky left-0 bg-muted/30 z-10">
                  Time/Day
                </TableHead>
                {days.map((day) => (
                  <TableHead key={day} className="min-w-[150px] text-foreground font-bold">
                    {day}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {timetableData.map((slot, index) => (
                <TableRow
                  key={slot.time}
                  className={`border-b border-border ${index % 2 === 0 ? "bg-card" : "bg-background"}`}
                >
                  <TableCell className="font-medium text-foreground sticky left-0 bg-inherit z-10">
                    {slot.time}
                  </TableCell>
                  <TableCell>
                    {slot.monday.length > 0 ? (
                      slot.monday.map(renderCourseEvent)
                    ) : slot.time === "13.00-14.00" ? (
                      <span className="font-bold text-center block text-foreground">LUNCH</span>
                    ) : null}
                  </TableCell>
                  <TableCell>{slot.tuesday.length > 0 ? slot.tuesday.map(renderCourseEvent) : null}</TableCell>
                  <TableCell>{slot.wednesday.length > 0 ? slot.wednesday.map(renderCourseEvent) : null}</TableCell>
                  <TableCell>{slot.thursday.length > 0 ? slot.thursday.map(renderCourseEvent) : null}</TableCell>
                  <TableCell>{slot.friday.length > 0 ? slot.friday.map(renderCourseEvent) : null}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader className="bg-muted/20 border-b border-border">
          <CardTitle className="text-xl text-foreground">Course Details</CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <Table className="min-w-full table-auto">
            <TableHeader className="bg-muted/30">
              <TableRow className="border-b border-border">
                <TableHead className="text-foreground font-bold min-w-[150px]">Semester</TableHead>
                <TableHead className="text-foreground font-bold min-w-[200px]">Program Name</TableHead>
                <TableHead className="text-foreground font-bold min-w-[100px]">Sub Batch</TableHead>
                <TableHead className="text-foreground font-bold min-w-[120px]">Subject Area</TableHead>
                <TableHead className="text-foreground font-bold min-w-[150px]">Subject Code & Slot</TableHead>
                <TableHead className="text-foreground font-bold min-w-[200px]">Subject Name</TableHead>
                <TableHead className="text-foreground font-bold min-w-[150px]">Lecture Hall No.</TableHead>
                <TableHead className="text-foreground font-bold min-w-[150px]">Faculty Name</TableHead>
                <TableHead className="text-foreground font-bold min-w-[80px]">Credit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courseDetailsData.map((detail, index) => (
                <TableRow
                  key={detail.subjectCodeSlot}
                  className={`border-b border-border ${index % 2 === 0 ? "bg-card" : "bg-background"}`}
                >
                  <TableCell className="text-sm text-foreground">{detail.semester}</TableCell>
                  <TableCell className="text-sm text-foreground">{detail.programName}</TableCell>
                  <TableCell className="text-sm text-foreground">{detail.subBatch}</TableCell>
                  <TableCell className="text-sm text-foreground">{detail.subjectArea}</TableCell>
                  <TableCell className="text-sm text-foreground">{detail.subjectCodeSlot}</TableCell>
                  <TableCell className="text-sm text-foreground">{detail.subjectName}</TableCell>
                  <TableCell className="text-sm text-foreground">{detail.lectureHallNo}</TableCell>
                  <TableCell className="text-sm text-foreground">{detail.facultyName}</TableCell>
                  <TableCell className="text-sm text-foreground">{detail.credit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

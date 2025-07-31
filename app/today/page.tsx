"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { timetableData, type CourseEvent } from "@/lib/data"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TodayPage() {
  const [isClient, setIsClient] = useState(false)
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [targetDay, setTargetDay] = useState<string>("")
  const [todayClasses, setTodayClasses] = useState<Array<{ time: string, events: CourseEvent[] }>>([])

  useEffect(() => {
    setIsClient(true)
    const now = new Date()
    setCurrentTime(now)
    
    const hour = now.getHours()
    const currentDayIndex = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    
    let dayToShow: string
    let dayIndex: number
    
    // If it's after 5 PM (17:00) or weekend, show tomorrow's classes
    if (hour >= 17 || currentDayIndex === 0 || currentDayIndex === 6) {
      // Calculate tomorrow
      const tomorrow = new Date(now)
      tomorrow.setDate(now.getDate() + 1)
      const tomorrowDayIndex = tomorrow.getDay()
      
      // Skip weekends
      if (tomorrowDayIndex === 0) { // Sunday -> Monday
        tomorrow.setDate(tomorrow.getDate() + 1)
        dayIndex = 1
      } else if (tomorrowDayIndex === 6) { // Saturday -> Monday
        tomorrow.setDate(tomorrow.getDate() + 2)
        dayIndex = 1
      } else {
        dayIndex = tomorrowDayIndex
      }
      
      dayToShow = getDayName(dayIndex)
    } else {
      // Show today's classes
      // If it's weekend, show Monday's classes
      if (currentDayIndex === 0 || currentDayIndex === 6) {
        dayIndex = 1 // Monday
      } else {
        dayIndex = currentDayIndex
      }
      dayToShow = getDayName(dayIndex)
    }
    
    setTargetDay(dayToShow)
    
    // Get classes for the target day
    const dayKey = getDayKey(dayIndex)
    const classesForDay = timetableData
      .map(slot => ({
        time: slot.time,
        events: slot[dayKey] || []
      }))
      .filter(slot => slot.events.length > 0 && slot.time !== "13.00-14.00") // Exclude lunch
    
    setTodayClasses(classesForDay)
  }, [])

  const getDayName = (dayIndex: number): string => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[dayIndex]
  }

  const getDayKey = (dayIndex: number): "monday" | "tuesday" | "wednesday" | "thursday" | "friday" => {
    const dayKeys = ["", "monday", "tuesday", "wednesday", "thursday", "friday", ""] as const
    return dayKeys[dayIndex] as "monday" | "tuesday" | "wednesday" | "thursday" | "friday"
  }

  const isAfter5PM = currentTime ? currentTime.getHours() >= 17 : false
  const pageTitle = isAfter5PM ? "Tomorrow's Classes" : "Today's Classes"

  // Show loading state during hydration
  if (!isClient || !currentTime) {
    return (
      <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Loading...</h1>
            </div>
            <Link href="/">
              <Button variant="outline" size="lg">
                View Complete Timetable
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const renderCourseEvent = (event: CourseEvent) => (
    <div key={`${event.code}-${event.batch}-${event.location}`} className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-lg">
          {event.type} {event.code} {event.batch}
        </span>
      </div>
      {event.faculty && (
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Faculty:</span> {event.faculty}
        </p>
      )}
      {event.location && (
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Location:</span> {event.location}
        </p>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{pageTitle}</h1>
            <p className="text-muted-foreground mt-2">
              {targetDay} • {currentTime.toLocaleDateString('en-GB', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <Link href="/">
            <Button variant="outline" size="lg">
              View Complete Timetable
            </Button>
          </Link>
        </div>

        {todayClasses.length === 0 ? (
          <Card className="bg-card border-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">No Classes Scheduled</h3>
              <p className="text-muted-foreground">
                No classes are scheduled for {targetDay.toLowerCase()}.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {todayClasses.map((slot, index) => (
              <Card key={slot.time} className="bg-card border-border">
                <CardHeader className="bg-muted/20 border-b border-border">
                  <CardTitle className="text-xl text-foreground flex items-center justify-between">
                    <span>{slot.time}</span>
                    <span className="text-sm font-normal text-muted-foreground">
                      {slot.events.length} class{slot.events.length > 1 ? 'es' : ''}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {slot.events.map((event, eventIndex) => (
                      <div key={eventIndex}>
                        {renderCourseEvent(event)}
                        {eventIndex < slot.events.length - 1 && (
                          <hr className="border-border mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/">
            <Button size="lg" className="px-8">
              View Complete Timetable
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

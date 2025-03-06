"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { CalendarIcon, Upload } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data for department options
const departments = [
  { id: "sarcoma", name: "Sarcoma" },
  { id: "melanoma", name: "Melanoma" },
  { id: "gastrectomy", name: "Gastrectomy" },
  { id: "whipple", name: "Whipple" },
  { id: "colorectal", name: "Colorectal" },
  { id: "hepatobiliary", name: "Hepatobiliary" },
  { id: "neurosurgery", name: "Neurosurgery" },
  { id: "cardiothoracic", name: "Cardiothoracic" },
]

export function FileUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [department, setDepartment] = useState("")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      alert("Please select a file to upload")
      return
    }

    if (!department) {
      alert("Please select a department")
      return
    }

    if (!date) {
      alert("Please select a date")
      return
    }

    setIsUploading(true)

    // In a real application, this would upload to a server
    // Simulating upload delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Success message
    setSuccessMessage(
      `${file.name} has been uploaded for ${departments.find((d) => d.id === department)?.name} department.`,
    )

    // Reset form
    setDepartment("")
    setDate(new Date())
    setFile(null)
    setIsUploading(false)

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage("")
    }, 5000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {successMessage && <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">{successMessage}</div>}

      <div className="space-y-2">
        <Label htmlFor="department">Department/Service</Label>
        <Select value={department} onValueChange={setDepartment}>
          <SelectTrigger id="department">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem key={dept.id} value={dept.id}>
                {dept.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">Select the department or service this data belongs to</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date of Data Pull</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              id="date"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
        <p className="text-sm text-muted-foreground">The date when this data was collected or pulled</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="file-upload">File</Label>
        <div className="grid w-full gap-2">
          <label
            htmlFor="file-upload"
            className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-6 text-center"
          >
            <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
            <div className="text-sm font-medium">{file ? file.name : "Click to upload or drag and drop"}</div>
            <div className="mt-1 text-xs text-muted-foreground">CSV, Excel, PDF, or ZIP (max 50MB)</div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".csv,.xlsx,.xls,.pdf,.zip"
            />
          </label>
          {file && (
            <div className="flex items-center justify-between rounded-md border bg-muted/40 p-2">
              <div className="flex items-center gap-2 text-sm">
                <div>{file.name}</div>
                <div className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
              </div>
              <Button type="button" variant="ghost" size="sm" onClick={() => setFile(null)}>
                Remove
              </Button>
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground">Upload the data file you want to submit</p>
      </div>

      <Button type="submit" disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload File"}
      </Button>
    </form>
  )
}


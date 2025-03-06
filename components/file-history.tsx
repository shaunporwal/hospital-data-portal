"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download, Eye, FileIcon } from "lucide-react"
import { format } from "date-fns"

// Mock data for department options (same as in file-uploader)
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

// Mock data for file history
const mockFileHistory = {
  sarcoma: [
    { id: 1, filename: "sarcoma_q1_data.xlsx", date: new Date(2023, 0, 15), size: "2.4 MB" },
    { id: 2, filename: "sarcoma_q2_data.xlsx", date: new Date(2023, 3, 12), size: "3.1 MB" },
    { id: 3, filename: "sarcoma_q3_data.xlsx", date: new Date(2023, 6, 18), size: "2.8 MB" },
  ],
  melanoma: [
    { id: 4, filename: "melanoma_jan_data.xlsx", date: new Date(2023, 0, 10), size: "1.7 MB" },
    { id: 5, filename: "melanoma_feb_data.xlsx", date: new Date(2023, 1, 15), size: "1.9 MB" },
  ],
  gastrectomy: [{ id: 6, filename: "gastrectomy_2023_q1.xlsx", date: new Date(2023, 2, 31), size: "4.2 MB" }],
  whipple: [
    { id: 7, filename: "whipple_procedures_2022.xlsx", date: new Date(2022, 11, 20), size: "5.6 MB" },
    { id: 8, filename: "whipple_procedures_2023_h1.xlsx", date: new Date(2023, 5, 30), size: "3.8 MB" },
  ],
}

export function FileHistory() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("")
  const files = selectedDepartment ? (mockFileHistory as any)[selectedDepartment] || [] : []

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-full max-w-xs">
          <Select onValueChange={setSelectedDepartment} value={selectedDepartment}>
            <SelectTrigger>
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
        </div>
      </div>

      {selectedDepartment ? (
        files.length > 0 ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>File Name</TableHead>
                  <TableHead>Date Submitted</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {files.map((file: any) => (
                  <TableRow key={file.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <FileIcon className="h-4 w-4 text-muted-foreground" />
                        {file.filename}
                      </div>
                    </TableCell>
                    <TableCell>{format(file.date, "PPP")}</TableCell>
                    <TableCell>{file.size}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" title="View file">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Download file">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="flex h-32 flex-col items-center justify-center rounded-md border border-dashed text-center">
            <p className="text-sm text-muted-foreground">No files found for this department</p>
            <p className="text-xs text-muted-foreground">Upload files using the Upload Data tab</p>
          </div>
        )
      ) : (
        <div className="flex h-32 flex-col items-center justify-center rounded-md border border-dashed text-center">
          <p className="text-sm text-muted-foreground">Select a department to view file history</p>
        </div>
      )}
    </div>
  )
}


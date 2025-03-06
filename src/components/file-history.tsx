import { Button } from "@/components/ui/button"

// Mock data for file submission history
const fileHistory = [
    {
        id: "1",
        fileName: "sarcoma-data-2023-03-15.xlsx",
        department: "Sarcoma",
        uploadDate: "Mar 15, 2023",
        fileSize: "2.4 MB",
        status: "Approved",
    },
    {
        id: "2",
        fileName: "melanoma-metrics-q1.csv",
        department: "Melanoma",
        uploadDate: "Apr 2, 2023",
        fileSize: "1.8 MB",
        status: "Pending",
    },
    {
        id: "3",
        fileName: "gastrectomy-outcomes-2023.xlsx",
        department: "Gastrectomy",
        uploadDate: "May 10, 2023",
        fileSize: "3.2 MB",
        status: "Approved",
    },
    {
        id: "4",
        fileName: "whipple-procedures-q2.csv",
        department: "Whipple",
        uploadDate: "Jun 28, 2023",
        fileSize: "1.5 MB",
        status: "Rejected",
    },
    {
        id: "5",
        fileName: "colorectal-data-july.xlsx",
        department: "Colorectal",
        uploadDate: "Jul 15, 2023",
        fileSize: "2.7 MB",
        status: "Approved",
    },
]

export function FileHistory() {
    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">File Name</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Department</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Upload Date</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Size</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {fileHistory.map((file) => (
                                <tr
                                    key={file.id}
                                    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                    <td className="p-4 align-middle">{file.fileName}</td>
                                    <td className="p-4 align-middle">{file.department}</td>
                                    <td className="p-4 align-middle">{file.uploadDate}</td>
                                    <td className="p-4 align-middle">{file.fileSize}</td>
                                    <td className="p-4 align-middle">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${file.status === "Approved"
                                                    ? "bg-green-50 text-green-700"
                                                    : file.status === "Pending"
                                                        ? "bg-yellow-50 text-yellow-700"
                                                        : "bg-red-50 text-red-700"
                                                }`}
                                        >
                                            {file.status}
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle">
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="sm">
                                                View
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                Download
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-end">
                <Button variant="outline" size="sm">
                    Export History
                </Button>
            </div>
        </div>
    )
}

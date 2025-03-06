import { FileHistory } from "@/components/file-history"
import { FileUploader } from "@/components/file-uploader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserNav } from "@/components/user-nav"
import { Link } from "react-router-dom"

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="border-b">
                <div className="container flex h-16 items-center justify-between py-4">
                    <Link to="/dashboard">
                        <h1 className="text-xl font-bold">Hospital Data Portal</h1>
                    </Link>
                    <UserNav />
                </div>
            </header>
            <main className="flex-1">
                <div className="container py-6">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <p className="text-muted-foreground">Upload data files and view submission history</p>
                    </div>
                    <Tabs defaultValue="upload" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="upload">Upload Data</TabsTrigger>
                            <TabsTrigger value="history">Submission History</TabsTrigger>
                        </TabsList>
                        <TabsContent value="upload" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Upload Data File</CardTitle>
                                    <CardDescription>Select your department, date of data pull, and upload your file</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <FileUploader />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="history" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Submission History</CardTitle>
                                    <CardDescription>View and manage your previous data submissions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <FileHistory />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
            <footer className="border-t py-6">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Hospital Data Portal. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

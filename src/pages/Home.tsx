import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
    // Get the base URL from the Vite environment or default to '/'
    const baseUrl = import.meta.env.BASE_URL || '/';

    return (
        <div className="flex min-h-screen flex-col">
            <header className="bg-primary py-6">
                <div className="container flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-primary-foreground">Hospital Data Portal</h1>
                    <Link to={`${baseUrl}login`}>
                        <Button variant="secondary">Login</Button>
                    </Link>
                </div>
            </header>
            <main className="flex-1">
                <section className="container py-12 md:py-24 lg:py-32">
                    <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
                        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                            Stats & Surgeon QA Team Data Portal
                        </h2>
                        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                            A centralized platform for hospital departments to submit data for analysis
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link to={`${baseUrl}login`}>
                                <Button size="lg">Get Started</Button>
                            </Link>
                            <Link to={`${baseUrl}about`}>
                                <Button variant="outline" size="lg">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="container py-12 md:py-24 lg:py-32">
                    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                            <div className="rounded-full bg-primary/10 p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-primary"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Secure Login</h3>
                            <p className="text-center text-muted-foreground">Authenticated access for authorized hospital staff</p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                            <div className="rounded-full bg-primary/10 p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-primary"
                                >
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">File Uploads</h3>
                            <p className="text-center text-muted-foreground">
                                Simple interface to upload data files from your department
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                            <div className="rounded-full bg-primary/10 p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-primary"
                                >
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                    <line x1="3" x2="21" y1="9" y2="9"></line>
                                    <line x1="9" x2="9" y1="21" y2="9"></line>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Submission History</h3>
                            <p className="text-center text-muted-foreground">Track and review your previous data submissions</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t py-6">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Hospital Data Portal. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link to={`${baseUrl}terms`} className="text-sm text-muted-foreground underline underline-offset-4">
                            Terms of Service
                        </Link>
                        <Link to={`${baseUrl}privacy`} className="text-sm text-muted-foreground underline underline-offset-4">
                            Privacy
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

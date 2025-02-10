import { Header } from "./_components/Header";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return(
        <div>
            <Header/>
            <div className="mx-5 md:mx-20 lg:mx-36">
            {children}
            </div>
        </div>
    )
};
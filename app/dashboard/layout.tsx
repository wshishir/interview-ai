import { Header } from "./_components/Header";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return(
        <div>
            <Header/>
            {children}
        </div>
    )
};
import styles from "@/styles/home.module.css";
import { Sidenav } from "@/components/layout/sidenav";
import { Header } from "@/components/header/header";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";

export default function MainMenuLayout({ children }: { children: React.ReactNode }) {
    console.log("Render Layout")
    return (
        <>
            <div className={styles.main_content} style={{
                backgroundImage: "url('/assets/img/playa-fondo.jpg')",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>

                <div className={styles.sidenav}>
                    <Sidenav></Sidenav>
                </div>

                <div className={styles.router_content}>
                    <div className="px-3 rounded-xl">
                        {/* Header */}
                        <Header></Header>

                        {/* body */}
                        {children}
                    </div>
                </div>

            </div>
            <ThemeSwitcher />
        </>
    );
}

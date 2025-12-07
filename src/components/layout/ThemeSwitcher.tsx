"use client";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute bottom-0 right-0 m-5">
            <Button isIconOnly color="default" radius="full" onPress={() => setTheme(theme == "dark" ? "light" : "dark")} variant="flat">
                <span className="material-symbols-rounded">
                    {theme == "dark" ? "dark_mode" : "light_mode"}
                </span>
            </Button>
        </div>
    );
}

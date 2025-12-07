// src/components/MyButton.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Listbox, ListboxItem } from "@heroui/react";


export interface NavItem {
    name: string;
    description?: string;
    path: string;
    disabled?: boolean;
    active?: boolean;
    icon?: string
}

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full">
        {children}
    </div>
);

export function Sidenav() {

    const [navItems, setNavItems] = useState<NavItem[]>([
        {
            name: "Inicio",
            description: "Página principal",
            path: "/main-menu",
            active: false,
            icon: "home"
        },
        {
            name: "Directorio",
            description: "Información general del beneficiario",
            path: "/main-menu/directory",
            active: false,
            icon: "add_notes"
        },
        {
            name: "RAM",
            description: "Registro de assitencia mensual",
            path: "/main-menu/b",
            disabled: true,
            active: false,
            icon: "docs"
        },
        {
            name: "RPP",
            description: "Ración para preparar",
            path: "/main-menu/4",
            disabled: true,
            active: false,
            icon: "beer_meal"
        },
        {
            name: "Captura antropometrica",
            description: "Medidas de cada beneficiario",
            path: "/main-menu/d",
            disabled: true,
            active: false,
            icon: "dataset"
        },
        {
            name: "Configuración",
            path: "/main-menu/settings",
            active: false,
            icon: "settings"
        },
    ])

    const selectNav = (name: string) => {
        setNavItems(prev =>
            prev.map(item => ({ ...item, active: item.name === name }))
        );
    };

    const pathname: string = usePathname();

    return (
        <aside className="p-4 bg-background/80 backdrop-blur rounded-tr-xl rounded-br-xl  min-h-screen">
            <h1 className="text-1xl font-bold mb-10">Fami</h1>
            <ListboxWrapper>
                <Listbox aria-label="Dynamic Actions" items={navItems} className="p-0">
                    {(item) => (
                        <ListboxItem key={item.path} textValue={item.name} aria-disabled={item.disabled} color="default" variant="shadow" className="mb-3">
                            <Link key={item.path} href={item.disabled ? "#" : item.path} onClick={() => selectNav(item.name)}>
                                <div className="flex items-center">
                                    <div className="p-1 bg-gray-200 dark:bg-neutral-700 inline-flex items-center rounded-md me-3">
                                        <span className="material-symbols-rounded">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-1xl">{item.name}</span>
                                        <span className="text-xs opacity-70">{item.description}</span>
                                    </div>
                                </div>
                            </Link>
                        </ListboxItem>
                    )}
                </Listbox>
            </ListboxWrapper>
        </aside>
    );
}

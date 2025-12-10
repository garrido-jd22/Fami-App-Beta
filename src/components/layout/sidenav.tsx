"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Listbox, ListboxItem } from "@heroui/react";

export interface NavItem {
  name: string;
  description?: string;
  path: string;
  disabled?: boolean;
  icon?: string;
  badge?: string;
}

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">{children}</div>
);

const NAV_ITEMS: NavItem[] = [
  {
    name: "Inicio",
    description: "Página principal",
    path: "/main-menu",
    icon: "home",
  },
  {
    name: "Directorio",
    description: "Información general del beneficiario",
    path: "/main-menu/directory",
    icon: "add_notes",
  },
  {
    name: "RAM",
    description: "Registro de asistencia mensual",
    path: "/main-menu/b",
    disabled: true,
    icon: "description",
  },
  {
    name: "RPP",
    description: "Ración para preparar",
    path: "/main-menu/4",
    disabled: true,
    icon: "restaurant",
  },
  {
    name: "Captura antropométrica",
    description: "Medidas de cada beneficiario",
    path: "/main-menu/d",
    disabled: true,
    icon: "monitor_weight",
  },
  {
    name: "Configuración",
    path: "/main-menu/settings",
    icon: "settings",
  },
];

export function Sidenav() {
  const pathname = usePathname();

  const isActive = (item: NavItem) =>
    pathname === item.path || pathname.startsWith(item.path + "/");

  return (
    <aside
      className={`
        min-h-screen w-70
        px-4 py-6
        border-r
        bg-neutral-50 text-neutral-900
        border-neutral-200
        dark:bg-gradient-to-b dark:from-neutral-950 dark:via-[#050816] dark:to-neutral-900
        dark:text-neutral-100 dark:border-neutral-800
        rounded-tr-2xl rounded-br-2xl
      `}
    >
      {/* Logo / título */}
      <div className="mb-8 flex items-center gap-2 px-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 text-sm font-semibold">
          F
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight">Fami</span>
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
            Panel de beneficiarios
          </span>
        </div>
      </div>

      <ListboxWrapper>
        <Listbox
          aria-label="Navegación principal"
          items={NAV_ITEMS}
          className="p-0"
        >
          {(item) => {
            const active = isActive(item);

            return (
              <ListboxItem
                key={item.path}
                textValue={item.name}
                aria-disabled={item.disabled}
                className={`
                  group mb-2 rounded-2xl p-0
                  data-[selectable=true]:outline-none
                  ${item.disabled ? "opacity-40 cursor-not-allowed" : ""}
                `}
              >
                <Link
                  href={item.disabled ? "#" : item.path}
                  onClick={(e) => item.disabled && e.preventDefault()}
                  className={`
                    flex items-center justify-between
                    rounded-2xl px-3 py-2
                    text-sm transition-colors
                    ${
                      active
                        ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900"
                        : "bg-transparent text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {/* Icono */}
                    <div
                      className={`
                        inline-flex h-8 w-8 items-center justify-center
                        rounded-xl border text-base
                        border-neutral-300 bg-neutral-50
                        text-neutral-700
                        dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100
                      `}
                    >
                      <span className="material-symbols-rounded text-[18px] leading-none">
                        {item.icon}
                      </span>
                    </div>

                    {/* Texto */}
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium">
                        {item.name}
                      </span>
                      {item.description && (
                        <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Badge opcional */}
                  {item.badge && (
                    <span className="rounded-full bg-neutral-900/5 px-2 py-[2px] text-[10px] text-neutral-500 dark:bg-neutral-100/10 dark:text-neutral-200">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </ListboxItem>
            );
          }}
        </Listbox>
      </ListboxWrapper>
    </aside>
  );
}

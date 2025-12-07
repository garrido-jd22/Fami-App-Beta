// src/components/Header.tsx
"use client";
import { Input, User } from "@heroui/react";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex items-center justify-between py-3">
        {/* Logo o título */}
        {/* <div className="text-xl font-bold text-gray-800 dark:text-white">
          MiApp
        </div> */}

        {/* Navegación */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
          <Link href="/">Chats</Link>
          <Link href="/">Notificaciones</Link>
        </nav>

        {/* Input de búsqueda */}
        <div className="hidden md:block w-64 ms-auto me-5">
          <Input
            aria-label="Buscar"
            placeholder="Buscar..."
            className="w-full"
          />
        </div>

        {/* Usuario */}
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          description="Madre comunitaria"
          name="Equever Romero"
        />
      </div>
    </header>
  );
}

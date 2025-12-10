"use client";

import React from "react";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    type CardProps,
} from "@heroui/react";

type Accion = {
    icon: string;
    title: string;
    subtitle: string;
    buttonLabel: string;
};

const ACCIONES: Accion[] = [
    {
        icon: "person_add",
        title: "Registrar nuevo beneficiario",
        subtitle: "Añade una nueva persona al programa.",
        buttonLabel: "Empezar registro",
    },
    {
        icon: "folder_open",
        title: "Gestionar formatos del mes",
        subtitle: "Revisa y completa los formatos pendientes.",
        buttonLabel: "Ir a formatos",
    },
    {
        icon: "groups",
        title: "Ver beneficiarios registrados",
        subtitle: "Consulta la lista completa de personas.",
        buttonLabel: "Ver lista",
    },
];

export default function MainMenu() {

    return (
        <>
            <div className="mt-10 text-center">
                <h2 className="text-5xl font-bold mb-2">Bienvenido a Fami</h2>
                <p className="text-sm">Gestiona y administra de forma facil tus beneficiarios.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
                {ACCIONES.map((accion) => (
                    <Card
                        key={accion.title}
                        className={`
            relative overflow-hidden
            rounded-2xl
            border border-neutral-200/40 bg-neutral-50
            text-neutral-900 shadow-lg
            dark:border-neutral-700/80 dark:bg-gradient-to-br
            dark:from-[#050816] dark:via-neutral-900 dark:to-[#17101f]
          `}
                    >
                        {/* Glow de fondo sutil */}
                        <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen dark:opacity-80">
                            <div className="absolute -bottom-10 -right-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
                            <div className="absolute -top-8 -left-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl" />
                        </div>

                        <CardBody className="relative px-5 pt-5 pb-3">
                            <div className="flex flex-col gap-3">
                                {/* Icono en círculo */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/70 bg-white/70 text-neutral-800 shadow-sm dark:border-white/20 dark:bg-white/10 dark:text-white">
                                    <span className="material-symbols-rounded text-xl leading-none">
                                        {accion.icon}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-large font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                                        {accion.title}
                                    </p>
                                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-300">
                                        {accion.subtitle}
                                    </p>
                                </div>
                            </div>
                        </CardBody>

                        <CardFooter className="relative px-5 pb-5 pt-1">
                            <Button
                                fullWidth
                                radius="sm"
                                variant="flat"
                                className="border-neutral-200/40"
                            >
                                {accion.buttonLabel}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}

"use client";

import React from "react";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import RowSteps from "@/components/layout/RowStepts";
import { Button, Input } from "@heroui/react";

export default function RegisterPage() {

    return (
        <>
            <div className="min-h-screen flex h-full w-full items-center justify-center" style={{
                backgroundImage: "url('/assets/img/playa-fondo.jpg')",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>
                <div className="rounded-large bg-content1 shadow-2xl flex w-250 flex-col gap-4 px-8 pt-6 pb-10">

                    <div className="flex justify-center">
                        <RowSteps className=""
                            defaultStep={2}
                            steps={[
                                {
                                    title: "Información personal",
                                },
                                {
                                    title: "Mi hogar",
                                },
                                {
                                    title: "Unidad Administrativa",
                                },
                                {
                                    title: "Últimos pasos",
                                },
                            ]}
                        />
                    </div>


                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <p className="text-large font-medium mt-3">Información personal</p>
                            <p className="text-small text-default-500">Dinos tu informacion como madre comunitaria</p>
                        </div>

                        {/* FORMULARIO – HERO UI */}
                        <form className="flex flex-col gap-4">
                            {/* Fila 1: nombres / apellidos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    isRequired
                                    label="Nombres"
                                    placeholder="Ingresa tus nombres"
                                />
                                <Input
                                    isRequired
                                    label="Apellidos"
                                    placeholder="Ingresa tus apellidos"
                                />
                            </div>

                            {/* Fila 2: tipo doc / número doc */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Input
                                    isRequired
                                    label="Tipo de documento"
                                    placeholder="CC, TI, CE..."
                                />
                                <Input
                                    isRequired
                                    className="md:col-span-2"
                                    label="Número de documento"
                                    placeholder="Ej. 1234567890"
                                />
                            </div>

                            {/* Fila 3: fecha / teléfono */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    isRequired
                                    type="date"
                                    label="Fecha de nacimiento"
                                    placeholder=""
                                />
                                <Input
                                    isRequired
                                    label="Teléfono de contacto"
                                    placeholder="Ej. 300 123 4567"
                                />
                            </div>

                            {/* Fila 4: correo */}
                            <div className="grid grid-cols-1 gap-4">
                                <Input
                                    isRequired
                                    type="email"
                                    label="Correo electrónico"
                                    placeholder="Ingresa tu correo"
                                />
                            </div>

                            {/* Botón */}
                            <div className="flex justify-end mt-4">
                                <Button
                                    color="primary" variant="shadow"
                                >
                                    Continuar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <ThemeSwitcher />
        </>
    );
}

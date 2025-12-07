"use client";
import { Input, Select, SelectItem, Button, addToast } from "@heroui/react";

interface DirectoryFormProps {
    onClose: () => void;
}

export function DirectoryForm({ onClose }: DirectoryFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addToast({
            title: "¡Beneficiario agregado exitosamente!",
            description: "",
            color: "success",
        })
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* --- SECCIÓN 1: INFORMACIÓN GENERAL --- */}
            <section>
                <h2 className="text-lg font-semibold mb-4">Información General</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Tipo documento */}
                    <Select label="Tipo documento" placeholder="Selecciona tipo" required>
                        <SelectItem key="cc">Cédula de Ciudadanía</SelectItem>
                        <SelectItem key="ti">Tarjeta de Identidad</SelectItem>
                        <SelectItem key="ce">Cédula de Extranjería</SelectItem>
                    </Select>

                    {/* Número de documento */}
                    <Input
                        type="text"
                        label="Número de documento"
                        placeholder="123456789"
                        required
                    />

                    {/* Fecha de nacimiento */}
                    <Input type="date" label="Fecha de nacimiento" required />

                    {/* Fecha de inscripción */}
                    <Input type="date" label="Fecha de inscripción" required />
                </div>

                {/* Campos de nombres en 4 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <Input
                        type="text"
                        label="Primer nombre"
                        placeholder="Ejemplo"
                        required
                    />
                    <Input type="text" label="Segundo nombre" placeholder="Opcional" />
                    <Input
                        type="text"
                        label="Primer apellido"
                        placeholder="Ejemplo"
                        required
                    />
                    <Input
                        type="text"
                        label="Segundo apellido"
                        placeholder="Ejemplo"
                        required
                    />
                </div>
            </section>

            {/* --- SECCIÓN 2: INFORMACIÓN COMPLEMENTARIA --- */}
            <section>
                <h2 className="text-lg font-semibold mb-4">Información Complementaria</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Departamento */}
                    <Select label="Departamento" placeholder="Selecciona" required>
                        <SelectItem key="antioquia">Antioquia</SelectItem>
                        <SelectItem key="cundinamarca">Cundinamarca</SelectItem>
                        <SelectItem key="valle">Valle del Cauca</SelectItem>
                    </Select>

                    {/* Municipio */}
                    <Select label="Municipio" placeholder="Selecciona" required>
                        <SelectItem key="medellin">Medellín</SelectItem>
                        <SelectItem key="bogota">Bogotá</SelectItem>
                        <SelectItem key="cali">Cali</SelectItem>
                    </Select>

                    {/* SISBEN */}
                    <Select label="SISBEN" placeholder="Selecciona" required>
                        <SelectItem key="a">Grupo A</SelectItem>
                        <SelectItem key="b">Grupo B</SelectItem>
                        <SelectItem key="c">Grupo C</SelectItem>
                    </Select>

                    {/* Entidad de salud */}
                    <Select label="Entidad de salud" placeholder="Selecciona" required>
                        <SelectItem key="eps1">EPS Sura</SelectItem>
                        <SelectItem key="eps2">Sanitas</SelectItem>
                        <SelectItem key="eps3">Nueva EPS</SelectItem>
                    </Select>

                    {/* Dirección */}
                    <Input
                        type="text"
                        label="Dirección de residencia"
                        placeholder="Calle 123 #45-67"
                        required
                    />

                    {/* Teléfono */}
                    <Input
                        type="tel"
                        label="Teléfono de celular"
                        placeholder="+57 300 123 4567"
                        required
                    />

                    {/* Sexo */}
                    <Select label="Sexo" placeholder="Selecciona" required>
                        <SelectItem key="masculino">Masculino</SelectItem>
                        <SelectItem key="femenino">Femenino</SelectItem>
                    </Select>
                </div>
            </section>

            {/* Botón de Guardar */}
            <div className="flex justify-end">
                <Button type="submit" color="success" className="w-full">
                    Agregar beneficiario
                </Button>
            </div>
        </form>
    );
}

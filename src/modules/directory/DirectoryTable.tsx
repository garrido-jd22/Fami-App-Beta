// src/components/MyButton.tsx
"use client";
import { useState } from "react";
import React from "react";
import {
    Button, Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell
} from "@heroui/react";
import { DirectoryDrawer } from "./DirectoryDrawer";

interface Usuario {
    id: number;
    documento: string;
    tipoDoc: string;
    nombreCompleto: string;
    fecha_nacimiento: string;
    municipio: string;
    direccion: string;
    estado: string;
    edad: number;
}

export function DirectoryTable() {

    const [data, setData] = useState<Usuario[]>([
        {
            id: 1,
            documento: "12345678",
            tipoDoc: "CC",
            nombreCompleto: "Juan Pérez",
            fecha_nacimiento: "10-02-2025",
            municipio: "Barranquilla",
            direccion: "Calle 100 #100C-31",
            estado: "secondary",
            edad: 28
        },
        {
            id: 2,
            documento: "98765432",
            tipoDoc: "TI",
            nombreCompleto: "Ana Torres",
            fecha_nacimiento: "10-02-2025",
            municipio: "Barranquilla",
            direccion: "Calle 100 #100C-31",
            estado: "secondary",
            edad: 17
        },
        {
            id: 3,
            documento: "56789012",
            tipoDoc: "CC",
            nombreCompleto: "Pedro Gómez",
            fecha_nacimiento: "10-02-2025",
            municipio: "Barranquilla",
            direccion: "Calle 100 #100C-31",
            estado: "primary",
            edad: 45
        },
        {
            id: 4,
            documento: "56789012",
            tipoDoc: "CC",
            nombreCompleto: "Pedro Gómez",
            fecha_nacimiento: "10-02-2025",
            municipio: "Barranquilla",
            direccion: "Calle 100 #100C-31",
            estado: "danger",
            edad: 45
        },
        {
            id: 5,
            documento: "56789012",
            tipoDoc: "CC",
            nombreCompleto: "Pedro Gómez",
            fecha_nacimiento: "10-02-2025",
            municipio: "Barranquilla",
            direccion: "Calle 100 #100C-31",
            estado: "success",
            edad: 45
        },
        {
            id: 6,
            documento: "56789012",
            tipoDoc: "CC",
            nombreCompleto: "Pedro Gómez",
            fecha_nacimiento: "10-02-2025",
            municipio: "Barranquilla",
            direccion: "Calle 100 #100C-31",
            estado: "success",
            edad: 45
        },
        {
            id: 7,
            documento: "56789012",
            tipoDoc: "CC",
            nombreCompleto: "Pedro Gómez",
            fecha_nacimiento: "10-02-2025",
            municipio: "Barranquilla",
            direccion: "Calle 100 #100C-31",
            estado: "warning",
            edad: 45
        },
    ]);

    const [isOpen, setIsOpen] = useState(false);

    const handleExport = (format: string) => {
        alert(`Exportando datos en formato: ${format}`);
    };

    const handleVisualizarAcudientes = (id: number) => {
        alert(`Visualizando acudientes del usuario con ID: ${id}`);
    };

    const handleAccion = (key: string, id: number) => {
        if (key === "editar") alert(`Editar usuario con ID: ${id}`);
        if (key === "eliminar") {
            setData(data.filter((item) => item.id !== id));
        }
        if (key === "detalles") alert(`Ver detalles del usuario con ID: ${id}`);
    };

    return (
        <>
            {/* body */}
            <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-10">
                <div>
                    <h2 className="text-4xl font-bold mb-2">Directorio</h2>
                    <p className="text-xs">Administra y exporta la información fácilmente.</p>
                </div>

                {/* Acciones */}
                <div className="flex items-center gap-2">
                    <Button color="primary" onPress={() => setIsOpen(true)}>
                        <span className="material-symbols-rounded">
                            add
                        </span>
                        Agregar
                    </Button>

                    <Dropdown>
                        <DropdownTrigger>
                            <Button color="default">Exportar</Button>
                        </DropdownTrigger>
                        <DropdownMenu onAction={(key) => handleExport(key as string)}>
                            <DropdownItem key="excel">Exportar a Excel</DropdownItem>
                            <DropdownItem key="pdf">Exportar a PDF</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            {/* Tabla */}
            <Table aria-label="Tabla de usuarios" className="mt-4">
                <TableHeader>
                    <TableColumn>Documento</TableColumn>
                    <TableColumn>Tipo de Doc</TableColumn>
                    <TableColumn>Nombre Completo</TableColumn>
                    <TableColumn>Fecha nacimiento</TableColumn>
                    <TableColumn>Municipio</TableColumn>
                    <TableColumn>Dirección</TableColumn>
                    <TableColumn>Estado</TableColumn>
                    <TableColumn>Edad</TableColumn>
                    <TableColumn>Acudientes</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.documento}</TableCell>
                            <TableCell>{item.tipoDoc}</TableCell>
                            <TableCell>{item.nombreCompleto}</TableCell>
                            <TableCell>{item.fecha_nacimiento}</TableCell>
                            <TableCell>{item.municipio}</TableCell>
                            <TableCell>{item.direccion}</TableCell>
                            <TableCell>
                                <Chip color={item.estado} variant="faded">
                                    {item.estado}
                                </Chip>
                            </TableCell>
                            <TableCell>{item.edad}</TableCell>
                            <TableCell>
                                <Button isIconOnly radius="full" variant="flat"
                                    size="sm"
                                    color="secondary"
                                    onPress={() => handleVisualizarAcudientes(item.id)}
                                >
                                    <span className="material-symbols-rounded">
                                        contacts_product
                                    </span>
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button isIconOnly radius="full" variant="flat" color="default">
                                            <span className="material-symbols-rounded">
                                                more_vert
                                            </span>
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        onAction={(key) => handleAccion(key as string, item.id)}
                                    >
                                        <DropdownItem key="editar">Editar</DropdownItem>
                                        <DropdownItem key="detalles">Ver Detalles</DropdownItem>
                                        <DropdownItem key="eliminar" className="text-danger">
                                            Eliminar
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Modal */}
            <DirectoryDrawer open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

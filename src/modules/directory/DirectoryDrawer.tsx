"use client";

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button
} from "@heroui/react";
import { DirectoryForm } from "./DirectoryForm";

interface DirectoryDrawerProps {
    open: boolean;
    onClose: () => void;
}

export function DirectoryDrawer({ open, onClose }: DirectoryDrawerProps) {
    return (
        <Drawer isOpen={open} size="4xl" onClose={onClose} className="bg-background/80 backdrop-blur">
            <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1">Nuevo beneficiario</DrawerHeader>
                        <DrawerBody>
                            <DirectoryForm onClose={onClose} />
                        </DrawerBody>
                        <DrawerFooter>
                            <Button color="danger" onPress={onClose}>
                                Cancelar
                            </Button>
                            {/* <Button color="success" onPress={onClose} type="submit">
                                Guardar todo
                            </Button> */}
                        </DrawerFooter>
                    </>
                )}
            </DrawerContent>
        </Drawer>
    );
}

"use client";

import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { Input, Button, Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

export default function LoginPage() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen"
                style={{
                    backgroundImage: "url('/assets/img/playa-fondo.jpg')",
                    backgroundSize: "100% auto",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
                <Card className="w-full max-w-sm p-4 shadow-lg">
                    <CardHeader className="flex flex-col items-center gap-1">
                        <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
                        <p className="text-sm">Ingresa con tu cuenta</p>
                    </CardHeader>

                    <CardBody className="flex flex-col gap-4">
                        <Input
                            type="email"
                            label="Correo electrónico"
                            placeholder="tu@correo.com"
                        />
                        <Input
                            type="password"
                            label="Contraseña"
                            placeholder="••••••••"
                        />
                    </CardBody>

                    <CardFooter className="flex flex-col gap-2">
                        <Button color="primary" className="w-full" radius="sm">
                            Ingresar
                        </Button>
                        <p className="text-sm text-center">
                            ¿No tienes cuenta? <a href="/register" className="text-blue-500 hover:underline">Regístrate</a>
                        </p>
                    </CardFooter>
                </Card>
            </div>
            <ThemeSwitcher />
        </>
    );
}

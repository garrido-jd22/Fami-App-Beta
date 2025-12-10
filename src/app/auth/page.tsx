"use client";

import React from "react";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { Button, Input, Checkbox, Link, Form, Divider } from "@heroui/react";

export default function LoginPage() {

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("handleSubmit");
    };

    return (
        <>
            <div className="">
                <div className="min-h-screen w-full bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 flex items-center justify-center px-4">
                    {/* Card principal */}
                    <div
                        className="
          w-full max-w-4xl
          rounded-3xl
          overflow-hidden
          shadow-2xl
          bg-neutral-50 dark:bg-neutral-950
          border border-neutral-200/70 dark:border-neutral-800
          flex flex-col md:flex-row
        "
                    >
                        {/* Lado izquierdo: imagen / contenido visual */}
                        <div
                            className="
            relative
            md:w-1/2
            h-56 md:h-auto
            bg-cover bg-center
          "
                            style={{
                                backgroundImage: "url('/assets/img/playa-fondo.jpg')",
                            }}
                        >
                            {/* Overlay para oscurecer un poco la imagen */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

                            {/* Contenido encima de la imagen */}
                            <div className="relative flex h-full flex-col justify-between p-6 md:p-8 text-white">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold tracking-tight">
                                        FAMI
                                    </span>

                                    <button className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur hover:bg-white/20">
                                        <span>Back to website</span>
                                        <span className="material-symbols-rounded text-sm">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>

                                <div className="mt-4 md:mt-0">
                                    <h2 className="text-lg font-semibold md:text-xl">
                                        Capturando información,
                                        <br className="hidden md:block" /> ayudando familias
                                    </h2>
                                    <p className="mt-2 text-xs text-white/80 md:text-sm">
                                        Registra beneficiarios y gestiona sus formatos desde una
                                        plataforma sencilla y segura.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Lado derecho: tu login (siempre el mismo) */}
                        <div className="flex-1 flex items-center justify-center px-6 py-8 md:px-10">
                            <div className="w-full max-w-sm flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg tracking-tight">
                                        Sign in to your account
                                    </p>
                                    <p className="text-small text-default-500">
                                        to continue to Acme
                                    </p>
                                </div>

                                <Form
                                    className="flex flex-col gap-3"
                                    validationBehavior="native"
                                    onSubmit={handleSubmit}
                                >
                                    <Input
                                        isRequired
                                        label="Email Address"
                                        name="email"
                                        placeholder="Enter your email"
                                        type="email"
                                    />

                                    <Input
                                        isRequired
                                        label="Password"
                                        name="password"
                                        placeholder="Enter your password"
                                        type={isVisible ? "text" : "password"}
                                        endContent={
                                            <button
                                                type="button"
                                                onClick={toggleVisibility}
                                                className="flex items-center justify-center text-default-400"
                                                aria-label={isVisible ? "Hide password" : "Show password"}
                                            >
                                                <span className="material-symbols-rounded text-2xl leading-none">
                                                    {isVisible ? "visibility_off" : "visibility"}
                                                </span>
                                            </button>
                                        }
                                    />

                                    <div className="flex w-full items-center justify-between px-1 py-2">
                                        <Checkbox name="remember" size="sm">
                                            Remember me
                                        </Checkbox>
                                        <Link className="text-default-500" href="#" size="sm">
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <Button className="w-full" color="primary" type="submit">
                                        Sign In
                                    </Button>
                                </Form>

                                <div className="flex items-center gap-4 py-2">
                                    <Divider className="flex-1" />
                                    <p className="shrink-0 text-tiny text-default-500">OR</p>
                                    <Divider className="flex-1" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Button
                                        variant="faded"
                                        startContent={
                                            <span className="material-symbols-rounded text-xl">
                                                person
                                            </span>
                                        }
                                    >
                                        Continue with Google
                                    </Button>

                                    <Button
                                        variant="faded"
                                        startContent={
                                            <span className="material-symbols-rounded text-xl">
                                                code
                                            </span>
                                        }
                                    >
                                        Continue with Github
                                    </Button>
                                </div>

                                <p className="text-center text-small">
                                    Need to create an account?&nbsp;
                                    <Link href="#" size="sm">
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ThemeSwitcher />
        </>
    );
}

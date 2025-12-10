"use client";

import React from "react";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import RowSteps from "@/components/layout/RowStepts";
import { Button, Input, Checkbox, Link, Form, Divider } from "@heroui/react";

export default function RegisterPage() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("handleSubmit");
    };

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

                    <div className="flex flex-col gap-1">
                        <p className="text-large font-medium">Sign in to your account</p>
                        <p className="text-small text-default-500">to continue to Acme</p>
                    </div>

                    <Form className="flex flex-col gap-3" validationBehavior="native" onSubmit={handleSubmit}>
                        <Input
                            isRequired
                            label="Email Address"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            // variant="bordered"
                        />
                        <Input
                            isRequired
                            label="Password"
                            name="password"
                            placeholder="Enter your password"
                            type={isVisible ? "text" : "password"}
                            // variant="bordered"
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
                        <p className="text-tiny text-default-500 shrink-0">OR</p>
                        <Divider className="flex-1" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button
                            // startContent={<Icon icon="flat-color-icons:google" width={24} />}
                            variant="faded"
                        >
                            Continue with Google
                        </Button>
                        <Button
                            // startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
                            variant="faded"
                        >
                            Continue with Github
                        </Button>
                    </div>
                    <p className="text-small text-center">
                        Need to create an account?&nbsp;
                        <Link href="#" size="sm">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
            <ThemeSwitcher />
        </>
    );
}

"use client";
import { signIn, signUp } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";


const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // Convert FormData to plain object

        console.log('data from the form', data)

        const { data: resData, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password
        });

        console.log('after sign up',resData, error)
    };

    const handleGoogleSignIn = async () => {
        const resData = await signIn.social({
            provider: 'google',
            provider: "github",
        })
        console.log('After google sign in', resData)
    }

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1rem",
            backgroundColor: "#f8fafc"
        }}>
            <div style={{
                backgroundColor: "#ffffff",
                padding: "2.5rem",
                borderRadius: "1rem",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
                border: "1px solid #e2e8f0"
            }}>
                <h2 style={{
                    fontSize: "1.75rem",
                    fontWeight: "700",
                    color: "#0f172a",
                    marginBottom: "1.5rem",
                    textAlign: "center"
                }}>
                    Please Sign up
                </h2>

                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="Your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Your Email" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            {/* <Check /> */}
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>

                <br />
                <hr style={{ borderColor: "#e2e8f0", margin: "0.5rem 0" }} />
                <br />
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#64748b", margin: 0 }}>
                        Sign In with Google
                    </p>
                    <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
                </div>
                <br />
                <hr style={{ borderColor: "#e2e8f0", margin: "0.5rem 0" }} />
                <br />
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#64748b", margin: 0 }}>
                        Sign In with Github
                    </p>
                    <Button onClick={handleGoogleSignIn}>Sign in with Github</Button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
import React, { useState } from "react";
import { Button, Input, Form, notification } from "antd";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (phone === "998991234567" && password === "password123"|| true) {
            toast.success("Kirish muvaffaqiyatli!");
            navigate("/");
        } else {
            toast.error("Telefon raqami yoki parol noto'g'ri!");
        }
    };

    return (
        <section style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f2f5" }}>
            <ToastContainer position="top-right" theme="colored" />

            <div style={{ backgroundColor: "white", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", padding: "32px", width: "100%", maxWidth: "400px" }}>
                <Form onSubmit={handleLogin}>
                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#595959" }}>
                            Telefon raqami
                        </label>
                        <Input
                            type="tel"
                            style={{ width: "100%" }}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="99 999 99 99"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#595959" }}>
                            Parol
                        </label>
                        <div style={{ position: "relative" }}>
                            <Input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: "100%" }}
                                placeholder="********"
                                required
                            />
                            <button
                                type="button"
                                style={{ position: "absolute", right: "10px", top: "8px", background: "transparent", border: "none" }}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                    </div>

                    <Button
                        type="primary"
                        style={{ width: "100%", backgroundColor: "#1890ff", color: "white", padding: "12px", borderRadius: "4px", border: "none" }}
                        onClick={handleLogin}
                    >
                        Kirish
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default Login;

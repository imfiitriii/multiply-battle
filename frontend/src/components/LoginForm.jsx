import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { loginUser, clearError } from "../features/auth/authSlice";

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Clear any stale error when this form mounts.
    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    // Redirect once authenticated.
    useEffect(() => {
        if (isAuthenticated) navigate("/lobby");
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="overflow-visible flex flex-col gap-5 p-10 font-poppins rounded-[20px] relative bg-black text-white border border-[#14FFEC]"
        >

            {/* Title */}
            <h1 className="relative flex items-center pl-[30px] text-[32px] font-semibold tracking-[-1px] text-[#14FFEC]">

                {/* Static dot */}
                <span className="absolute left-0 w-4 h-4 rounded-full text-[#14FFEC]"></span>

                {/* Pulsing dot */}
                <span className="absolute left-0 w-4 h-4 rounded-full bg-[#14FFEC] animate-ping"></span>

                Login
            </h1>

            {/* Message */}
            <p className="text-[14.5px] text-white/70">
                Enter your credentials to continue
            </p>

            {/* Error */}
            {error && (
                <p className="text-[14px] text-red-400 bg-red-500/10 border border-red-500/40 rounded-[10px] px-3 py-2">
                    {error}
                </p>
            )}

            {/* Email */}
            <label className="relative">
                <input
                    type="email"
                    required
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
            peer
            w-full
            bg-[#333]
            text-white
            pt-5
            pb-[5px]
            px-[10px]
            rounded-[10px]
            outline-none
            border
            border-[rgba(105,105,105,0.397)]
          "
                />

                <span
                    className="
            absolute
            left-[10px]
            top-[12.5px]
            text-[0.9em]
            text-white/50
            transition-all
            duration-300
            peer-focus:top-0
            peer-focus:text-[0.7em]
            peer-focus:text-[#14FFEC]
            peer-focus:font-semibold
            peer-valid:top-0
            peer-valid:text-[0.7em]
            peer-valid:text-[#14FFEC]
            peer-valid:font-semibold
          "
                >
                    Email
                </span>
            </label>

            {/* Password */}
            <label className="relative">
                <input
                    type="password"
                    required
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
            peer
            w-full
            bg-[#333]
            text-white
            pt-5
            pb-[5px]
            px-[10px]
            rounded-[10px]
            outline-none
            border
            border-[rgba(105,105,105,0.397)]
          "
                />

                <span
                    className="
            absolute
            left-[10px]
            top-[12.5px]
            text-[0.9em]
            text-white/50
            transition-all
            duration-300
            peer-focus:top-0
            peer-focus:text-[0.7em]
            peer-focus:text-[#14FFEC]
            peer-focus:font-semibold
            peer-valid:top-0
            peer-valid:text-[0.7em]
            peer-valid:text-[#14FFEC]
            peer-valid:font-semibold
          "
                >
                    Password
                </span>
            </label>

            {/* Submit */}
            <Button>
                <span className="text-1x1 self-center-safe">
                    {loading ? "Logging in..." : "Log in"}
                </span>
            </Button>

            {/* Sign in */}
            <p className="text-center text-[14.5px] text-white/70">
                Don't have an account?{" "}
                <a href="/register" className="text-[#14FFEC] hover:underline">
                    Register
                </a>
            </p>

        </form>
    );
}

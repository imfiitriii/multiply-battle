import Button from "./Button";

export default function RegisterForm() {
    return (
        <form className="overflow-visible flex flex-col gap-5 p-10 font-poppins rounded-[20px] relative bg-black text-white border border-[#14FFEC]">

            {/* Title */}
            <h1 className="relative flex items-center pl-[30px] text-[32px] font-semibold tracking-[-1px] text-[#14FFEC]">
                {/* Static dot */}
                <span className="absolute left-0 w-4 h-4 rounded-fulltext-[#14FFEC]"></span>
                {/* Pulsing dot */}
                <span className="absolute left-0 w-4 h-4 rounded-full bg-[#14FFEC] animate-ping"></span>
                Register
            </h1>

            {/* Message */}
            <p className="text-[14.5px] text-white/70">
                Enter your credentials to continue
            </p>

            {/* Name */}
            <label className="relative">
                <input
                    required
                    placeholder=" "
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
                    Name
                </span>
            </label>


            {/* Email */}
            <label className="relative">
                <input
                    type="email"
                    required
                    placeholder=" "
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

            {/* Confirm password */}
            <label className="relative">
                <input
                    type="password"
                    required
                    placeholder=" "
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
                    Confirm password
                </span>
            </label>

            {/* Submit */}
            <Button><span className="text-1x1 self-center-safe">Log in</span></Button>

            {/* Sign in */}
            <p className="text-center text-[14.5px] text-white/70">
                ALready have an account?{" "}
                <a
                    href="#"
                    className="text-[#14FFEC] hover:underline"
                >
                    Log in.
                </a>
            </p>

        </form>
    );
}
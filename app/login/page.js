import localFont from "next/font/local";

import Link from "next/link";

const kugile = localFont({ src: "../../public/kugile/Kugile_Demo.ttf" });
const Login = () => {
  return (
    <div className="h-[60vh] md:h-[80vh] items-center flex w-full justify-center ">
      <div className="flex flex-col gap-4 max-w-[350px] md:min-w-[400px] mx-auto">
        <h1 className={`${kugile.className} text-5xl text-center`}>Login</h1>
        <form className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap">
            <label>Username</label>
            <input
              required
              type="text"
              className="border border-gray-400 py-3 px-2 rounded-lg outline-none w-full "
            />
          </div>
          <div className="flex flex-col gap">
            <label>Password</label>
            <input
              required
              type="password"
              className="border border-gray-400 py-3 px-2 rounded-lg outline-none w-full "
            />
          </div>
          <input
            type="button"
            value="submit"
            className="bg-green-800 text-white font-bold uppercase py-3 px-2 rounded-lg outline-none w-full "
          />
        </form>
        <div className="flex justify-between items-center">
          <Link href="/forgot" className="text-sm text-green-800">
            Forgot Password ?
          </Link>
          <Link href="/register" className="text-sm text-green-800">
            Register{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

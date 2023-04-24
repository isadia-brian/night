import localFont from "next/font/local";

const kugile = localFont({ src: "../../public/kugile/Kugile_Demo.ttf" });

const Forgot = () => {
  return (
    <div className="h-[70vh] md:h-[80vh] items-center flex w-full justify-center ">
      <div className="flex flex-col gap-4 max-w-[350px] md:min-w-[400px] mx-auto">
        <h1 className={`${kugile.className} text-5xl text-center`}>
          Forgot Password
        </h1>
        <form className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap">
            <label>Email</label>
            <input
              required
              type="email"
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
          <div className="flex flex-col gap">
            <label>Repeat Password</label>
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
      </div>
    </div>
  );
};

export default Forgot;

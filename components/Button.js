const Button = (props) => {
  return (
    <div className="mt-6 md:mt-0 w-full">
      {props.isLarge ? (
        <button className="w-[230px] md:w-[130px] px-3 py-3 md:px-3 bg-transparent md:border md:border-gray-900 cursor-pointer rounded-sm text-white font-bold  hover:border hover:bg-white hover:border-none hover:text-green-600 duration-700 flex items-center justify-center gap-2">
          <p className="text-xs ">{props.children[0]}</p>
          <p className="text-sm ">{props.children[1]}</p>
        </button>
      ) : (
        <button className="w-[120px] md:w-[140px] px-6 py-3 md:px-6 md:ml-24 bg-white cursor-pointer rounded-sm text-green-600 text-xs font-bold hover:border-none hover:border hover:bg-green-600 hover:text-white duration-500 flex items-center justify-center gap-2">
          {props.children}
        </button>
      )}
    </div>
  );
};

export default Button;

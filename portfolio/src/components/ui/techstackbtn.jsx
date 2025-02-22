const techstackbtn = ({ name, icon }) => {
    return (
      <div className="flex items-center gap-2 justify-center bg-[#00f7ff] px-3 text-sm font-medium py-0.5 w-fit rounded-full mb-1">
        <div className={`h-2 w-2 rounded-full ${icon}`}></div>
  
        <div>{name}</div>
      </div>
    );
  };
  
  export default techstackbtn;
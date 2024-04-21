const Shimmer = () => {
    return  <div className="flex flex-wrap">
       {Array(9).fill("").map((e,index)=>(<div key={index} className="h-52 w-52 m-2 bg-slate-300 border-black shadow-md"></div> ))}
  </div>
};

export default Shimmer;
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full h-1/2 flex flex-col items-center justify-evenly">
      <button className="w-1/2 rounded-lg h-20 px-5 my-5 py-2 bg-red-400 text-white">
        <Link className="text-2xl" href={"/admin"}>
          Admin
        </Link>
      </button>
      <button className="w-1/2 rounded-lg h-20 px-5 my-5 py-2 bg-red-400 text-white">
        <Link className="text-2xl" href={"/agent"}>
          Agent
        </Link>
      </button>
      <button className="w-1/2 rounded-lg h-20 px-5 my-5 py-2 bg-red-400 text-white">
        <Link className="text-2xl" href={"/user"}>
          User
        </Link>
      </button>
    </div>
  );
};

export default page;

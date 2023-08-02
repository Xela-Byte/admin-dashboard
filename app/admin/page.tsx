type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full">
      {/* Content */}
      <div className="w-full px-3 py-5">
        <div className="flex flex-col items-center justify-center py-5">
          <p className="text-xl font-bold">Tasks</p>
          <p className="text-lg font-semibold">November 2019</p>
        </div>
        <div className="w-full flex flex-col justify-items-center sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-red-100 py-15 px-10 border-l-8 border-red-500 rounded-xl">
            Task 1
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-red-100 py-15 px-10 border-l-8 border-red-500 rounded-xl">
            Task 2
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-red-100 py-15 px-10 border-l-8 border-red-500 rounded-xl">
            Task 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

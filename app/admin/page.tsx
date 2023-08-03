type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full flex lg:flex-col xl:flex-row">
      {/* Content */}
      <div className="w-full xl:w-2/3 xl:ml-10  px-3 py-5 lg:w-full flex flex-col">
        <div className="flex flex-col items-center justify-center py-5">
          <p className="text-xl font-bold">Tasks</p>
          <p className="text-lg font-semibold">November 2019</p>
        </div>
        <div className="w-full flex flex-col justify-items-center sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-2 lg:gap-8 xl:grid-cols-4">
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-red-100 py-15 px-10 border-l-8 border-red-500 rounded-xl">
            Task 1
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-green-100 py-15 px-10 border-l-8 border-green-500 rounded-xl">
            Task 2
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-blue-100 py-15 px-10 border-l-8 border-blue-500 rounded-xl">
            Task 3
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-purple-100 py-15 px-10 border-l-8 border-purple-500 rounded-xl">
            Task 4
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-red-100 py-15 px-10 border-l-8 border-red-500 rounded-xl">
            Task 5
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-green-100 py-15 px-10 border-l-8 border-green-500 rounded-xl">
            Task 6
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-red-100 py-15 px-10 border-l-8 border-red-500 rounded-xl">
            Task 7
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-green-100 py-15 px-10 border-l-8 border-green-500 rounded-xl">
            Task 8
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-blue-100 py-15 px-10 border-l-8 border-blue-500 rounded-xl">
            Task 9
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-red-100 py-15 px-10 border-l-8 border-red-500 rounded-xl">
            Task 10
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-green-100 py-15 px-10 border-l-8 border-green-500 rounded-xl">
            Task 11
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center sm:w-52 my-5 h-40 bg-blue-100 py-15 px-10 border-l-8 border-blue-500 rounded-xl">
            Task 12
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col w-full h-fit pb-10 lg:w-1/2 lg:mx-auto mb-10 xl:w-[25%] rounded-md bg-white mt-10 xl:mt-36">
        <p className="text-center text-xl font-semibold mt-10 mb-5">
          Add Tasks
        </p>

        <div className="w-full px-10 py-5 flex items-center justify-between space-x-10">
          <p className="text-xl">Name</p>
          <input
            type="text"
            placeholder="Task Name"
            className="p-3 w-full bg-gray-100 ml-auto rounded-lg"
          />
        </div>

        <div className="w-full px-10 py-5 flex items-center justify-between space-x-10">
          <p className="text-xl">Description</p>
          <input
            placeholder="Task Name"
            className="p-3 w-full bg-gray-100 ml-auto rounded-lg"
          />
        </div>

        <div className="w-full px-10 py-5 flex items-center justify-between space-x-10">
          <p className="text-xl">Skill</p>
          <input
            type="text"
            placeholder="Ex. Front-End Developer"
            className="p-3 w-full bg-gray-100 ml-auto rounded-lg"
          />
        </div>

        <button
          type="button"
          className="px-5 py-2 bg-green-600 w-1/4 mx-auto mt-5 text-white text-xl font-semibold rounded-full"
          aria-label="Create Task">
          Create
        </button>
      </div>
    </div>
  );
};

export default page;

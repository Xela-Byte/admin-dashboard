"use client";

import Chart from "@/components/ChartComponent";
import { revenueData } from "@/data/Revenue";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-screen h-auto pb-5 lg:w-full flex flex-col lg:grid grid-cols-2">
      <div className="w-full p-5 lg:px-10">
        <p className="text-xl text-center font-semibold">List of Users</p>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full table-auto text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      NAME
                    </th>
                    <th scope="col" className="px-6 py-4">
                      CF/DNI
                    </th>
                    <th scope="col" className="px-6 py-4">
                      N Users
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Client Profile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      3
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      4
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">htp</td>
                    <td className="whitespace-nowrap px-6 py-4">pdf</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      5
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">htp</td>
                    <td className="whitespace-nowrap px-6 py-4">pdf</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      https://google.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5">
        <Chart title="Usage" />
      </div>
      <div className="w-full px-5">
        <Chart title="Profits" />
      </div>
      <div className="w-full px-5">
        <Chart title="Costs" />
      </div>
    </div>
  );
};

export default page;

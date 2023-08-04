"use client";
import ReactSearchBox from "react-search-box";

import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { tableData } from "@/data/Table";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  const [manageTab, setManageTab] = useState<string>("account");
  return (
    <div className="w-screen lg:w-full px-2">
      <div className="w-full h-20 my-5 px-3 lg:px-10 lg:w-2/3 2xl:w-2/3 space-x-5 flex items-center justify-between">
        <button
          type="button"
          aria-label="listmanageTab"
          onClick={() => {
            setManageTab("account");
          }}
          className="w-1/2 space-y-3 lg:space-y-5 flex flex-col items-center justify-center">
          <p className="text-lg lg:text-2xl font-medium">Manage Accounts</p>
          <div
            className={`w-full h-1 ${manageTab === "account" && "bg-gray-500"}`}
          />
        </button>
        <button
          type="button"
          aria-label="datamanageTab"
          onClick={() => {
            setManageTab("license");
          }}
          className="w-1/2 space-y-3 lg:space-y-5 flex flex-col items-center justify-center">
          <p className="text-lg lg:text-2xl font-medium">Manage Licenses</p>
          <div
            className={`w-full h-1 ${manageTab === "license" && "bg-gray-500"}`}
          />
        </button>
        <button
          type="button"
          aria-label="securityWarnings"
          onClick={() => {
            setManageTab("warning");
          }}
          className="w-1/2 space-y-3 lg:space-y-5 flex flex-col items-center justify-center">
          <p className="text-lg lg:text-2xl font-medium">Security Warnings</p>
          <div
            className={`w-full h-1 ${manageTab === "warning" && "bg-gray-500"}`}
          />
        </button>
      </div>

      {manageTab === "account" && (
        <div className="w-full lg:px-10">
          <ReactSearchBox
            placeholder="Search User by ID"
            value="Doe"
            leftIcon={<BiSearchAlt size={25} />}
            iconBoxSize={"50px"}
            inputHeight={"50px"}
            data={tableData}
            callback={(record: object) => console.log(record)}
          />
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full table-auto text-left mt-5 text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500 rounded-xl">
                      <tr className="bg-green-500 text-white">
                        <th scope="col" className="px-6 py-4">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          NAME
                        </th>
                        <th scope="col" className="px-6 py-4">
                          EMAIL
                        </th>
                        <th scope="col" className="px-6 py-4">
                          ACCOUNT TYPE
                        </th>
                        <th scope="col" className="px-6 py-4">
                          DISABLED
                        </th>
                        <th scope="col" className="px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">Admin</td>
                        <td className="whitespace-nowrap px-6 py-4">False</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <Link
                            className="text-blue-400 underline"
                            href={"/admin/account"}>
                            Edit
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Thornton
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Admin</td>
                        <td className="whitespace-nowrap px-6 py-4">False</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <Link
                            className="text-blue-400 underline"
                            href={"/admin/account"}>
                            Edit
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">Wild</td>
                        <td className="whitespace-nowrap px-6 py-4">User</td>
                        <td className="whitespace-nowrap px-6 py-4">True</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <Link
                            className="text-blue-400 underline"
                            href={"/admin/account"}>
                            Edit
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          4
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">htp</td>
                        <td className="whitespace-nowrap px-6 py-4">pdf</td>
                        <td className="whitespace-nowrap px-6 py-4">User</td>
                        <td className="whitespace-nowrap px-6 py-4">False</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <Link
                            className="text-blue-400 underline"
                            href={"/admin/account"}>
                            Edit
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          5
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">htp</td>
                        <td className="whitespace-nowrap px-6 py-4">pdf</td>
                        <td className="whitespace-nowrap px-6 py-4">User</td>
                        <td className="whitespace-nowrap px-6 py-4">False</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <Link
                            className="text-blue-400 underline"
                            href={"/admin/account"}>
                            Edit
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {manageTab === "license" && (
        <div className="w-full lg:px-10">
          <ReactSearchBox
            placeholder="Search ID"
            value="Doe"
            leftIcon={<BiSearchAlt size={25} />}
            iconBoxSize={"50px"}
            inputHeight={"50px"}
            data={tableData}
            callback={(record: object) => console.log(record)}
          />
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full table-auto text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          License ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          License Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          CF/DNI
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Owner
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Owner Profile
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
                        <td className="whitespace-nowrap px-6 py-4">
                          Thornton
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">Wild</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          @twitter
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          @twitter
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          4
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">htp</td>
                        <td className="whitespace-nowrap px-6 py-4">pdf</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          @twitter
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          @twitter
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          5
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">htp</td>
                        <td className="whitespace-nowrap px-6 py-4">pdf</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          @twitter
                        </td>
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
        </div>
      )}
    </div>
  );
};

export default page;

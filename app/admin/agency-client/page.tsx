"use client";
import { BiSearchAlt } from "react-icons/bi";
import { tableData } from "@/data/Table";
import ReactSearchBox from "react-search-box";
import { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [agencyTab, setAgencyTab] = useState<string>("list");

  return (
    <div className="w-full px-2">
      <div className="w-full h-20 my-5 px-3 lg:px-10 lg:w-2/3 2xl:w-2/3 space-x-5 flex items-center justify-between">
        <button
          type="button"
          aria-label="listAgencyTab"
          onClick={() => {
            setAgencyTab("list");
          }}
          className="w-1/2 space-y-3 lg:space-y-5 flex flex-col items-center justify-center">
          <p className="text-lg lg:text-2xl font-medium">List of Agencies</p>
          <div
            className={`w-full h-1 ${agencyTab === "list" && "bg-gray-500"}`}
          />
        </button>
        <button
          type="button"
          aria-label="dataAgencyTab"
          onClick={() => {
            setAgencyTab("data");
          }}
          className="w-1/2 space-y-3 lg:space-y-5 flex flex-col items-center justify-center">
          <p className="text-lg lg:text-2xl font-medium">Data Agencies</p>
          <div
            className={`w-full h-1 ${agencyTab === "data" && "bg-gray-500"}`}
          />
        </button>
      </div>

      {agencyTab === "list" && (
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

      {agencyTab === "data" && (
        <div className="w-full px-5">
          <div className="w-full flex flex-col justify-items-center sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-2 xl:grid-cols-4 lg:gap-8">
            <div className="md:col-span-1 w-full sm:w-full my-5 py-15 px-10 rounded-xl">
              <div className="flex flex-col">
                <div className="w-full">
                  <p className="text-lg mb-3">Name</p>
                  <input
                    type="text"
                    placeholder="Name"
                    defaultValue={"Ageny 1"}
                    className="w-full p-3"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 w-full sm:w-full my-5 py-15 px-10 rounded-xl">
              <div className="flex flex-col">
                <div className="w-full">
                  <p className="text-lg mb-3">CIF/DNI</p>
                  <input
                    type="text"
                    placeholder="CIF/DNI"
                    defaultValue={"45-45-45-45"}
                    className="w-full p-3"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 w-full sm:w-full my-5 py-15 px-10 rounded-xl">
              <div className="flex flex-col">
                <div className="w-full">
                  <p className="text-lg mb-3">BANK ACCOUNT</p>
                  <input
                    type="text"
                    placeholder="Bank Account"
                    defaultValue={"230230909"}
                    className="w-full p-3"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 w-full sm:w-full my-5 py-15 px-10 rounded-xl">
              <div className="flex flex-col">
                <div className="w-full">
                  <p className="text-lg mb-3">CONTACT NAME</p>
                  <input
                    type="text"
                    placeholder="Contact Name"
                    defaultValue={"Xela Oladipupo"}
                    className="w-full p-3"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 w-full sm:w-full my-5 py-15 px-10 rounded-xl">
              <div className="flex flex-col">
                <div className="w-full">
                  <p className="text-lg mb-3">PHONE CONTACT</p>
                  <input
                    type="text"
                    placeholder="Phone Contact"
                    defaultValue={"2349056565"}
                    className="w-full p-3"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 w-full sm:w-full my-5 py-15 px-10 rounded-xl">
              <div className="flex flex-col">
                <div className="w-full">
                  <p className="text-lg mb-3">MAIL CONTACT</p>
                  <input
                    type="text"
                    placeholder="Mail Contact"
                    defaultValue={"contact@contact.com"}
                    className="w-full p-3"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 w-full sm:w-full my-5 py-15 px-10 rounded-xl">
              <div className="flex flex-col">
                <div className="w-full">
                  <p className="text-lg mb-3">MONTHLY FEE</p>
                  <input
                    type="text"
                    placeholder="Monthly Fee"
                    defaultValue={"6$"}
                    className="w-full p-3"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 w-full sm:w-full my-5 py-15 px-10 rounded-xl">
              <div className="flex flex-col">
                <div className="w-full">
                  <p className="text-lg mb-3">COST FEE</p>
                  <input
                    type="text"
                    placeholder="Cost Fee"
                    defaultValue={"0.2$"}
                    className="w-full p-3"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 w-full sm:w-full my-5 py-15 px-10 rounded-xl">
              <div className="flex flex-col">
                <div className="w-full">
                  <p className="text-lg mb-3">LICENSE NUMBER</p>
                  <input
                    type="text"
                    placeholder="License Number"
                    defaultValue={"45454545"}
                    className="w-full p-3"
                  />
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

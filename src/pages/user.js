import React, { useEffect, useState } from "react";
import { UserTable } from "../../components/UserTable";
import { ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";

export const User = () => {
  // State for admin data
  const [Admins, setAdmins] = useState([]);
  const [LoadingAdmin, setLoadingAdmin] = useState(false);

  // Filter admin account after delete
  const filterAdmin = (id) => {
    setAdmins((prevAdmins) => prevAdmins.filter((admin) => admin._id !== id));
    deleteAdmin(id);
  };

  // Delete the account
  const deleteAdmin = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.log("Error deleting admin");
      }
      const finalData = await response.json();
      console.log(finalData);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch admins info
  const fetchAdmins = async () => {
    try {
      setLoadingAdmin(true);
      const response = await fetch("http://localhost:5000/api/admin/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.log("Error fetching data");
      }
      const finalData = await response.json();
      setAdmins(finalData.data || []);
      setLoadingAdmin(false);
    } catch (error) {
      setLoadingAdmin(false);
      console.log(error.message);
    }
  };

  // useEffect to fetch the data when the component mounts
  useEffect(() => {
    fetchAdmins();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full min-h-full">
      <div>
        <p className="text-2xl font-semibold tracking-[-.09rem]">
          User Management
        </p>
        <p className="text-gray-500 text-[14px] mt-2 ">
          Manage your Admins account details, so as your tenants
        </p>
      </div>
      {/* admins section */}
      <div className="mt-12">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
          <p className="text-lg font-semibold">
            All admins{" "}
            <span className="text-gray-400 ml-2">{Admins.length}</span>
          </p>
          <div className="flex gap-4">
            <div className="border border-gray-400 rounded-lg">
              <input
                type="text"
                className="w-full h-full pl-2 outline-none"
                placeholder="Search"
              />
            </div>
            <Link
              to={"add"}
              className="bg-[#7070FF] text-white rounded cursor-pointer text-[14px] py-2 px-4"
            >
              Add Admin
            </Link>
          </div>
        </div>
        {/* tables */}
        <div className="mt-12">
          {LoadingAdmin ? (
            <div className="w-full flex justify-center">
              <ScaleLoader />
            </div>
          ) : Admins && Admins.length > 0 ? (
            Admins.map((data, index) => (
              <UserTable
                deleteAdmin={() => filterAdmin(data._id)}
                id={data._id}
                key={index}
                username={data.userName}
                email={data.email}
                role={data.role}
                createDate={data.createDate}
              />
            ))
          ) : (
            <p>Nothing to show here</p>
          )}
        </div>
      </div>
    </div>
  );
};
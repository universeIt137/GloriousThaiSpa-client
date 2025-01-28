import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { statusUpdateAlert } from "../../../helper/statusUpdateAlert";
import Swal from "sweetalert2";
import { deleteAlert } from "../../../helper/deleteAlert";

const ManageUser = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    window.scrollTo(0, 0);
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            Authorization: token,
        },
    };
    const { data: users = [], isLoading, isError, refetch, } = useQuery({
        queryKey: ["users"],

        queryFn: async () => {
            const res = await axiosPublic.get("/user", config);
            return res.data;
        },
    });
    const onUpdate = (id) => {
        navigate(`/dashboard/user-update/${id}`)
    };
    const onDelete = async (id) => {
        try {
            let resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/user/${id}`);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Delete Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            }
        } catch (error) {
            navigate(`/login`);
            localStorage.clear();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Delete Fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    const roleUpdate = async (id) => {
        try {
            let resp = await statusUpdateAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.put(`/user/${id}`, {}, config);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Role Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            }
        } catch (error) {
            navigate(`/login`);
            localStorage.clear();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Role Update Fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <table className="table-auto w-full border border-gray-200 shadow-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Role</th>
                            <th className="px-4 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user.id || index}
                                className={`text-center ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                            >
                                <td className="px-4 py-2 border-b">{user.name}</td>
                                <td className="px-4 py-2 border-b">{user.email}</td>
                                <td onClick={() => roleUpdate(user?._id)} className="px-4 cursor-pointer py-2 border-b">{user.role}</td>
                                <td className="px-4 py-2 border-b">
                                    <div className="flex justify-center gap-4">

                                        <button
                                            onClick={() => onDelete(user._id)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Delete"
                                        >
                                            <FaTrashAlt size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;

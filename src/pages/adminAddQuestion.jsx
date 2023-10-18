import React from "react";
import Header from "./Header";
import AdminSideBar from "./adminSideBar";
import Test1 from "./Test1";
import { GrAddCircle } from "react-icons/gr";
import NewQuestion from "./NewQuestion";
const AdminQuiz = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full mt-[5rem]">
          <div className="w-[80px] md:w-[330px] sticky top-[5rem]">
            <AdminSideBar active={1} />
          </div>
          {/* <AdminDashboardMain /> */}
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-center mt-4">
              <NewQuestion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminQuiz;

import React from "react";
import Header from "./Header";
import AdminSideBar from "./adminSideBar";
import Test1 from "./Test1";
import { GrAddCircle } from "react-icons/gr";
import Quiz from './Quiz'
import Forgotpass from './Forgotpass'
const AdminUpdatePassword = () => {
  
  return (
    <div>
      <Header />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full mt-[5rem]">
          <div className="w-[80px] md:w-[330px] sticky top-[5rem]">
            <AdminSideBar active={2} />
          </div>
          {/* <AdminDashboardMain /> */}
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-center mt-4">
              <Forgotpass />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdatePassword;

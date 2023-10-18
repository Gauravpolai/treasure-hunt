import React from "react";
import Header from "./Header";
import AdminSideBar from "./adminSideBar";
import Register from './Register'

const AdminQuiz = () => {

  return (
    <div className="">
      <Header />
      <div className="w-full flex overflow-hidden">
        <div className="flex items-start justify-between w-full mt-[5rem]">
          <div className="w-[80px] md:w-[330px] sticky top-[5rem]">
            <AdminSideBar active={3} />
          </div>
          {/* <AdminDashboardMain /> */}
          <div className="w-full flex flex-col">
            {/* <div className="flex items-center justify-center mt-4"> */}
            
              <Register />

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminQuiz;

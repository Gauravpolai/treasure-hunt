import React, { useEffect } from "react";
import Header from "./Header";
import AdminSideBar from "./adminSideBar";
import Test1 from "./Test1";
import Store from "../redux/store";
import { getAllQuiz } from "../redux/actions/quiz";
import { useSelector } from "react-redux";
import Loader from "./loader";
const Dashboard = () => {
  const { isLoading, allQuiz } = useSelector((state) => state.quiz);
  useEffect(() => {
    Store.dispatch(getAllQuiz());
  }, []);
  return (
    <div>
      <Header />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full mt-[4rem]">
          <div className="w-[80px] md:w-[330px] sticky top-[5rem]">
            <AdminSideBar active={1} />
          </div>
          {/* <AdminDashboardMain /> */}
          <div className="md:w-full flex flex-col justify-center w-[80%]">
            <div className="flex flex-wrap items-center justify-center mt-3">
              {isLoading ? (
                <Loader />
              ) : allQuiz && allQuiz.length > 0 ? (
                allQuiz.map((i, index) => (
                  <Test1 data={i} key={index} id={index} />
                ))
              ) : (
                <p className="text-[crimson] font-medium text-3xl">
                  No Quiz Added Yet!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

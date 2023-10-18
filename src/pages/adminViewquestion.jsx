import React, { useEffect } from "react";
import Header from "./Header";
import AdminSideBar from "./adminSideBar";
import Test1 from "./Test1";
import { GrAddCircle } from "react-icons/gr";
import Viewques from "./Viewques";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./loader";
import Store from "../redux/store";
import { getQuestionAdmin } from "../redux/actions/question";

const AdminviewQuestion = () => {
  const { id } = useParams();
  console.log("object", id);
  const { allQuestion, loader } = useSelector((state) => state.question);
  useEffect(() => {
    Store.dispatch(getQuestionAdmin(id));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full mt-[5rem]">
          <div className="w-[60px] md:w-[330px] sticky top-[5rem]">
            <AdminSideBar active={1} />
          </div>
          {/* <AdminDashboardMain /> */}
          <div className="w-full flex flex-col">
            <div className="flex justify-end mr-4 md:mr-[5rem] mt-3 rounded-full ">
              <GrAddCircle
                size={35}
                className="self-end flex justify-end hover:bg-gray-300 rounded-full"
                onClick={() => navigate(`/quiz/${id}/admin-add-question`)}
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              {loader ? (
                <Loader />
              ) : (
                <Viewques id={id} questions={allQuestion} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminviewQuestion;

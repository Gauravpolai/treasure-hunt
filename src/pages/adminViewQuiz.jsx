import React, {useEffect} from "react";
import Header from "./Header";
import AdminSideBar from "./adminSideBar";
import Test1 from "./Test1";
import { GrAddCircle } from "react-icons/gr";
import AdminView from './adminView'
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const AdminViewQuiz = (props) => {
  const params = useParams();
  console.log(params);
  const { loading, allQuiz } = useSelector((state) => state.quiz);
  console.log(allQuiz[params.id]);
  useEffect(()=>{
    console.log(12345)
  },[])
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
              <AdminView data={allQuiz[params.id]} id={allQuiz[params.id]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewQuiz;

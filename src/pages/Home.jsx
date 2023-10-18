import React, { useEffect } from "react";
import Store from "../redux/store";
import { getAllQuiz } from "../redux/actions/quiz";
import { useSelector } from "react-redux";
import Loader from "./loader";
import Header from "./Header";
import Test1 from "./Test1";
const Home = ()=> {
  const { isLoading, allQuiz } = useSelector((state) => state.quiz);
  useEffect(() => {
    Store.dispatch(getAllQuiz());
  }, []);
  
  return (
      <div className="min-h-screen bg-white overflow-hidden">
        <Header />
        <div className="flex flex-wrap items-center justify-center mt-10">
        <div className="md:w-full flex flex-col justify-center w-[80%]">
            <div className="flex flex-wrap items-center justify-center mt-8">
              {isLoading ? (
                <Loader />
              ) : allQuiz && allQuiz.length > 0 ? (
                allQuiz.map((i, index) => (
                  <Test1 data={i} key={index} id={index} />
                ))
              ) : (
                <div className="flex flex-col justify-center bg-slate-50  border border-gray-200 shadow-lg mx-0  py-8 px-4 md:p-8 rounded-3xl  mt-4 w-full md:mx-0 md:w-[80%] ">
                <p className="text-[crimson] font-medium text-3xl mt-4 text-center">
                  No Quiz Added Yet!
                </p>
                <p className="text-[crimson] font-medium text-xl  mt-4 text-center">
                  Visit Next Time &#128522;
                </p>
                </div>
              )}
            </div>
          </div>
          {/* <Test1 name="Quiz 2" key={2}/> */}
          {/* {data && data.map((i, index) => <Test1 name={i.name} key={index} description={"loremd nbhf bghbbb bbbbbb bbbbb bbbbb bbbbb bbbb bbbb bbb bbnb hbvf hbjb jbjb fjvghcgch bjbhcfcbn bjbvgfc bjhvcgvjb hgcbbjvgvvnbj gv"}/>)} */}
        </div>
      </div>
  );
}

export default Home;
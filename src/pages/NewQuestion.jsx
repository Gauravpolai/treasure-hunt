import { useState, useEffect } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Input from './input.jsx'

const validationSchema = Yup.object({
  description: Yup.string().trim().required('Description is required'),
  option1: Yup.string().trim().required('Option is required'),
  option2: Yup.string().trim().required('Option is required'),
  option3: Yup.string().trim().required('Option is required'),
  option4: Yup.string().trim().required('Option is required'),
})

function NewQuestion(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { allQuiz } = useSelector((state) => state.quiz);

  const emptyElement = {
    description: "",
    imgdescp: null,
    option1: "",
    imgoption1: null,
    option2: "",
    imgoption2: null,
    option3: "",
    imgoption3: null,
    option4: "",
    imgoption4: null,
    correctoption: "",
  };
  const [question, setQuestion] = useState(emptyElement);
  const data = allQuiz.filter(
    (i) =>
      i._id === params.id

  );

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      setQuestion({ ...question, [name]: file });
    } else {
      setQuestion({ ...question, [name]: value });
    }
  };

  const handleNext = async (e) => {
    console.log(123);
    e.preventDefault();
    const ddata = {
      description: question.description,
      imageDescription: question.imgdescp,
      options: [
        {
          text: question.option1,
          image: question.imgoption1,
        },
        {
          text: question.option2,
          image: question.imgoption2,
        },
        {
          text: question.option3,
          image: question.imgoption3,
        },
        {
          text: question.option4,
          image: question.imgoption4,
        },
      ],
      correctOption: +question.correctoption[6],
    };
    console.log(ddata);
    try {
      const d = await axios.post(
        `https://treasure-hunt-tcb7.onrender.com/api/v1/question/create-question/${data[0]._id
        }`,
        ddata,
        { withCredentials: true }
      );
      console.log(d);
      console.log(data[0])
      navigate(`/quiz/${data[0]._id}/admin-view-question`);
    } catch (error) {
      console.log(error);
    }
  };

  const imagehandler = (e) => {
    if (e.target.files[0]) {
      setQuestion({ ...question, [e.target.name]: e.target.files[0] });
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(e.target.name);
        console.log(reader.result);
        setQuestion({ ...question, [e.target.name]: reader.result });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="flex-col items-center justify-center ">
      <div className="bg-gray-300 rounded-xl p-6 md:p-8 w-[90%] m-4 shadow-xl md:w-[36rem]  ">
        <h1 className="font-bold text-transform: uppercase text-3xl text-gray-800 mb-4 flex justify-center border-b-2 border-black pb-4">
          {data[0].name}
        </h1>
        <h1 className="font-semibold text-xl text-gray-800 mb-4">
          New Question
        </h1>
        <Formik
          initialValues={emptyElement}
          validationSchema={validationSchema}
          onSubmit={() => {
            // handleSubmit(values, { setSubmitting });
          }}
        >
        {
        ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
          const { name, description } = values;
            return (
              <Form>
              <div className="mb-4">
                <Input text="textarea" label="Description" placeholder="Quiz Description" id="description" value={description} onChange={handleChange} onBlur={handleBlur} error={touched.description && errors.description} />

                <div className="flex">
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Description of the question"
                    className="p-2 border rounded-xl md:w-[90%] w-[90%] h-32 resize-none"
                    value={question.description}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    htmlFor="imgdescp"
                    className="ml-1 md:ml-5 flex-col flex justify-center w-[10%] cursor-pointer "
                  >
                    <AiOutlineCloudUpload size={50} color="indigo" className="hidden md:block" />
                    <AiOutlineCloudUpload size={45} color="indigo" className="visible md:hidden" />
                  </label>
                  <input
                    type="file"
                    id="imgdescp"
                    name="imgdescp"
                    accept="image/*"
                    className=" md:w-[10%] "
                    onChange={imagehandler}
                    hidden
                  />
                </div>
                <img className="mx-2 my-3" src={question.imgdescp} width={100} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Option 1:
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="option1"
                    name="option1"
                    placeholder="Option 1"
                    value={question.option1}
                    onChange={handleInputChange}
                    className="p-2 border rounded-xl md:w-[90%] w-[90%]"
                  />
                  <label
                    htmlFor="option1img"
                    className="ml-1 md:ml-5 w-[10%] cursor-pointer "
                  >
                    <AiOutlineCloudUpload size={50} color="indigo" className="hidden md:block" />
                    <AiOutlineCloudUpload size={45} color="indigo" className="visible md:hidden" />
                  </label>
                  <input
                    type="file"
                    id="option1img"
                    name="imgoption1"
                    accept="image/*"
                    className=" md:w-1/2 inp"
                    onChange={imagehandler}
                    hidden
                  />
                </div>
                <img
                  className="mx-2 my-3"
                  src={question.imgoption1}
                  width={100}
                // alt={fileName}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Option 2:
                </label>
                <div className="flex ">
                  <input
                    type="text"
                    id="option2"
                    name="option2"
                    placeholder="option 2"
                    value={question.option2}
                    onChange={handleInputChange}
                    className="p-2 border rounded-xl md:w-[90%] w-full"
                  />
                  <label
                    htmlFor="option2img"
                    className="ml-1 md:ml-5 w-[10%] cursor-pointer"
                  >
                    <AiOutlineCloudUpload size={50} color="indigo" className="hidden md:block" />
                    <AiOutlineCloudUpload size={45} color="indigo" className="visible md:hidden" />
                  </label>
                  <input
                    type="file"
                    id="option2img"
                    name="imgoption2"
                    accept="image/*"
                    className="  w-full md:w-1/2 "
                    onChange={imagehandler}
                    hidden
                  />
                </div>
                <img className="mx-2 my-3" src={question.imgoption2} width={100} />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Option 3:
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="option3"
                    name="option3"
                    placeholder="Option 3"
                    value={question.option3}
                    onChange={handleInputChange}
                    className="p-2 border rounded-xl md:w-[90%] w-full"
                  />
                  <label
                    htmlFor="imgoption3"
                    className="ml-1 md:ml-5 w-[10%] cursor-pointer"
                  >
                    <AiOutlineCloudUpload size={50} color="indigo" className="hidden md:block" />
                    <AiOutlineCloudUpload size={45} color="indigo" className="visible md:hidden" />
                  </label>
                  <input
                    type="file"
                    id="imgoption3"
                    name="imgoption3"
                    accept="image/*"
                    className="input-field w-full md:w-[10%]"
                    onChange={imagehandler}
                    hidden
                  />
                </div>
                <img className="mx-2 my-3" src={question.imgoption3} width={100} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 ">
                  Option 4:
                </label>
                <div className="flex w-full">
                  <input
                    type="text"
                    id="option4"
                    name="option4"
                    placeholder="Option 4"
                    value={question.option4}
                    onChange={handleInputChange}
                    className="p-2 border rounded-xl md:w-[90%] w-full"
                  />
                  <label
                    htmlFor="option4img"
                    className="ml-1 md:ml-5 w-[10%] cursor-pointer "
                  >
                    <AiOutlineCloudUpload size={50} color="indigo" className="hidden md:block" />
                    <AiOutlineCloudUpload size={45} color="indigo" className="visible md:hidden" />
                  </label>
                  <input
                    type="file"
                    id="option4img"
                    name="imgoption4"
                    accept="image/*"
                    className=" w-full md:w-1/2"
                    onChange={imagehandler}
                    hidden
                  />
                </div>
                <img className="mx-2 my-3" src={question.imgoption4} width={100} />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="answer"
                >
                  Correct Answer
                </label>
                <div>
                  <select
                    value={question.correctoption}
                    onChange={handleInputChange}
                    name="correctoption"
                    className="p-3 border rounded-xl w-[86%]"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  className="shadow-2xl bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white font-bold py-2 px-4 rounded-xl focus:outline"
                  onClick={handleNext}
                >
                  Submit
                </button>
              </div>
              </Form>
            )
          }
        }  
        </Formik>
      </div>
    </div>
  );
}

export default NewQuestion;

import { useFormik } from "formik";
import { bookSchema } from "../Schemas/BookSchema";
import { UseAppContext } from "../Context/AppContex";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Book Add and Update Form design and functionalities
export default function BooksAddUpdateForm ({children}) {
    const {
        booksData, setBooksData, booksFormInitialData, setBooksFormInitialData,
        showBtnUpdate, setShowBtnUpdate, editId, editIdx
    } = UseAppContext();
    const [successMessage, setSuccessMessage] = useState("")
    const [failureMessage, setFailureMessage] = useState("")
    const navigate = useNavigate();

    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
      }= useFormik({
        initialValues : booksFormInitialData,
        validationSchema : bookSchema,
        onSubmit : (newBookData, {resetForm}) => {
            // console.log(newBookData);
            if (showBtnUpdate) {
                updatebookdata(newBookData);
            }
            else {
                addbookdata(newBookData);
            }
            resetForm({ values: "" });
        }
      });

      // Book update data functionality
      function updatebookdata(newBookData) {
        // console.log(newBookData);
        setSuccessMessage("Loading Please Wait ...")
        fetch(`https://6604ddfa2ca9478ea17ea44d.mockapi.io/inter/${editId}`, {
            method : "PUT",
            body : JSON.stringify(newBookData),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((addedData) => {
            // console.log(addedData);
            booksData[editIdx] = addedData;
            setSuccessMessage("Saved Successfully");
            setTimeout(() => {
                navigate("/books/dashboard");
            }, 1500)
            setBooksFormInitialData ({
                title : "",
                author : "",
                isbn : "",
                publication_date : ""
            })
        })
        .catch((error) => {
            console.log(error);
            setFailureMessage("!Failed to Save Data");
        })
      }

      // Book Add data functionality
      function addbookdata(newBookData) {
        // console.log(newBookData);
        // setBooksData([...booksData, newBookData]);
        // setSuccessMessage("Saved Successfully");
        // setTimeout(() => {
        //   setSuccessMessage("");
        // }, 3000)
        setSuccessMessage("Loading Please Wait ...")
        fetch("https://6604ddfa2ca9478ea17ea44d.mockapi.io/inter", {
            method : "POST",
            body : JSON.stringify(newBookData),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((addedData) => {
            // console.log(addedData);
            setBooksData([...booksData, addedData]);
            setSuccessMessage("Saved Successfully");
            setTimeout(() => {
                setSuccessMessage("");
            }, 2000)
        })
        .catch((error) => {
            console.log(error);
            setFailureMessage("!Failed to Save Data");
        })
      }
  
      return (
          <>
          {children}
          <div className="grid grid-cols-1 place-content-start h-screen rounded-lg border-2 border-orange-300 shadow-inner shadow-orange-300">
            <form className="flex flex-col gap-4 p-5" onSubmit={handleSubmit}>
                <div className="flex gap-2 justify-center items-center">
                    <p className="w-1/3 text-right">Enter Book Title :</p>
                    <div className="w-2/3">
                        <input
                            className="p-3 w-4/5 rounded-lg border-2 border-orange-300 hover:ring hover:ring-orange-400 focus:outline-none focus:ring focus:ring-orange-400"
                            value={values.title}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="title"
                            type="text" 
                            placeholder="EnterBookTitle"
                        />
                        {
                        touched.title && errors.title ?
                        (<div className="pl-4 text-error text-start text-small">{errors.title}</div>)
                        :
                        ("")
                        }
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <p  className="w-1/3 text-right">Enter Author Name :</p>
                    <div  className="w-2/3">
                        <input
                            className="p-3 w-4/5  rounded-lg border-2 border-orange-300 hover:ring hover:ring-orange-400 focus:outline-none focus:ring focus:ring-orange-400"
                            value={values.author}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="author"
                            type="text" 
                            placeholder="EnterAuthorName"
                        />
                        {
                        touched.author && errors.author ?
                        (<div className="pl-4 text-error text-start text-small">{errors.author}</div>)
                        :
                        ("")
                        }
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <p  className="w-1/3 text-right">Enter isbn No :</p>
                    <div  className="w-2/3">
                        <input
                            className="p-3 w-4/5  rounded-lg border-2 border-orange-300 hover:ring hover:ring-orange-400 focus:outline-none focus:ring focus:ring-orange-400"                    value={values.isbn}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="isbn"
                            type="text" 
                            placeholder="Enter isbn No"
                        />
                        {
                        touched.isbn && errors.isbn ?
                        (<div className="pl-4 text-error text-start text-small">{errors.isbn}</div>)
                        :
                        ("")
                        }
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <p  className="w-1/3 text-right">Select Publication Date :</p>
                    <div  className="w-2/3">
                        <input
                            className="p-3 w-4/5  rounded-lg border-2 border-orange-300 hover:ring hover:ring-orange-400 focus:outline-none focus:ring focus:ring-orange-400"
                            value={values.publication_date}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="publication_date"
                            type="date"
                            placeholder="Select Publication date"
                        />
                        {
                        touched.publication_date && errors.publication_date ?
                        (<div className="pl-4 text-error text-start text-small">{errors.publication_date}</div>)
                        :
                        ("")
                        }
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    {
                        showBtnUpdate ?
                        (<button 
                            className="p-3 px-8 rounded-lg border-1 border-orange-200 bg-gradient-to-b from-orange-300 to-orange-500 font-semibold hover:text-white hover:bg-orange-500 hover:shadow-md hover:shadow-orange-800 focus:outline-none focus:text-white focus:bg-orange-500 focus:shadow-md focus:shadow-orange-800"
                            type="submit">Update
                        </button>)
                        :
                        (<button 
                            className="p-3 px-8 rounded-lg border-1 border-orange-200 bg-gradient-to-b from-orange-300 to-orange-500 font-semibold hover:text-white hover:bg-orange-500 hover:shadow-md hover:shadow-orange-800 focus:outline-none focus:text-white focus:bg-orange-500 focus:shadow-md focus:shadow-orange-800"
                            // className="p-3 px-8 rounded-lg bg-white font-semibold hover:text-white hover:border-2 hover:bg-orange-500 hover:shadow-lg focus:text-white focus:bg-orange-500 focus:shadow-lg"
                            // className="p-3 px-8 rounded-lg bg-white hover:ring hover:ring-orange-400 focus:outline-none focus:ring focus:ring-orange-400"
                            type="submit">Add
                        </button>)
                    }
                </div>
            </form>
            <div className="p-2 text-center text-xl text-orange-500 font-semibold">
                {
                    successMessage ?
                    (<div>{successMessage}</div>) : ("")
                }
                {
                    failureMessage ?
                    (<div>{failureMessage}</div>) : ("")
                }
            </div>
            </div>
          </>
      )
  }
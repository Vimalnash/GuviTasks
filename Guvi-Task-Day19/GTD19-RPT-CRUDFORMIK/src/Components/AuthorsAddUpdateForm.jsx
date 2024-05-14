import { useFormik } from "formik"
import { authorSchema } from "../Schemas/AuthorSchema"
import { UseAppContext } from "../Context/AppContex";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Author Add and Update Form design and functionalities
export default function AuthorsAddUpdateForm({children}) {
    const {
        authorsData, setAuthorsData, authorFormInitialData, setAuthorFormInitialData,
        showAuthorBtnUpdate, setShowAuthorBtnUpdate, authorEditId, authorEditIdx
        
    } = UseAppContext();
    const [successMessage, setSuccessMessage] = useState("")
    const [failureMessage, setFailureMessage] = useState("")
    const navigate = useNavigate();

    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched
    } = useFormik({
        initialValues : authorFormInitialData,
        validationSchema:authorSchema,
        onSubmit: (values, {resetForm}) => {
            // console.log(values);
            if(showAuthorBtnUpdate) {
                updateAuthorData(values);
            }
            else {
                addAuthorData(values);
            }
            resetForm({ values: "" });
        }
    })

    // Update Author Data functionality
    function updateAuthorData(newAuthorData) {
        // console.log(newAuthorData, authorEditId);
        setSuccessMessage("Loading Please Wait ...")
        fetch(`https://6604ddfa2ca9478ea17ea44d.mockapi.io/users/${authorEditId}`, {
            method : "PUT",
            body : JSON.stringify(newAuthorData),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((updatedData) => {
            // console.log(updatedData);
            authorsData[authorEditIdx] = updatedData;
            setSuccessMessage("Saved Successfully");
            setAuthorFormInitialData ({
                author_name : "",
                author_birthdate : "",
                author_biography : ""
            });
            setTimeout(() => {
                navigate("/authors/dashboard");
            }, 1500);
        })
        .catch((error) => {
            console.log(error);
            setFailureMessage("!Failed to Save Data");
        })
      }

      // Add Author Data
      function addAuthorData(newAuthorData) {
        setSuccessMessage("Loading Please Wait ...")
        fetch("https://6604ddfa2ca9478ea17ea44d.mockapi.io/users", {
            method : "POST",
            body : JSON.stringify(newAuthorData),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((addedData) => {
            // console.log(addedData);
            setAuthorsData([...authorsData, addedData]);
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
                        <p className="w-1/3 text-right">Enter AuthorName : </p>
                        <div className="w-2/3">
                            <input 
                                className="p-3 w-4/5 rounded-lg border-2 border-orange-300 hover:ring hover:ring-orange-400 focus:outline-none focus:ring focus:ring-orange-400"
                                type="text" 
                                placeholder="author_name"
                                name="author_name"
                                value={values.author_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                touched.author_name && errors.author_name ?
                                (<div className="pl-4 text-start text-small text-error">{errors.author_name}</div>)
                                : 
                                ("")
                            }
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <p className="w-1/3 text-right">Enter Author BirthDate : </p>
                        <div className="w-2/3">
                            <input 
                                className="p-3 w-4/5 rounded-lg border-2 border-orange-300 hover:ring hover:ring-orange-400 focus:outline-none focus:ring focus:ring-orange-400"
                                type="date" 
                                placeholder="author_birthdate"
                                name="author_birthdate"
                                value={values.author_birthdate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                touched.author_birthdate && errors.author_birthdate ?
                                (<div className="pl-4 text-start text-small text-error ">{errors.author_birthdate}</div>)
                                : 
                                ("")
                            }
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <p className="w-1/3 text-right">Enter Biography : </p>
                        <div className="w-2/3">
                            <input 
                                className="p-3 w-4/5 rounded-lg border-2 border-orange-300 hover:ring hover:ring-orange-400 focus:outline-none focus:ring focus:ring-orange-400"
                                type="text" 
                                placeholder="author_biography"
                                name="author_biography"
                                value={values.author_biography}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                touched.author_biography && errors.author_biography ?
                                (<div className="pl-4 text-start text-small text-error">{errors.author_biography}</div>)
                                : 
                                ("")
                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        {
                            showAuthorBtnUpdate ?
                            (<button
                                className="p-3 px-8 rounded-lg border-1 border-orange-200 bg-gradient-to-b from-orange-300 to-orange-500 font-semibold hover:text-white hover:bg-orange-500 hover:shadow-md hover:shadow-orange-800 focus:outline-none focus:text-white focus:bg-orange-500 focus:shadow-md focus:shadow-orange-800"
                                type="submit"> Update
                            </button>)
                            : 
                            (<button
                                className="p-3 px-8 rounded-lg border-1 border-orange-200 bg-gradient-to-b from-orange-300 to-orange-500 font-semibold hover:text-white hover:bg-orange-500 hover:shadow-md hover:shadow-orange-800 focus:outline-none focus:text-white focus:bg-orange-500 focus:shadow-md focus:shadow-orange-800"
                                type="submit"> Add
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
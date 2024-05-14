import * as yup from "yup";

// Schema for Book
export const bookSchema = yup.object().shape({
        title : yup.string().required("Please Fill in Book Title").min(5, "Min 5 Character Required"),
        author : yup.string().required("Please Fill in AuthorName").min(2, "Min 2 Character Required"),
        isbn : yup.string().required("Please Fill in isbn No").min(5, "Min 5 digits Required"),
        publication_date : yup.string().required("Please select Publication Date"),

})

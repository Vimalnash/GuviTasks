import * as yup from "yup";

// Schema for Author
export const authorSchema = yup.object({
    author_name : yup.string().required("Required authorName").min(2, "Min 2 Characters Required"),
    author_birthdate : yup.string().required("Required Date"),
    author_biography : yup.string().required("Required to Fill Biography").min(15, "Min 15 Characters Required"),
})
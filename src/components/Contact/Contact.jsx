import { useState } from "react";
import "./Contact.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Contact = () => {
  const [form, setForm] = useState(false);
  return (
    <>
      <div className="title-form">
        <h2 className="contact-us"> Contact us</h2>
      </div>
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            email: "",
            comments: "",
          }}
          validate={(values) => {
            let errors = {};

            if (!values.name) {
              errors.name = "Field name is requiered";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
              errors.name = "field name accept just letters and spaces";
            }

            if (!values.email) {
              errors.email = "Field email is requiered";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errors.email = "Email is incorrect";
            }

            if (!values.comments) {
              errors.comments = "Please write your comments";
            }

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            setForm(true);
            setTimeout(() => setForm(false), 4000);
            console.log(values);
            console.log("enviado");
          }}
        >
          {({ errors, isSubmitting }) => (
            <Form className="form">
              <div className="div-name">
                <div className="label">
                  <label htmlFor="name">Name</label>
                </div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                />
                <ErrorMessage
                  name="name"
                  component={() => <div className="error">{errors.name} </div>}
                />
              </div>
              <div className="div-email">
                <div className="label">
                  <label htmlFor="email">Email</label>
                </div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="JohnDoe@gmail.com"
                />

                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email} </div>}
                />
              </div>
              <div className="div-comments">
                <div className="label">
                  <label htmlFor="comment">Leave us a comment</label>
                </div>

                <Field
                  as="textarea"
                  name="comments"
                  cols="50"
                  rows="6"
                  placeholder="write your comments"
                ></Field>
                <ErrorMessage
                  name="comments"
                  component={() => (
                    <div className="error">{errors.comments} </div>
                  )}
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn-form"
              >
                Send
              </button>
              {form && <p className="send"> your comment has been sent</p>}
            </Form>
          )}
        </Formik>
        ;
      </div>
    </>
  );
};

export default Contact;

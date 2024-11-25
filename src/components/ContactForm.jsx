/** @format */

import * as Yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";

export function ContactFrom({
  handleAdd,
  initialValues,
  nameId,
  numberId,
  validationSchema,
}) {
  console.log(css.contactFrom);
  console.log("^ to jest console.log z pliku ContactForm.module.css");

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        padding: "20px",
        margin: 10,
      }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleAdd}
        validationSchema={validationSchema}>
        <Form>
          <label htmlFor={nameId}>
            <strong>Name</strong>
          </label>
          <br />
          <Field type="text" name="name" id={nameId} />
          <br />
          <ErrorMessage name="name" as="span" />
          <br />
          <br />
          <label htmlFor={numberId}>
            <strong>Number</strong>
          </label>
          <br />
          <Field type="tel" name="number" id={numberId} />
          <br />
          <ErrorMessage name="number" as="span" />
          <br />
          <br />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}

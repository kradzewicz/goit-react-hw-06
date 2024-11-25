/** @format */
import { Formik, Form, Field } from "formik";

export function SearchBox({ value, handleFilterChange }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        padding: "0px 20px 20px",
        margin: 10,
      }}>
      <Formik>
        <Form>
          <p>Search by name:</p>
          <Field type="text" value={value} onChange={handleFilterChange} />
        </Form>
      </Formik>
    </div>
  );
}

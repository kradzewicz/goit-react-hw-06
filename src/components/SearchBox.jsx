/** @format */
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { filterContacts } from "../redux/filterSlice";

export function SearchBox({}) {
  const dispatch = useDispatch();
  // const handleFilterChange = (e) => {
  //   setFilter(e.target.value);
  // };

  // const visibleContacts = contactList.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

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
          <Field
            type="text"
            onChange={(e) => dispatch(filterContacts(e.target.value))}
          />
        </Form>
      </Formik>
    </div>
  );
}

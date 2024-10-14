import { Formik, Form, Field } from "formik";
import {
  InputContainer,
  MainContainer,
  Label,
  StyledSelect,
  FilterBtn,
} from "./Filter.styled";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  // filterValue,
  resetFilter,
} from "../../redux/filter/filterSlice";
import { database } from "../../../src/components/firebase/firebase";
import { orderByChild, query, ref } from "firebase/database";
import { useState } from "react";

const TEACHERS_COLLECTION = "teachers";

export const Filter = () => {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);

  console.log(filteredData);

  const FilterSchema = Yup.object().shape({
    language: Yup.string(),
    level: Yup.string(),
    price: Yup.number(),
  });

  const onSubmit = (values, actions) => {
    const dbRef = ref(database, TEACHERS_COLLECTION);
    let q = dbRef;

    if (values.language !== "allLang") {
      q = query(q, orderByChild("language").equalTo(values.language));
    }
    if (values.level !== "allLevels") {
      q = query(q, orderByChild("level").equalTo(values.level));
    }
    if (values.price !== "allPrices") {
      q = query(q, orderByChild("price").equalTo(parseFloat(values.price)));
    }

    q.once("value")
      .then((snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setFilteredData(dataArray);
        } else {
          setFilteredData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching filtered data:", error);
      });
  };

  return (
    <Formik
      initialValues={{
        language: "",
        level: "",
        price: "",
      }}
      validationSchema={FilterSchema}
      onSubmit={onSubmit}

      // {(values, action) => {
      //   dispatch(filterValue(values));
      //   action.resetForm();
      //   console.log(values);
      // }}
    >
      <Form>
        <MainContainer>
          <InputContainer>
            <Label htmlFor="language">Languages</Label>
            <Field name="language" as={StyledSelect}>
              <option value="allLang">All languages</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="italian">Italian</option>
              <option value="korean">Korean</option>
              <option value="mandarin">Mandarin Chinese</option>
              <option value="vietnamese">Vietnamese</option>
            </Field>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="level">Level of knowledge</Label>
            <Field name="level" as={StyledSelect}>
              <option value="allLevels">All levels</option>
              <option value="a1">A1 Beginner</option>
              <option value="a2">Elementary</option>
              <option value="b1">Intermediate</option>
              <option value="b2">Upper-Intermediate</option>
              <option value="c1">Advanced</option>
              <option value="c2">Proficient</option>
            </Field>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="price">Price</Label>
            <Field name="price" as={StyledSelect}>
              <option value="allPrices">All prices</option>
              <option value="25">25</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="30">30</option>
              <option value="32">32</option>
              <option value="35">35</option>
            </Field>
          </InputContainer>
          <FilterBtn type="submit">Search</FilterBtn>
          <FilterBtn
            type="button"
            onClick={() => {
              dispatch(resetFilter());
            }}
          >
            Reset filters
          </FilterBtn>
        </MainContainer>
      </Form>
    </Formik>
  );
};

import React from "react";
import { Suspense } from 'react';
import Confirm from "./Confirm.js";
import Loader from "../Loader.js";

const page = () => {
  return (

     <Suspense fallback={<Loader />}>
      <Confirm />
    </Suspense>
  );
};

export default page;

import { useEffect, useState } from "react";
import alasql from "alasql";
import TABLE_NAMES from '../constants/TABLE_NAMES'


const Data = (tableName) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [runtime, setRuntime] = useState("");
  
    //console.log(tableName)
  //?URL
  //const name = tableName
  const getURL = (name) =>
  `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${name}.csv`;

    //? convert to json
    const convertToJson = (data) => {
        alasql
          .promise("SELECT * FROM CSV(?, {headers: false, separator:','})", [data])
          .then((data) => {
            setData(data);
           // console.log("success")
            //toast.success("Query run successfully");
          })
          .catch((e) => {
              //console.log("error json")
            //toast.error(e.message);
          });
      };

  //?fetch and update data
  useEffect(() => {
    const fetchData = (tableName) => {
      setData([]);
      const name = TABLE_NAMES.find((name) => name === tableName);
      if (name) {
        setError(false);
        fetch(getURL(tableName), {
          headers: {
            Accept: "application/vnd.github.v4+raw",
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Something went wrong");
            }
          })
          .then((data) => convertToJson(atob(data.content.replace("\n", ""))))
          .catch((error) => {
            //toast.error(error.message);
            //console.log(error)
          });
      } else {
        setError(true);
        //toast.error("Please enter a valid query");
       // console.log("error in set")
      }
    };
    let t0 = performance.now(); //start time
    fetchData(tableName);
    let t1 = performance.now(); //end time
    setRuntime(t1 - t0);
  }, [tableName]);
  //console.log(data)
  return { data, runtime, error };
};

export default Data;

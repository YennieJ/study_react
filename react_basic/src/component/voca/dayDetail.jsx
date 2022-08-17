import React from "react";
import dummy from "../../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./word";

const DayDetail = () => {
  // const countday = useParams();
  // const day = countday.day;

  // const day = useParams().day

  const { day } = useParams();

  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day{day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DayDetail;

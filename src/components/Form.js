import React, { useState } from "react";
import "./form.css";


export const Form = ({addMovie}) => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    genre: "",
    explanation: "",
    director: "",
    year:"",
  });
  const { title, genre, explanation, director, year } = formInfo;
  const handleChange=(e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name)
    const{value,name}=e.target
    setFormInfo({...formInfo,[name]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newMovie = {
      title: title,
      genre: genre,
      explanation: explanation,
      director: director,
      year: year
    };
    addMovie(newMovie);
    clearInputs();
  }
  const clearInputs=()=>{
    setFormInfo({
        title: "",
        genre: "وحشت/هیجانی",
        explanation: "",
        director: "",
        year: "",
    });
  }

  const cancleSubmit=(e)=>{
    e.preventDefault()
    clearInputs();
  }
  
  return (
    <form>
      <div className="container">
        <div className="firstCol">
          <label>نام فیلم</label>
          <input
            name="title"
            value={title}
            placeholder="نام فیلم را وارد کنید"
            onChange={(e) => handleChange(e)}
          />
          <label>کارگردان</label>
          <input
            name="director"
            placeholder="نام کارگردان را وارد کنید"
            onChange={(e) => handleChange(e)}
            value={director}
          />
        </div>
        <div className="secondCol">
          <label>ژانر فیلم</label>
          <select name="genre" onChange={(e) => handleChange(e)}>
            <option value={genre}>وحشت/هیجانی</option>
            <option value="کمدی">کمدی</option>
            <option value="درام">درام</option>
          </select>
          <label>سال تولید</label>
          <input
            name="year"
            placeholder="سال تولید را وارد کنید"
            onChange={(e) => handleChange(e)}
            value={year}
          />
        </div>
        <div className="thirdCol">
          <label>توضیحات</label>
          <textarea
            name="explanation"
            placeholder="توضیحات درباره فیلم"
            onChange={(e) => handleChange(e)}
            value={explanation}
          ></textarea>
          <div className="formButtons">
            <button className="save" onClick={handleSubmit}>
              ذخیره
            </button>
            <button className="cancle" onClick={cancleSubmit}>
              انصراف
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

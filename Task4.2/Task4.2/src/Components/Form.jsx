import React, { useState } from 'react';
import '../Styles/Form.css';

const Form = () => {
    const [isCheckedItems, setIsCheckedItems]= useState(new Map());
    const courses=[
      {id:1, value:"React"},
      {id:2, value:"javaScript"},
      {id:3, value:"CSS"},
      {id:4, value:"HTML"},
    ]
    const [input,setInput]= useState({
      f_name:"",
      email:"",
      gender:"",
      country:"",
      date:"",
    });

    const [errorFields, setErrorFields]=useState({
      f_name:false,
      email:false,
      gender:false,
      country:false,
      date:false,
    })

    const onHandleChecked =(event)=>{
     const { value, checked} = event.target;
     setIsCheckedItems((prev) =>{
      const updatedMap= new Map(prev);
      updatedMap.set(value, checked);
      return updatedMap;
     });
    }

    const onHandleChange =(event)=>{
      const {name, value} =event.target;
      setInput((prev) =>({
        ...prev,
         [name] : value}))
    }

    const isFormValid =()=>
      {
        let isValid=true;
      //first name validation 
      if(input.f_name ==="")
       {
         setErrorFields((prev)=>({
          ...prev,
          f_name:true,
          }));
          isValid= false;
        }
      else
      {
        setErrorFields((prev)=>({
          ...prev,
          f_name:false,
        }));
        isValid= true;
      }

    if(input.email=== "")
        {
          setErrorFields((prev)=>({
            ...prev,
            email:true,
          }));
          isValid= false;
        }
        else
        {
          setErrorFields((prev)=>({
            ...prev,
            email:false,
          }));
          isValid= true;
        }

        //gender validation
      if(!input.gender)
        {
          setErrorFields((prev)=>({
            ...prev,
            gender:true,
          }));
          isValid= false;
        }
        else
        {
          setErrorFields((prev)=>({
            ...prev,
            gender:false,
          }));
          isValid= true;
        }

        if(!input.country)
          {
            setErrorFields((prev)=>({
              ...prev,
              country:true,
            }));
            isValid= false;
          }
          else
          {
            setErrorFields((prev)=>({
              ...prev,
              country:false,
            }));
            isValid= true;
          }
          const isAnyCourseChecked = Array.from(isCheckedItems.values()).some((isChecked) => isChecked);
          if(!isAnyCourseChecked)
            {
              setErrorFields((prev)=>({
                ...prev,
                courses:true,
              }));
              isValid= false;
            }
            else
            {
              setErrorFields((prev)=>({
                ...prev,
                courses:false,
              }));
              isValid= true;
            }
            const currentDate = new Date().toISOString().split("T")[0]; 
            if(!input.date || input.date<currentDate)
              {
                setErrorFields((prev)=>({
                  ...prev,
                  date:true,
                }));
                isValid= false;
              }
              else
              {
                setErrorFields((prev)=>({
                  ...prev,
                  date:false,
                }));
                isValid= true;
              }

       return isValid;
      };
      

    const onHandleSubmit =(event)=>{
      event.preventDefault();
      if(isFormValid()){
        console.log("valid")
      console.log("Input data:", input);
      console.log(Array.from(isCheckedItems.entries()));
      return;
    }
    console.log("invalid");
  }
    
    return (
      <>
      <form onSubmit={onHandleSubmit}>
        <div className="element-container">
          <label htmlFor="f_name">
            First Name:
            <input
              type="text"
              id="f_name"
              onChange={onHandleChange}
              name="f_name"
            />
            </label>
            {errorFields.f_name && <p className='error-msg'>First Name is required</p>}
          
    
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              onChange={onHandleChange}
              name="email"
            />
          </label>
          {errorFields.email && <p className='error-msg'>Email is required</p>}

          
          
          <div className='gender-container'>
          <label>Gender:</label>
          <input
            type="radio"
            value="male"
            name="gender"
            id="male"
            onChange={onHandleChange}
          />
          <label htmlFor="male" className='gender-label'>Male</label>
          <input
            type="radio"
            value="female"
            name="gender"
            id="female"
            className='gender-label'
            onChange={onHandleChange}
          />
          <label htmlFor="female" className='gender-label'>Female</label>
          </div>
          {errorFields.gender && <p className='error-msg'>gender is required</p>}


          <label>Country</label>
            <select onChange={onHandleChange} name="country" value={input.country}>
              <option>Select</option>
              <option>UAE</option>
              <option>Qatar</option>
              <option>India</option>
            </select>
            {errorFields.country && <p className='error-msg'>country is required</p>}
          
    
          <label className='course-label'>Courses</label>
          <div className='course-container'>
            {courses.map((item) => (
              <label key={item.id}> {item.value} <br />
                <input
                  type="checkbox"
                  value={item.id}
                  onChange={onHandleChecked}
                  checked={isCheckedItems.get(String(item.id)) || false}
                />
              </label>
            ))}
          </div>
          {errorFields.courses && <p className='error-msg'>courses are required</p>}
    
          <label htmlFor='date'>Date:
          <input type="date" onChange={onHandleChange} name="date" id='date' />
         </label>
         {errorFields.date && <p className='error-msg'>date is required</p>}
        </div>

        
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
    
  )
}

export default Form

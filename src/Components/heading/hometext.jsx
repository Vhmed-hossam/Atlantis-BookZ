import React from 'react'
import style from "./home.module.css"
export default function hometext({AB , text}) {
  return (
    <>
      <h1 className={`${style.font52}`}>{AB}</h1>
      <h5 className="text-white pt-3">{text}</h5>
    </>
  )
}

import React from 'react'
import style from './style.module.css'

export default function belowftr({text}) {
  return (
    <div>
    <div className={style.belowftr}>
      <h5 className={style.text}>{text}</h5>
    </div></div>
  )
}

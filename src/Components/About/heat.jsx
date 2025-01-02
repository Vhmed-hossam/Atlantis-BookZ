import React from 'react'
import Style from './style.module.css';

export default function Heat({About}) {
  return (
    <div>
      <h1 className={`${Style.wwhite} text-center`}>{About}</h1>
    </div>
  )
}
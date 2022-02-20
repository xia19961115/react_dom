import React from 'react'

export default function Hooks() {
    const [a,b] = React.useState({name:'zhangsan'})
    console.log(b);
    const add = (val) => {
        b((state) => {
            const b = {
                a: val
            }
            return {...state,...b}
        })
    }
    console.log(a);
  return (
    <div onClick={() => add('accc')}>{a.name}</div>
  )
}

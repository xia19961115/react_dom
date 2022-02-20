import React from 'react'

export default function Hooks() {
    const [a,b] = React.useState([0,1,2])
    console.log(b);
    const add = (val) => {
        // b((state) => {
            // const c = {
            //     a: val
            // }
        //     return {...state,...b}
        // })
        b([...a,3])
    }
    console.log(a);
  return (
    <div onClick={() => add('accc')}>{a[2]}</div>
  )
}

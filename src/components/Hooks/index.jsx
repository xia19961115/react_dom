import React from 'react'

export default function Hooks() {
    const [a,b] = React.useState(0)
    React.useEffect(()=>{
        console.log('@');
    },[])
    const refDom = React.useRef()
    console.log(b);
    const add = (val) => {
        // b((state) => {
            // const c = {
            //     a: val
            // }
        //     return {...state,...b}
        // })
        b(a+1)
    }
    console.log(a);
    function show () {
        console.log(refDom.current.innerText)
    }
  return (
    <div>
        <div ref={refDom}>123</div>
        <div onClick={() => add('accc')}>{a}</div>
        <button onClick={show}>点击</button>
    </div>
  )
}

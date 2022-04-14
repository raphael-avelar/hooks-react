import React, { useEffect, useRef, useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const getMergeValues = (string1, string2) => {
  let merge = ''
  let length = string1.length > string2.length ? string1.length : string2.length

  for (let i = 0; i < length; i++) {
    const e1 = string1[i] || ''
    const e2 = string2[i] || ''

    merge += e1 + e2
  }

  return merge
}

const UseRef = (props) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const count = useRef(0)
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)

  useEffect(() => {
    count.current++
    inputRef2.current.focus()
  }, [value1])

  useEffect(() => {
    count.current++
    inputRef1.current.focus()
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01" />

      <div className="center" style={{ fontSize: '20px', paddingTop: '10px' }}>
        <div>
          <span>Valor: </span>
          <span>{getMergeValues(value1, value2)} [ </span>
          <span className="red">{count.current}</span>
          <span> ]</span>
        </div>

        <input
          ref={inputRef1}
          value={value1}
          type="text"
          className="input"
          onChange={e => setValue1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />

      <div className="center" style={{ fontSize: '20px', paddingTop: '10px' }}>
        <input
          ref={inputRef2}
          value={value2}
          type="text"
          className="input"
          onChange={e => setValue2(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseRef

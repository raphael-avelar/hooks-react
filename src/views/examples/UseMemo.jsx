import React, { useMemo, useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const sum = (a, b) => {
  const future = Date.now() + 1000
  while (Date.now() < future) { } // Espera... 1s

  return a + b
}

const UseMemo = (props) => {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [n3, setN3] = useState(0)

  const result = useMemo(() => sum(n1, n2), [n1, n2])

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle='Retorna um valor "memoizado"!'
      />

      <SectionTitle title="Exercício #01" />

      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={e => setN1(parseInt(e.target.value))}
        />

        <input
          type="number"
          className="input"
          value={n2}
          onChange={e => setN2(parseInt(e.target.value))}
        />

        <span>SOMA Input 1 e Input 2:</span>
        <span className='text red'>{result}</span>

        <input
          type="number"
          className="input"
          value={n3}
          onChange={e => setN3(parseInt(e.target.value))}
        />

        <span>Input 3 não sofre impacto de "recalculo demorado" aplicado no Input 1 e 2</span>
      </div>
    </div>
  )
}

export default UseMemo

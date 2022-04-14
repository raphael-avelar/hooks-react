import React, { useEffect, useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const calcFatorial = num => {
  const n = parseInt(num)

  if (n < 0) return -1
  if (n === 0) return 1

  return calcFatorial(n - 1) * n
}

const calcEvenOrOdd = n => {
  return (n % 2 === 0) ? 'Par' : 'Ímpar'
}

const UseEffect = (props) => {
  const [numberFatorial, setNumberFatorial] = useState(1)
  const [fatorial, setFatorial] = useState(1)

  const [numberEvenOrOdd, setNumberEvenOrOdd] = useState(0)
  const [evenOrOdd, setEvenOrOdd] = useState('Par')

  useEffect(() => {
    setFatorial(calcFatorial(numberFatorial))
  }, [numberFatorial])

  useEffect(() => {
    setEvenOrOdd(calcEvenOrOdd(numberEvenOrOdd))
  }, [numberEvenOrOdd])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />

      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
        </div>

        <input
          type="number"
          className="input"
          maxLength={50}
          value={numberFatorial}
          onChange={e => setNumberFatorial(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />

      <div className="center" style={{ paddingTop: '10px'}}>
        <div>
          <span className="text">Status: </span>

          {evenOrOdd === 'Par' ? (
            <span className="text blue">{evenOrOdd}</span>
          ) : (
            <span className="text red">{evenOrOdd}</span>
          )}
        </div>

        <input
          type="number"
          className="input"
          maxLength={50}
          value={numberEvenOrOdd}
          onChange={e => setNumberEvenOrOdd(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseEffect

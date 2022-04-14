import React, { useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />

      <div className="center">
        <span className="text">{count}</span>

        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>- 1</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+ 1</button>
          <button className="btn" onClick={() => setCount(current => current + 50)}>+ 50</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />

      <div className="center">
        <input
          type="text"
          className="input"
          placeholder="Nome"
          maxLength={45}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <span style={{ fontSize: "18px" }}>{name}</span>
      </div>
    </div>
  )
}

export default UseState

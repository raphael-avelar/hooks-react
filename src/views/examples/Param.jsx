import React from 'react'
import { useParams } from 'react-router-dom'

import PageTitle from '../../components/layout/PageTitle'

const Param = props => {
  const params = useParams()

  return (
    <div className="param">
      <PageTitle
        title="Route com parâmetro"
        subtitle={"Exemplo Route utilizando parâmetro : " + params.id}
      />
    </div>
  )
}

export default Param
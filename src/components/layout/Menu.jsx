import './Menu.css'
import React from 'react'

import { Link, useLocation } from 'react-router-dom'

const itemsMenu = [
  { path: '/', label: 'Início' },
  { path: '/param/123', label: 'Route Parâmetro' },
  { path: '/useState', label: 'useState()' },
  { path: '/useEffect', label: 'useEffect()' },
  { path: '/useRef', label: 'useRef()' },
  { path: '/useMemo', label: 'useMemo()' },
  { path: '/useCallback', label: 'useCallback()' },
  { path: '/useContext', label: 'useContext()' },
  { path: '/useReducer', label: 'useReducer()' },
  { path: '/useCustom', label: 'useCustom()' }
]

const Menu = props => {
  const currentPathRoute = useLocation().pathname

  return (
    <aside className="menu">
      <nav>
        <ul>
          {itemsMenu.map(item => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={currentPathRoute === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>  
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
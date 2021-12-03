import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Painel Gerencial',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
   
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Gestão']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Usuarios',
    to: '/users',
    icon: 'cil-people',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Empresas',
    to: '/companies',
    icon: 'cil-home',
  },



  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Configurações']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Permissões de Grupo',
    to: '/permissions',
    icon: 'cil-lock-locked',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Grupo de Permissões',
    to: '/groups',
    icon: 'cil-layers',
  },
  
]

export default _nav

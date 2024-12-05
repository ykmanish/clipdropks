import React from 'react'
import RoleCard from './RoleCard'
import { roleData } from './roleData'
const Roles = () => {
  return (
    <>
      {
        roleData.map((role, index) => (
          <RoleCard key={index} id={role.id} status={role.status} role={role.role} link={role.link} description={role.description} />
        ))
      }
  </>
  )
}

export default Roles

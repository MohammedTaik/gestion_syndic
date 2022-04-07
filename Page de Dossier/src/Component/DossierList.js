import React from 'react'
import Dossier from './Dossier'
export default function DossierList({Folders,foundUsers}) {
  return (
    <>
      {
        foundUsers.map((folder) => <Dossier folder={folder} />)
     }
    </>
  )
}

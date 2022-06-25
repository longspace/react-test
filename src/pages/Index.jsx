import React, { useState } from 'react'
import BaseModal from '../components/modal/BaseModal'
import BaseTable from '../components/table/BaseTable'

function Index() {
  const [modalConfig, setModalConfig] = useState({ visible: false,width:500, title: '测试标题' })
  const [modalData, setModalData] = useState([])
  const modalHandle = (data) => {
    console.log("modalHandle", data);
    setModalConfig({...modalConfig,visible:false})
  }

  return (
    <div>
      <BaseTable></BaseTable>
      <BaseModal config={modalConfig} data={modalData} handle={modalHandle}>dddd</BaseModal>
    </div>
  )
}

export default Index
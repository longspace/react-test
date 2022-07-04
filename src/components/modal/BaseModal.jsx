import React, { useState } from 'react'
import { Modal } from "antd"

function BaseModal(props) {
  const {config,data,handle,children} = props;

  const handleOk = () => {
    handle({type:'ok',data:{}})
  };

  const handleCancel = () => {
    handle({type:'cancel',data:{}})
  };

  return (
    <Modal title={config.title} visible={config.visible} width={config.width} onOk={handleOk} onCancel={handleCancel} okText="确定" cancelText="取消" footer={config.footer || null} maskClosable={false}>
      <div>{children}</div>
    </Modal>
  )
}

export default BaseModal
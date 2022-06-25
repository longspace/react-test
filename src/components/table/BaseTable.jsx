import React from 'react'
import { Table, Tag } from "antd"

function BaseTable() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text,record) => {
        return text
      },
    },
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
  ]

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default BaseTable
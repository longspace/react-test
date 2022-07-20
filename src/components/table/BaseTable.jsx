import React from 'react'
import { Table } from "antd"

function BaseTable(props) {
	const { columns, data, pagination } = props

	return (
		<div>
			<Table size='small' columns={columns} dataSource={data} pagination={pagination} />
		</div>
	)
}

export default BaseTable
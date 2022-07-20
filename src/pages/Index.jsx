import React, { useState, useEffect } from 'react'
import { Button } from "antd"
import BaseModal from '../components/modal/BaseModal'
import BaseTable from '../components/table/BaseTable'
import BaseForm from '../components/form/BaseForm'

function Index() {
	const [modalConfig, setModalConfig] = useState({ visible: false, width: 550, title: '测试标题' })
	const [modalData, setModalData] = useState([])
	const modalHandle = (data) => {
		console.log("modalHandle", data);
		setModalConfig({ ...modalConfig, visible: false })
	}

	useEffect(() => {
		setModalData([])
	}, [])

	// 表格模块
	const tableColumns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text, record) => {
				return text
			},
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Manage',
			key: 'Manage',
			width: '80px',
			render: (text, record) => {
				return <><Button type='primary' ghost size='small' onClick={() => editData(record)}>编辑</Button></>
			},
		},
	]
	const editData = (row) => {
		setModalConfig({ ...modalConfig, visible: true, title: '编辑数据' })
	}

	const tableData = [
		{
			key: '1',
			name: 'John Brown 11',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'John Brown 22',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
	]

	return (
		<div>
			dev 分支上的修改<br /><br />
			<BaseTable columns={tableColumns} data={tableData} pagination={false}></BaseTable>
			<BaseModal config={modalConfig} data={modalData} handle={modalHandle}>
				<BaseForm></BaseForm>
			</BaseModal>
			{/* <BaseModal config={modalConfig} data={modalData} handle={modalHandle}>这里是父组件的内容</BaseModal> */}
		</div>
	)
}

export default Index
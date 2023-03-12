import { Table } from "@nextui-org/react"
import { useState } from "react"
import { useEffect } from "react"
import instance from "../app/axios"

const TableProduct = () => {
  const [ rows, setRows ] = useState([])
  useEffect(() => {
    instance.get('/getproduct')
    .then((res) => {
      setRows(res.data.data)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }, [rows])

  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "department",
      label: "DEPARTMENT",
    },
    {
      key: "amount",
      label: "AMOUNT",
    },
    {
      key: "expiration",
      label: "EXPIRATION",
    },
    {
      key: "price",
      label: "PRICE",
    },
  ]
  
  return (
    <div className="container-table">
			<h2 className="title">List of Products</h2>
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="single"
      >
        
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.department}</Table.Cell>
              <Table.Cell>{row.amount}</Table.Cell>
              <Table.Cell>{row.expiration}</Table.Cell>
              <Table.Cell>{row.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default TableProduct

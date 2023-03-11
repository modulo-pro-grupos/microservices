import { Table } from "@nextui-org/react"

const TableProduct = () => {
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
      key: "role",
      label: "AMOUNT",
    },
    {
      key: "status",
      label: "EXPIRATION",
    },
    {
      key: "price",
      label: "PRICE",
    },
  ]

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "3",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "4",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "5",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
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
        <Table.Body items={rows}>
          {(item) => (
            <Table.Row key={item.key}>
              {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

export default TableProduct

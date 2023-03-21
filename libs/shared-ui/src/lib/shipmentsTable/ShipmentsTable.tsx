import { Col, Row, Table, Tooltip } from '@nextui-org/react';
import { DeleteIcon } from "../shared/DeleteIcon"
import { Shipment } from '../types/shipment';
import { columns } from './columns';
import { IconButton } from "../shared/IconButton"
import { EyeIcon } from '../shared/EyeIcon';
import { EditIcon } from '../shared/EditIcon';

interface IShipmentTableProps {
  shipments: Shipment[]
}

export default function ShipmentTable({ shipments }: IShipmentTableProps) {

  const renderCell = (shipment: Shipment, columnKey: React.Key) => {
    const cellValue = columnKey !== 'id' ? shipment.attributes[columnKey] : shipment['id'];
    switch (columnKey) {
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", shipment?.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", shipment?.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", shipment?.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with dynamic content"
      css={{
        height: "auto",
        maxWidth: "70%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={shipments}>
        {(item) => (
          <Table.Row key={item.id}>
            {(columnKey) => <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}

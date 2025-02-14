import { Checkbox, Table } from "@mantine/core";

const quotes = [
  {
    id: 1,
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    id: 2,
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 3,
    content: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    id: 4,
    content:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 5,
    content: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    id: 6,
    content: "Happiness depends upon ourselves.",
    author: "Aristotle",
  },
  {
    id: 7,
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 8,
    content:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    id: 9,
    content: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    id: 10,
    content: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
];

export default function QuotesTable() {
  return (
    <Table.ScrollContainer minWidth={720}>
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Quote</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {quotes.map((quote) => (
            <Table.Tr key={quote.id}>
              <Table.Td>
                <Checkbox />
              </Table.Td>
              <Table.Td>{quote.content}</Table.Td>
              <Table.Td>{quote.author}</Table.Td>
              <Table.Td></Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}

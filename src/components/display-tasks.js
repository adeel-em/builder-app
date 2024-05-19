import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  background-color: #f2f2f2;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 8px;
`;

const TodoTable = () => {
  const tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ];

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>ID</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Completed</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.id}</TableCell>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.completed ? "Yes" : "No"}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TodoTable;

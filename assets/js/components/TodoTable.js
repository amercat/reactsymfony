import React, { useContext } from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {TodoContext} from "../contexts/TodoContext";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import {TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';



function EditButton() {
    return null;
}

function TodoTable(){
    const context = useContext(TodoContext);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Task</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                    <TextField fullWidth={true} label="Name" variant="outlined" />
                    </TableCell>
                    <TableCell  align="right">
                        <IconButton>
                            <AddIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
                {context.todos.map(todo=>(
                    <TableRow>
                        <TableCell>{todo.name}</TableCell>
                        <TableCell align="right">
                            <IconButton><EditIcon/></IconButton>
                            <IconButton><DeleteIcon/></IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TodoTable;
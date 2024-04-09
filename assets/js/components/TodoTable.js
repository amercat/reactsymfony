import React, { useContext,useState } from 'react';
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
    const [addTodoName, setAddTodoName] = useState('');
    const [addTodoDescription, setAddTodoDescription] = useState('');

    const onCreateSubmit = (event) => {
        event.preventDefault();
        context.createTodo({task: addTodoName, description: addTodoDescription});
        setAddTodoName('');
        setAddTodoDescription('');
    };

    return (
        <form onSubmit={onCreateSubmit}>
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
                    <TextField value={addTodoName}
                               onChange={(event) =>
                    setAddTodoName(event.target.value)}
                     fullWidth={true} label="New Task" variant="outlined" />
                    </TableCell>
                    <TableCell  align="right">
                        <IconButton type="submit">
                            <AddIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
                {context.todos.slice().reverse().map((todo, index)=>(
                    <TableRow key={'todo ' + index}>
                        <TableCell>{todo.name}</TableCell>
                        <TableCell align="right">
                            <IconButton><EditIcon /></IconButton>
                            <IconButton><DeleteIcon/></IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </form>
    );
}


export default TodoTable;
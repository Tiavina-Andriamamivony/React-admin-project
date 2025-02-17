import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>

            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <ReferenceField source="userId" reference="users" />
        </Datagrid>
    </List>
);
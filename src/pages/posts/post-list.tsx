import { Datagrid, List, ReferenceField, TextField , SimpleList} from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>

            <TextField source="id" />
            <TextField source="title" label="zavatra" />
            <TextField source="body" />
            <ReferenceField source="userId" reference="users" />
        </Datagrid>

        {/* <SimpleList primaryText ={(record)=>record.title}/> */}
    </List>
);
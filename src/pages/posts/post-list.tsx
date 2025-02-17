import { Datagrid, List, ReferenceField, TextField , FunctionField} from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>

            <TextField source="id" />
            <TextField source="title" label="post title" />
            <FunctionField label="Expert" render={(record)=> `${record.body.substring(0,50)}...`} />
            <ReferenceField source="userId" reference="users" />
        </Datagrid>

        {/* <SimpleList primaryText ={(record)=>record.title}/> */}
    </List>
);
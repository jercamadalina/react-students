import Student from './student'
import studentsListData from '../data/students-list'


function List() {
    return (
        <div>
            {/* 3. Pass whole object */}
            {
                studentsListData.map( (dateStudent) =>
                (
                    <Student data = {dateStudent} age='23'/>
                )
                )
            }
    </div>
)
}

export default List;
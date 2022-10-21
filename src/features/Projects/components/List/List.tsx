import { Project} from '@/models/project.dto'
import Item from '../Item'

type ListProps = {
    projects: Array<Project>
}

const List = ({ projects }: ListProps) => {
    return <div>
        {projects.map((project, index) => <Item key={index} project={project} />)}
    </div>
}

export default List
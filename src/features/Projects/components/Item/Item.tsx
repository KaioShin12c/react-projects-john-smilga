import { Project } from "@/models/project.dto"
import { Link} from 'react-router-dom'

type ItemProps = {
    project: Project
}

const Item = ({ project}: ItemProps) => {
    return <Link to={project.link}>{project.title}</Link>
}

export default Item
import List from './components/List'
import { projects } from './data'

const Projects = () => {
    return <div>
        <h1>Basic Projects</h1>
        <List projects={projects} />
    </div>
}
export default Projects
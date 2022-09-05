const Header = ({ course }) => {
    return <h2>{course.name}</h2>
}

const Total = ({ course }) => {
    return (
        <div>
            <p>
                Number of exercises{" "}
                {course.parts.reduce((s, p) => s + p.exercises, 0)}
            </p>
            <p><b>
                total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
            </b></p>
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    )
}

export default Course
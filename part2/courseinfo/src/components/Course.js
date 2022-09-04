const Header = ({ course }) => {
    return <h1>{course.name}</h1>
}

const Total = ({ course }) => {
    return (
        <p>
            Number of exercises{" "}
            {course.parts.reduce((s, p) => s + p.exercises, 0)}
        </p>
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
            {course.map(part => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content course={course.parts} />
            <Total course={course.parts} />
        </div>
    )
}

export default Course
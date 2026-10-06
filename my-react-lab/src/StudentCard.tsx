type StudentProps = {
    name: string;
    id: string;
    course: string
}

export function StudentCard({ name, id, course }: StudentProps) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{id}</p>
            <p>{course}</p>
        </div>
    );
}
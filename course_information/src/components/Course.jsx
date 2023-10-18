import Part from "./Part";
import Total from "./Total";

function Course({ course }) {
  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => {
          return (
            <Part part={part} key={part.id}/>
          );
        })}
      </ul>
      <Total parts={course.parts}/>
    </div>
  );
}

export default Course;

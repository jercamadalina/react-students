function Student(props) {
  return (
     <div className="card">
        <h1>{props.data.firstName} {props.data.lastName}</h1>
        <h3>Course: {props.data.course}</h3>
        <p>Email:{props.data.email}</p>
        <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;
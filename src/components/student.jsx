import PropTypes from "prop-types"

function Student(props) {
    return (
        <>
        <h1>Hello: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h3>Need a job: {props.isApplying ? "Yes" : "No"}</h3>
        </>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isApplying: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isApplying: false
}


export default Student
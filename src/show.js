import React from 'react';
import './App.css';


class Show extends React.Component {
<<<<<<< HEAD
=======

>>>>>>> 8dc4a89e82d1aff702e5774e7473eef28a5a9870
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
    }

    setTasks = (tasks) => {
        this.setState({ tasks: tasks });
    }


    async componentDidMount() {
        const url = "https://internship-challange.herokuapp.com/getTask";
        const responce = await fetch(url);
        const data = await responce.json();
        const status = responce.status;
        if (status === 200) {
            // this.setState({tasks: data.result, loading: false});
            this.setTasks(data.result);

            // this.all = data.result;
            console.log(data.result);
        }
    };

    render() {
        return (
            <ul>
                {this.state.tasks.map((task) =>
                    <li key={task._id}><p>Task Name : {task.title}</p>
                        <div>
                            <p>Task Description : {task.description}</p>
                        </div>
                        <div>
                            <p>Minutes : {task.minutes}</p>
                        </div>
                    </li>

                )}
            </ul>
        )
    }
}
export default Show;

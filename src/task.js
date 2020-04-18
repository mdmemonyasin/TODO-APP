import React from 'react';
import Show from './show';

class Task extends  React.Component{
    newTask = (e) =>{
        e.preventDefault();
        console.log(this.refs.minutes.value);
        this.add({
            title: this.refs.title.value,
            description: this.refs.description.value,
            minutes: this.refs.minutes.value
        });
        this.refs.title.nodeValue = null;
        this.refs.description.nodeValue = null;
        this.refs.minutes.nodeValue = null;          
    }    
    async add(data){
        const headers = new Headers();
        console.log("here");
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        };

        const request = new Request('https://internship-challange.herokuapp.com/postTask',options); 
        const responce = await  fetch(request);
        const status = await responce.status;
        if(status===201){
            console.log("Success");
            window.location.reload(false);
        }
    }
    
    
    render(){
        return(
            <div className="pure-g">
                <div className="pure-u-12-24">
                    <form className="pure-form" onSubmit={this.newTask}>
                        <fieldset>
                            <legend>New Task</legend>
                            <input ref='title' type="text" placeholder="Title"></input>
                            <input ref='description' type="text" placeholder="Description"></input>
                            <input ref='minutes' type="number" placeholder="Minutes"></input>
                            <button type="submit" className="pure-button pure=button-primary">Create</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        
        )
            


    }
}
export default Task;
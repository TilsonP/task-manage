export class TaskAction {

    URL = 'https://localhost:7092/MyTasks'
    User = 'Admin'
    Password = 'Pass'
    Authorization = 'Basic ' + window.btoa(`${this.User}:${this.Password}`)

    async findAll(){
        return fetch(this.URL, {
            method: 'GET',
            headers: {
                Authorization: this.Authorization,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
    }

    async findByDate(date){
        return fetch(`${this.URL}/?date=${date}`, {
            method: 'GET',
            headers: {
                Authorization: this.Authorization,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
    }

    async register(task){

        let res = await fetch(this.URL, {
            method: 'POST',
            headers: {
                Authorization: this.Authorization,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task)
        })

        return res.status
    }

    async delete(title){

        let res = await fetch(`${this.URL}?name=${title}`, {
            method: 'DELETE',
            headers: {
                Authorization: this.Authorization,
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })

        return res.status
    }

}
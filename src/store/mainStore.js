import {makeAutoObservable} from 'mobx'

class mainStore{
    username = "";
    score = "";
    socket = {};
    constructor() {
        makeAutoObservable(this)
    }

    updateScore(player)
    {
        this.score = player._score;
    }

    connected(newSocket)
    {
        this.socket = newSocket;
    }
}

export default new mainStore();
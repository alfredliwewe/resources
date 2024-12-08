var globalState = (function(){
    var store = {};

    function set(name,value){
        store[name] = value
    }

    function get(name){
        return store[name];
    }

    function useKeep(initial) {
        let index = Math.floor(Math.floor()*30000)+"ss";
        store[index] = initial;
        let setMethod = (value) => {
            store[index] = value;
        }

        return [store[index], setMethod];
    }

    return {
        set,
        get,
        useKeep
    }
})();
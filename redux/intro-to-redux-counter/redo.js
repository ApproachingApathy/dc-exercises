function reducer(state = {}, action) {
    let newState = {...state}
    if (typeof newState.number === 'undefined') newState.number = 0;
    switch (action.type) {
        case 'INCREMENT':
            console.log('+')
            return Object.assign(newState, {number: newState.number + 1})
        case 'DECREMENT':
            return Object.assign(newState, {number: newState.number - 1})
        default:
            return newState
    }
}

const store = Redux.createStore(reducer)

store.subscribe( () => {
    document
    .getElementById('value')
    .textContent = store.getState().number
})

document
.getElementById('increment')
.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

document
.getElementById('decrement')
.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
})

document
.getElementById('incrementIfOdd')
.addEventListener('click', () => {
    if (store.getState().number % 2 != 0) {
        store.dispatch({type: 'INCREMENT'})
    }
})

document
.getElementById('incrementAsync')
.addEventListener('click', () => {
    setTimeout(() => store.dispatch({type: 'INCREMENT'}), 1000)
})


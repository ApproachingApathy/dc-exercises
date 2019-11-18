	  // Create the state, which is a single number
	  function reducer(state = {}, action) {
		// Set a default value (using ES5, if "undefined")
		// Create switch case for action type that returns the new state
		// 'INCREMENT' adds one to current value
		// 'DECREMENT' subtracts one from current value
		// Default returns current state
		let newState = {...state}
		if (typeof state.number === 'undefined') state.number = 0;
		switch (action.type) {
			case 'INCREMENT':
				return Object.assign(newState, {number: state.number+1})
			case 'DECREMENT':
				return state.assign(newState, {number: state.number-1})
			default:
				return state
		}
	  }

	  // Create the store using Redux.createStore()
	  const store = Redux.createStore(reducer)
	//   console.log(store.getState())

	  // Create a render function to display state on the page
	  // Render on page load
	  // Render every time store changes
	  store.subscribe(()=> {
		  document
		  .getElementById('value')
		  .textContent = store.getState().number
	  })

	  document
		.getElementById("increment")
		.addEventListener("click", function() {
		  // Dispatch the "INCREMENT" action type
		  store.dispatch({type:'INCREMENT'})
		});

	  document
		.getElementById("decrement")
		.addEventListener("click", function() {
		  // Dispatch the "DECREMENT" action type
		  store.dispatch({type:'DECREMENT'})
		});

	  document
		.getElementById("incrementIfOdd")
		.addEventListener("click", function() {
		  // Dispatch the "INCREMENT" action type, only if the current state is
		  // an odd number (use "store.getState()" to get the current value)
		  if (store.getState().number % 2 != 0) {
			store.dispatch({ type: "INCREMENT" });
		  }
		});

	  document
		.getElementById("incrementAsync")
		.addEventListener("click", function() {
		  // Dispatch the "INCREMENT" action type from inside a "setTimeout"
		  setTimeout(() => {
			  store.dispatch({type: 'INCREMENT'})
		  }, 1000)
		});
// Library code
function createStore(reducer) {
	
	let state
	let listeners = []
	
	const getState = () => state
	
	const subscribe = (listener) => {
		listeners.push(listener)
		return () => {
			listeners = listeners.filter((l) => l !== listener)
		}
	}
	
	const dispatch = (action) => {
		state = todos(state, action)
		listeners.forEach((listener) => listener())
	}
	return {
		getState,
		subscribe,
		dispatch,
	}
}

// App code
function todos (state=[], action) {
	switch(action.type){
		case 'ADD_TODO' :
			return state.concat([action.code])
		case 'REMOVE_TODO':
			return state.filter((todo) => (todo.id !== action.todo.id))
		case 'TOGGLE_TODO':
			return state.map((todo) => todo.id !== action.todo.id ? todo : 
				Object.assign({}, todo, {complete: !todo.complete}))
		default: 
			return state
}

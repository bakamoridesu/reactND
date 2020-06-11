const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'


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
		state = reducer(state, action)
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
		case ADD_TODO :
			return state.concat([action.todo])
		case REMOVE_TODO:
			return state.filter((todo) => (todo.id !== action.id))
		case TOGGLE_TODO:
			console.log(state);
			console.log(action);
			return state.map((todo) => todo.id !== action.id ? todo : 
				Object.assign({}, todo, {complete: !todo.complete}))
		default: 
			return state
	}
}

function goals (state=[], action){
	switch(action.type){
		case ADD_GOAL:
			return state.concat([action.goal])
		case REMOVE_GOAL:
			return state.filter((goal) => goal.id !== action.id)
		default:
			return state
	}
}

function app(state={}, action){
	return {
		todos: todos(state.todos, action),
		goals: goals(state.goals, action),
	}
}

function addTodoAction(todo){
	return {
		type: ADD_TODO,
		todo,
	}
}

function addGoalAction(goal){
	return {
		type: ADD_TODO,
		goal,
	}
}

function toggleTodoAction(id){
	return {
		type: TOGGLE_TODO,
		id,
	}
}

function removeTodoAction(id){
	return {
		type: REMOVE_TODO,
		id,
	}
}

function removeGoalAction(id){
	return {
		type: REMOVE_GOAL,
		id,
	}
}

const store = createStore(app)

unsubscribe_stateUpdated = store.subscribe(() => {console.log('state updated')})

store.dispatch({type: ADD_TODO,
todo: {
	id: 0,
	name: 'Learn Redux',
	complete: false
}
})
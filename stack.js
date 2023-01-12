// stack implemented without using built in JS methods(pop,push,length etc.)

class Stack {
	constructor(){
		this.items = []
		this.count = 0
	}
	// adds element to the top of the stack
	push(element){
		this.items[this.count] = element
		this.count++
		return this.count - 1
	}
	// removes and returns top element from the stack
	pop(){
		if (this.count === 0) return undefined
		let deleteItem = this.items[this.count - 1]
		this.count--
		return deleteItem
	}
	// check top element on stack
	peek(){
		return this.items[this.count - 1]
	}
	// check if stack is empty
	isEmpty(){
		return this.count == 0
	}
	size(){
		return this.count
	}
	print(){
		let str = ''
		for(let i = 0; i < this.count; i++){
			str += this.items + ' '
		}
		return str
	}
	clear(){
		this.items = []
		this.count = 0
		return this.items
	}
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
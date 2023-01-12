class Node {
	// each node contains some data and a pointer to the next node
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class LinkedList {
	// linked list object stores head and size of list
	constructor(){
		this.head = null
		this.size = 0
	}

	// insert first node
	insertFirst(data){
		this.head = new Node(data, this.head) // point new head to previous head
		this.size++
	}

	// insert last node
	insertLast(data){
		let node = new Node(data)
		let current

		// if empty make head
		if(!this.head){
			this.head = node
		} else {
			current = this.head

			while(current.next) { // iterates entire linked list
				current = current.next
			}

			current.next = node // points last node to new node
		}

		this.size++
	}

	// insert at index
	insertIndex(data, index){
		// does index exist?
		if (index > this.size || index < 0){
			return
		}

		// if first index
		if(index === 0){
			this.insertFirst(data) // reusing already built method
			return
		}

		const node = new Node(data)
		let current = this.head
		for (let i = 0; i < index - 1; i++){ // find node before index
			current = current.next
		}
		node.next = current.next // point the new node to current node at index
		current.next = node // point node before index at new node

		this.size++
	}

	// get at index
	getAt(index){
		// does index exist?
		if (index > this.size || index < 0){
			return
		}

		let current = this.head
		for (let i = 0; i < index; i++){ // find node at index
			current = current.next
		}
		console.log(current.data)
	}

	// remove at index
	removeAt(index){
		// does index exist?
		if (index > this.size || index < 0){
			return
		}
		if(index === 0){
			this.head = this.head.next
			return
		}

		let current = this.head
		let previous
		for (let i = 0; i < index; i++){ // find node at index
			previous = current
			current = current.next
		}
		// remove node by setting previous pointer to the next node
		previous.next = current.next
		this.size--
	}

	// clear list
	clearList() {
		this.head = null
		this.size = 0
	}

	// print list data
	printListData(){
		let current = this.head

		while(current) {
			console.log(current.data)
			current = current.next
		}
	}
}

const ll = new LinkedList()

ll.insertFirst(300)
ll.insertFirst(200)
ll.insertFirst(100)
ll.insertLast(400)

ll.printListData()
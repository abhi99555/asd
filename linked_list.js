// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `Person(name=${this.name}, age=${this.age})`;
    }
}

// Define the Node class
class Node {
    constructor(data) {
        this.data = data; // This will be an instance of Person
        this.next = null; // Pointer to the next node in the list
    }
}

// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = newNode;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data.toString());
            current = current.next;
        }
    }
}

// Create some Person objects
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
const person3 = new Person("Charlie", 35);

// Create a LinkedList instance
const linkedList = new LinkedList();

// Append the Person objects to the linked list
linkedList.append(person1);
linkedList.append(person2);
linkedList.append(person3);

// Display the linked list
linkedList.display();

import Node from "./node";

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(val) {
        const tempNode = new Node(val);
        if (this.head == null) {
            this.head = tempNode;
            this.tail = tempNode;
        } else {
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
    }
    prepend(val) {
        const tempNode = new Node(val, this.head);//point to head as next
        if (this.tail == null) {//if tail is null then that means linked list is empty
            this.head = tempNode;
            this.tail = tempNode;
        }
    }
    size() {
        let currNode = new Node();
        currNode = this.head;
        let sizeN = 0;
        while (currNode.next != null) {
            sizeN++;
            currNode = currNode.next;
        }
        sizeN++;
        return sizeN;
    }
    head() {
        return this.head;
    }
    tail() {
        return this.tail;
    }
    at(index) {
        let currNode = new Node();
        currNode = this.head;
        let sizeN = 0;
        while (currNode != null) {
            sizeN++;
            if (sizeN == index) {
                return currNode;
            }
            currNode = currNode.next;
        }
    }
    pop() {
        let currNode = new Node();
        currNode = this.head;
        if (this.head.next == null) {
            this.head == null;
            this.tail == null;
        } else {
            while (currNode.next.next != null) {
                currNode = currNode.next;
            }
            currNode.next = null;
            this.tail = currNode;
        }
    }
}
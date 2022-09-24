class Node{

    constructor(val,next){
        this.val = val
        this.next = (next===undefined ? null : next)
    }
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

var middleNode = function(head) {
    node = head.next
    if(head.next==null){
        return head
    }
    
    let count = 1
    while(node.next!=null){
        count+=1
        node = node.next
    }
    for(i=0;i<count/2;i++){
        head=head.next
    }

    return head
};

console.log(middleNode(head))
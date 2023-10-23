class node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedlist{
    
    constructor() {
        this.head = null;
    }


    dellast() {

        let last = this.head;
        if (last == null)
        {
            last = null;
        }
        else if (last.next == null)
        
        {                
            last = null;
        }
        
        else {
            while (last.next.next !== null)
            {
                last = last.next;


            }
        last.next = null;
        }
        return this.head;
   }
    
    addlast(data)
    {
        let lastnode = new node(data);
        
        if (this.head == null) {
            this.head = lastnode;
}

        else if (this.head.next == null) {
            this.head.next = lastnode;
        }
        
        else {
            let newnode = this.head;
            while (newnode.next !== null)
            {
                newnode = newnode.next;

                }
                newnode.next = lastnode;
           
            
        }


    }
    addfirst(data) {
        let firstnode = new node(data);
        if (this.head == null) {
            this.head = firstnode;
        
        }

        else {
            firstnode.next = this.head;
            this.head = firstnode;
            
}
    }   
 
    delfirst() {
        if (this.head == null) {
            this.head = null;
        }
        else {
            this.head = this.head.next;
        }
        
    }


    toarray() {
        let nodes = [];

        let arrlist = this.head;

        if (arrlist == null)
        {
            return nodes;

            }
        else {
            while (arrlist.next !== null) {
                nodes.push(arrlist.data);
                
                arrlist = arrlist.next;

            }
            nodes.push(arrlist.data);
        }

        return nodes;
}

    rmvdupe() {
        
        let thead = this.head;
        while (thead !== null && thead.next !== null)
        {
            if (thead.data == thead.next.data)
            {
                thead.next = thead.next.next;
                }
            else {
                thead = thead.next;

            }
            
        }
        return this.head;
    }
    middle() {
        let lnode = this.head;
        let length = 0;
        if (lnode !== null)
        {

            while (lnode.next !== null)
            {
                length++

                lnode = lnode.next;
            }
            length++;
        }
        else {
            length = 0;
        }




        let midnode = this.head;
        for (let i = 1; i <= Math.floor(length / 2); i++)
        {
            midnode = midnode.next;
        
        }
        this.head=midnode
        return this.head;

}    
    

}


let list = new linkedlist;
list.addlast(1);
list.addlast(2);
list.addlast(3);
list.addlast(4);
list.addlast(5);
list.addlast();

list.middle();

console.log(list.toarray());



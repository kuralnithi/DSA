//LINKED LIST DAY-4 https://us06web.zoom.us/rec/play/44avk7pATXT-XF9oyVDIeLJEnIMpFWgk06NPwg-O6QnvZ7yFh-Wuz4VBwj5zTXZ1HFLxVHfOg90TLdvJ._s-PAJg-_6ET6GnA?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2FdipuEOmRJPMNfUk8JA6dG3AP9jwoI170NOd47TAQ0Vm-Rv3ntFzAhtdhYY732xV1.WkMjY-ggvNlF07D4




class node{
    
    constructor(data) {
        
        this.data = data;
        this.next = null;

    }

}

class linkedlist {

    constructor() {
        this.head = null;
}

    dellast() {
        if (this.head == null)
        {
            this.head = null;
        }
        else if (this.head.next == null)
        
        {                
            this.head = null;
        }
        
        else {
            while (this.head.next.next !== null)
            {
                this.head = this.head.next;


            }
            this.head.next = null;
        }

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
        let arrnodes = this.head;
        
        if (arrnodes == null)
        {
            return [];
            }
        else {
            while (arrnodes.next !== null)
            {
                nodes.push(arrnodes.data)
                
                arrnodes = arrnodes.next;

            }
                nodes.push(arrnodes.data)

            
}        
        return nodes;
}

    
    Llength() {
        



        let nodes = [];
        
        let lennodes = this.head;

        if (lennodes == null)
        {
            return 0;
            }
        else {
            while (lennodes.next !== null)
            {
                nodes.push(lennodes.data)
                
                lennodes = lennodes.next;

            }
                nodes.push(lennodes.data)

            
}        
        return nodes.length;
        
    }

}

let list = new linkedlist;

list.addlast(1);
list.addlast(2);
list.addlast(3);
list.addlast(4);
list.addlast(5);
list.dellast();
list.dellast();
list.dellast();
list.dellast();
list.dellast();
list.dellast();


list.addfirst(1);
list.addfirst(2);
list.addfirst(3);


console.log(list.toarray());


console.log(list.Llength());
console.log(list.Llength());





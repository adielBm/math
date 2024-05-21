

```c
struct addressOperand {
	unsigned are:2; /* ARE field */
	unsigned address:12;
};


struct output {
	/* ... */
}

union word {
	struct addressOperand addressOp;
	struct cmdHeader cmd;
	short wordData
};

union word progranMemory[3996];
short programMemory[3996];

int f() {
   struct cmdHeader word;
   word.opcode = 12;
   short s;
   s = (s & 0xf0ff) | 0x0c00;
}
```

	
# data strurctures used in the assembler 

label table - label - number
- define
- data
- code 

dynamic array
	sort b/n the passes 
		insert find sort freeAll

machine imgae table
	constatnt array size

macro table 
	hash table (20 celles is enough) 
		freeAll, 	insert, get 

define table
	can be hash table or dynamic array 


___
### output 

- binary file `ps.ob`
- extern file (lable -> address) `ps.ext`
- entry file (lable -> address) `ps.evt`



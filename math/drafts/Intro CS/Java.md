- compliations 
	- Constructor call must be the first statement in a constructor

downcasting runtime err 
```java
Child a = (Child) (new Parent()); // Parent constactor & run time error
Parent a = (Child) (new Parent()); // Parent constactor & run time error
```

downcasting compliation err 

```java
Child a = new Parent(); // compile-time error: cannot convert from Parent to Child
```

```java
Parent a = new Child(); 
Child b = a; // Compile-time error: cannot convert from Parent to Child
```

```java
Parent a = new Child(); 
a.onlyChild(); // Compile-time error: The method onlyChild() is undefined for the type Parent
```

```java
Child a = new Child();
a.onlyChildProp = 1;
Parent b = (Parent) a;
b.onlyChildProp = 2; // Compile-time error: onlyChildProp cannot be resolved or is not a field
```


```java
public class Parent {
    public int A() {
        return 1;
    }
}

public class Child extends Parent {
    public int A(int num) {
        return num*2;
    }

    public static void main(String[] args) {
        Parent a = new Child();
        a.A(); // it's okay 
        a.A(2); // Compile-time error: The method A() in the type Parent is not applicable for the arguments (int)
    }
}

```

```java
public class Parent {
    public int A(Parent a) {
        return 1;
    }
}
public class Child extends Parent {
    public int A(Child a) {
        return 2;
    }
    public static void main(String[] args) {
        Parent a = new Child();
        Child ch = new Child();
        System.out.println(a.A(a)); // 1
        System.out.println(a.A(ch)); // 1  
    }
}
```


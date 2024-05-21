





```java
int low = 0, high = a.length - 1;

// time O(log n)
while (low < high) {
	int mid = (high - low) / 2;
	
	if (/* ... */)
		high = mid;
	else
		low = mid;
}
```

```java
int low = 0, high = a.length - 1;

// time O(n)
while (low < high) {
	if (/* ... */)
		high--;
	else
		low++;
}
```



	


- Let $f$ be a [[Derivative#Higher-order derivatives|n-times differentiable]] function, the polynomial $$\displaystyle P_{n}(x)=\sum _{k=0}^{n}{\frac {f^{(k)}(a)}{k!}}(x-a)^{k}$$ is called the $n$th order **Taylor polynomial** (פולינום טיילור) of $f$ centered at $a$.
	- The function $R_{n}(x)=f(x)-P_{n}(x)$ is called the $n$-th [[#Remainder Term|remainder]] of $f$ at $a$
	- The representation $f(x)=P_{n}(x)+R_{n}(x)$ of $f$ is called $n$th order **Taylor’s formula with remainder** (פיתוח טיילור) of $f$ centered at $a$ 



- When $a=0$, the polynomial $$P_{n}(x)=\sum _{n=0}^{n}{\frac {f^{(k)}(0)}{k!}}x^{k}$$ is called also the **Maclaurin polynomial** of $f$

- Properties
	- $P_{n}^{(m)}(a)=f^{(m)}(a)$ (for all $m=0,\dots,n$)
	- (q4.11) Let $f(x)=x^k$ for $k\in\mathbb{N}$, and $P_{n}(x)$ Maclaurin polynomial of $f$, and $R_{n}(x)$ the reminder, then
		- for all $k>n$, $f(x)=R_{n}(x)$
		- for all $k\leq n$, $f(x)=P_{n}(x)$



# Remainder Term

- (4.7) If $f$ is a $n$ times differentiable (at $a$) function where $R_{n}(x)$ is its n-th remainder at $a$, then $\displaystyle\lim_{ x \to a }\frac{R_{n}(x)}{(x-a)^n}=0$
- (4.8) (**Uniqueness of Taylor Polynomial**)  If $f$ is a $n$ times differentiable (at $a$) function and $P_{n}$ is a polynomial and $\displaystyle\lim_{ x \to a }\frac{f(x)-P_{n}(x)}{(x-a)}=\lim_{ x \to a }\frac{R_{n}(x)}{(x-a)}=0$ then $P_{n}$ is the $n$th order **Taylor polynomial** of $f$ centered at $a$

#### Lagrange’s Form

- (4.4) if $f$ is a $n+1$ times differentiable function on $I$ where $a\in I$ and $R_{n}(x)$ is the n-th remainder of $f$ at $a$. then:
	- (**Lagrange’s Form**) there exists a number $c$ between $a$ and $x$ s.t: $$\displaystyle R_{n}(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$


- (page-70) if $f$ is continuous on $[a,b]$ (or $[b,a]$), and $n+1$ times differentiable in $(a,b)$ (or $(b,a)$), and and $n$ times differentiable in $a$ such that $f^{(n)}(x)$ is continuous at $a$, then there exists $c$ between $a$ and $b$ for which $\displaystyle R_{n}(b)=\frac{f^{(n+1)}(c)}{(n+1)!}(b-a)^{n+1}$ that is $\displaystyle f(b)=\sum^{n}_{k=0}\frac{f^{(n)}(a)}{k!}(b-a)^k+\frac{f^{(n+1)}(c)}{(n+1)!}(b-a)^{n+1}$
	- for $n=0$ it is [[Derivative#Differentiability on Interval|Lagrange's MVT]]




# Examples 

- $\displaystyle(1+x)^a=\sum^n_{k=0}\binom{a}{k}x^k+R_{n}(x)$
## Maclaurin polynomial ($a=0$)

- (e4.3) Maclaurin polynomial ($2n+1$ order) of $\sin x$
	- $\displaystyle\sin x=\sum^{n}_{k=0}(-1)^k\cdot \frac{x^{2k+1}}{(2k+1)!}+R_{2n+2}(x)$ (remark: $R_{2n+2}=R_{2n+1}$, therefore $2n+2$ order as well)
		- $\displaystyle\left|{R_{2n+2}(x)}\right|\leq \frac{\left|{x}\right|^{2n+3}}{(2n+3)!}$
- Maclaurin polynomial ($n$ order) of $e^x$ 
	- $\displaystyle e^x=\sum^n_{k=0}\frac{x^k}{k!}+R_{n}(x)$ 
	- (by 4.4) $R_{n}(x)=\displaystyle e^c\frac{x^{n+1}}{(n+1)!}$ (where $c$ is b/n $x$ and $a=0$). 
		- $\forall x\displaystyle\lim_{ n \to \infty }R_{n}(x)=0$ (see e4.2, q4.25), and therefore
		- $\forall x,e^x=\displaystyle\lim_{ n \to \infty }P_{n}(x)$


> Given a number $x$, we want to evaluate $f(x)$ using $P_{n}(x)$ such that the error is less then some nubmer, what $n$ we need for that?





# draft 

- definition lecture-4 - if $\lim_{x\to x_0}{\frac{f(x)}{{(x-x_0)}^n}}=0$ we denote $f(x)=o((x-x_0)^n)$


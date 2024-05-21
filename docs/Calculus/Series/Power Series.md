Power Series (6.2)

- A **power series** (centered at $c$) is a series of the form $\displaystyle\sum_{n=0}^{\infty}a_n(x-c)^n$ where $(a_n)$ is a sequence of real numbers and $c$ is a real number.
	- The number $c$ is called the **center** of the power series.
	- The constants $a_0,a_1,a_2,\ldots$ are called the **coefficients** of the power series.
	- A power series is actually a [[series of functions#Series of Functions|series of functions]], where $f_n(x)=a_n(x-c)^n$.
	- A power series is a function of $x$, and it is defined for all $x$ in the interval of convergence.
	- In this discussion, we will talk about power series centered at $0$, of the form $\displaystyle\sum_{n=0}^{\infty}a_nx^n$. But the results can be generalized to power series centered at any real number $c$, by substituting $y=x-c$.

## Convergence of Power Series

- Given a power series $\sum_{n=0}^{\infty}a_n(x-a)^n$. Then there are only three possibilities:
	- (i) The series converges only when $x=a$.
	- (ii) The series converges for all $x$.
	- (iii) There exists a positive number $R$ such that the series converges if $|x-a|<R$ and diverges if $|x-a|>R$. 
		- The number $R$ is called the **radius of convergence** of the power series.
		- Interval of convergence #todo

## Radius of Convergence

Given a power series $\displaystyle\sum_{n=0}^{\infty}a_nx^n$

- (6.10) Let's denote $C=\displaystyle\limsup_{n\to\infty}\sqrt[n]{|a_n|}$.
	- $R=\begin{cases}0&\text{if }C=\infty\\\infty&\text{if }C=0\\\frac{1}{C}&\text{if }0<C<\infty\end{cases}$ is called the **radius of convergence** of the power series.
	- (a.) The series converges absolutely for all real number $x$ in $(-R,R)$.
	- (b.) The series converges uniformly on every closed interval $[-r,r]$ where $0<r<R$.
- (6.11) $R=\displaystyle\lim_{n\to\infty}\left|\frac{a_{n}}{a_{n+1}}\right|$ is the radius of convergence. (given the limit exists, finite or infinite)
- (6.12) Let $R>0$ (or $R=\infty$) be the radius of convergence. And let $f(x)=\sum_{n=0}^{\infty}a_nx^n$ be the function defined on $(-R,R)$. Then:
	- (a.) The function $f$ is continuous on $(-R,R)$. (if the series converges at $R$ or $-R$, then $f$ is continuous at $R$ or $-R$, respectively.)
	- (b.) for all $0<r<R$, the function $f$ is integrable on $[-r,r]$. And for all $x\in(-R,R)$, we have $\int_{0}^{x}f(t)dt=\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}$.
	- (c.) The function $f$ is continuously differentiable on $(-R,R)$, and for all $x\in(-R,R)$, we have $f'(x)=\sum_{n=0}^{\infty}a_n(n+1)x^n=\sum_{n=1}^{\infty}na_nx^{n-1}$.
	- The power series in (b.) and (c.) have the same radius of convergence $R$ as the original power series.
- (6.13, Abel's Theorem) Let $0<R\in\mathbb{R}$ be the radius of convergence, and let $f(x)=\sum_{n=0}^{\infty}a_nx^n$ be the function defined on $(-R,R)$. If the series converges at $x=R$ (or $x=-R$), then the function $f$ is continuous at $x=R$ from the left, i.e. $\displaystyle\lim_{x\to R^{-}}f(x)=f(R)$ (or $\displaystyle\lim_{x\to -R^{+}}f(x)=f(-R)$, respectively).
- (6.14a) $\forall x \in(-r,r),\,\displaystyle f(x)=\sum_{n=0}^{\infty}a_n(x)^n\implies f$ is [[Derivative#Continuously Differentiability|infinitely differentiable]] on $(-r,r)$
- (6.14b) $\forall x \in(-r,r),\,\displaystyle f(x)=\sum_{n=0}^{\infty}a_n(x-c)^n\implies\forall n\geq 0,a_n=\frac{f^{(n)}(c)}{n!}$
	- $\forall x \in(-r,r),\,\displaystyle f(x)=\sum_{n=0}^{\infty}a_nx^n\implies\forall n\geq 0,a_n=\frac{f^{(n)}(0)}{n!}$


#### Some Theorems 

#not-in-course #todo 

- If the power series $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ converges in $x_0$, then:
	- the series converges absolutely for all $x$ such that $|x|<|x_0|$.
	- The series converges uniformly on every closed interval $[-r,r]$ where $0<r<|x_0|$.
	- (Cauchy-Hadamard) $R=\displaystyle\frac{1}{\displaystyle\lim_{n\to\infty}\sqrt[n]{|a_n|}}$ is the radius of convergence. given the limit exists.
	- (Cauchy-Hadamard, Stonger Version) $R=\displaystyle\frac{1}{\displaystyle\limsup_{n\to\infty}\sqrt[n]{|a_n|}}$ is the radius of convergence. (the limit always exists)
	- If the limit is $\infty$, then $R=0$, and if the limit is $0$, then $R=\infty$.
	- The series converges in $R$ (or $-R$) if and only if the series converges uniformly on $[0,R]$ (or $[-R,0]$, respectively).
- Given a power series $f(x)=\sum_{n=0}^{\infty}a_nx^n$ on $[-R,R]$ that converges to $f$ on $[-R,R]$. Then:
	- For all $x\in(-R,R)$, we have $f'(x)=\sum_{n=1}^{\infty}a_nn(x)^{n-1}$. And radius of convergence of $f'$ is $R$ as well. (it's possible that the series of $f$ converges in $\pm R$, but the series of $f'$ converges does not.)
	- For all $x\in(-R,R)$, we have $\int_{0}^{x}f(t)dt=\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}$. And radius of convergence of $\int_{0}^{x}f(t)dt$ is $R$ as well. (it's possible that the series of $f$ converges in $\pm R$, but the series of $\int_{0}^{x}f(t)dt$ converges does not.)

## Representing Functions by Power Series

- (6.15) Given $f(x)$ is infinitely differentiable on $(-r,r)$, then the following are equivalent:
	- The function $f$ can be represented by a power series on $(-r,r)$
	- There exists a sequence $(a_n)$ such that for all $x\in(-r,r)$, we have $\displaystyle f(x)=\sum_{n=0}^{\infty}a_nx^n$ 
	- For all $x\in(-r,r)$, the Taylor series of $f$ at $0$ converges to $f$ at $x$.
	- For all $x\in(-r,r)$, we have $\displaystyle \lim_{n\to\infty}S_n(x)=f(x)$ (where $S_n(x)=\sum_{k=0}^{n}a_kx^k$ is the $n$-th partial sum of the power series of $f$ at $x$).
	- For all $x\in(-r,r)$, we have $\displaystyle f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n$
	- For all $x\in(-r,r)$, we have $\displaystyle\lim_{n\to\infty}R_n(x)=0$ (where $R_n(x)=\frac{f^{(n+1)}(x)}{(n+1)!}$ is the remainder of the $n$-th Taylor polynomial of $f$ at $x$.)
	- ניתנת לפיתוח לטור חזקות


- If the function $f$ can be represented by a power series on $(-r,r)$, then: 
	- $f$ is infinitely differentiable on $(-r,r)$.
	- The power series is unique, and the coefficients given by $a_n=\frac{f^{(n)}(0)}{n!}$.

- #not-in-course Let $I\subset\mathbb{R}$ be an open interval. A function $f:I\to\mathbb{R}$ is **(real) analytic** if for all $a\in I$, there exists some $r>0$ and a sequence of coefficients $(a_n)$ such that $(a-r,a+r)\subset I$ and $f(x)=\sum_{n=0}^{\infty}a_n(x-a)^n$. ( #todo this is stronger than being infinitely differentiable, and weaker than being represented by one power series on the whole interval. i.e. represented by a power series $\implies$ analytic $\implies$ infinitely differentiable)

- #todo check if #not-in-course - If $f$ infinitely differentiable on $(-R,R)$, and there exists $M$ such that $|f^{(n)}(x)|\leq M$ for all $x\in(-R,R)$ and $n\in\mathbb{N}$, then $f$ can be represented by a power series on $[-R,R]$.

## Operations

- Addition and Subtraction: Given two power series $f(x)=\sum a_n(x-c)^n$ and $g(x)=\sum b_n(x-c)^n$, then $f(x)\pm g(x)=\sum (a_n\pm b_n)(x-c)^n$.
	- The radius of convergence of $f(x)\pm g(x)$ is at least the minimum of the radii of convergence of $f(x)$ and $g(x)$.
- Multiplication and Division: #todo
- Differentiation and Integration:
	- $f'(x)=\sum_{n=1}^{\infty}na_n(x-c)^{n-1}=\sum_{n=0}^{\infty}a_{n+1}(n+1)(x-c)^n$.
	- $\int f(x)dx=\sum_{n=0}^{\infty}\frac{a_n}{n+1}(x-c)^{n+1}$.
	- The radius of convergence of $f'(x)$ and $\int f(x)dx$ is the same as the radius of convergence of $f(x)$.

- #todo Given power series $f(x)=\sum_{n=0}^{\infty}a_nx^n$ and $g(x)=\sum_{n=0}^{\infty}b_n(x)^n$ that converges to $f$ and $g$, respectively. Then:
	- (a.) $\sum c a_n x^n$ converges to $cf(x)$.
	- (b.) $\sum (a_n+b_n)x^n$ converges to $f(x)+g(x)$.
	- (c.) $a_n=\sum_{k=0}^{n}a_kb_{n-k}$, then $\sum a_nx^n$ converges to $f(x)g(x)$. (Cauchy product)
	- (d.) #todo composition of power series

# Taylor Series

- The **Taylor series** of a function $f(x)$ (that is [[Derivative#Continuously Differentiability|infinitely differentiable]]) at a point $a$, is the power series $\displaystyle\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n$. 
	- When $a=0$ the series is called the **Maclaurin series**.
	- The partial sum formed by the first $n+1$ terms of a Taylor series is a polynomial of degree $n$ that is called the $n$th [[Taylor polynomial]] of $f$ at $a$. (or the $n$th Maclaurin polynomial of $f$)






-  An **(infinite) series** is an expression that can be written in the form $\displaystyle\sum _{n=1}^{\infty}a_n=a_{1}+a_{2}+\dots+ a_{n}+\dots$ where $(a_{n})$ is a sequence

	- The numbers $a_{1},a_{2},\dots$ are called the **terms** of the series. The number $a_n$ is called the $n$-th **term** of the series.
	- The sequence $(s_n)$ defined by $s_n=\sum_{k=1}^{n}a_k$ is called the **sequence of partial sums** of the series. The number $s_n$ is called the **$n$-th partial sum** of the series.
	- If $(s_n)$ converges to $L$, we say that the series **converges** and that its **sum** is $L$ and write $$a_1+a_2+a_3+\cdots=\sum_{n=1}^{\infty}a_n=\lim_{ n \to \infty }\sum _{k=1}^{n}a_k=L$$
	- If the sequence of partial sums $(s_n)$ diverges, then we say that the series **diverges**.  
		- If $\displaystyle\lim_{n\to\infty}s_n=\infty$, then we say that the series **diverges to infinity**. And denote its sum by $\sum_{n=1}^{\infty}a_n=\infty$. 
		- If $\displaystyle\lim_{n\to\infty}s_n=-\infty$, then we say that the series **diverges to negative infinity**. And denote its sum by $\sum_{n=1}^{\infty}a_n=-\infty$.


#### Convergence Absolutely

- (d5.7) A series $\sum_{n=1}^{\infty}a_n$ is said to **converge absolutely** if the series of absolute values $\sum_{n=1}^{\infty}|a_n|$ converges.
- (d5.8) A series $\sum_{n=1}^{\infty}a_n$ is said to **converge conditionally** if it converges but does not converge absolutely.

# Well-known Series

## Telescoping series

- A **telescoping series** is a series of the form $\displaystyle\sum_{n=1}^{\infty}(b_n-b_{n+1})$.
- A **telescoping sum** is a sum of the form $\displaystyle\sum_{n=1}^{N}(b_n-b_{n+1})=b_1-b_{N+1}$.

## Geometric series

- A **geomorphic series** is a series of the form $\sum_{n=0}^{\infty}ar^n$ where $a\neq0$ and the **common ratio** $r$ are constants.
	- Finite series
		- ${\displaystyle\sum _{k=1}^{n}ar^{k-1}={\begin{cases}a\left({\frac {1-r^{n}}{1-r}}\right)&r\neq 1\\an&{\text{otherwise}}\end{cases}}}$
	- Infinite series
		- if $|r|<1$, $\sum_{n=0}^{\infty}ar^n=\frac{a}{1-r}$.
		- if $|r|\geq1$, $\sum_{n=0}^{\infty}ar^n$ diverges.
			- if $r=1$, $\sum_{n=0}^{\infty}ar^n$ diverges to $\infty$ if $a>0$ (or $-\infty$ if $a<0$).

## p-series & harmonic series

- A series of the form $\sum_{n=1}^{\infty}\frac{1}{n^p}$ is called a **p-series**. 
	- (e5.8) The p-series converges if $p>1$ and diverges if $p\leq1$.
	- When $p=1$, the series is called the **harmonic series** $\sum_{n=1}^{\infty}\frac{1}{n}$, which diverges.

- The **alternating harmonic series** is the series $\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}=\ln 2$.

# Arithmetic

- Additivity (5.9) - If $\sum_{k=1}^{\infty}a_k$ and $\sum_{k=1}^{\infty}b_k$ converge, then $\sum_{k=1}^{\infty}(a_k\pm b_k)$ converges and $\sum_{k=1}^{\infty}(a_k\pm b_k)=\sum_{k=1}^{\infty}a_k\pm\sum_{k=1}^{\infty}b_k$.
- (5.10) If $c\neq0$, then $\sum_{k=1}^{\infty}a_k$ converges if and only if $\sum_{k=1}^{\infty}ca_k$ converges and $\sum_{k=1}^{\infty}ca_k=c\sum_{k=1}^{\infty}a_k$.
- If $\sum_{k=1}^{\infty}a_k$ converges, then $\sum_{k=1}^{\infty}ca_k$ converges and $\sum_{k=1}^{\infty}ca_k=c\sum_{k=1}^{\infty}a_k$.
- (q5.12) If $\sum_{k=1}^{\infty}a_k=\infty$, and $c>0$, then $\sum_{k=1}^{\infty}ca_k=\infty$.  

- Convergence or divergence is unaffected by deleting a finite number of terms from a series; in particular, for any positive integer $K$, the series $\sum_{k=1}^{\infty}a_k$ converges if and only if the series $\sum_{k=K}^{\infty}a_k$ converges.

# Rearranging Series

- If $\sum a_n$ absolutely converges, then every series obtained by reordering the terms of $\sum a_n$ absolutely converges to the same sum. (Known as Riemann's theorem, or the Riemann rearrangement theorem or Riemann's theorem on rearrangement of series.)
- If $\sum a_n$ converges conditionally, then there exists a permutation of the terms of $\sum a_n$ that converges to any real number or diverges. (Known as the Riemann series theorem)
- If $\sum a_n$ converges, then every series obtained by inserting parentheses, converges to the same sum. (Known as the associative law for series.)


- (5.25) If $\sum a_n$ is a series of nonnegative terms, and $\sum b_n$ that obtains by rearranging the terms of $\sum a_n$, then $\sum b_n$ converges if and only if $\sum a_n$ converges. In this case, $\sum a_n=\sum b_n$. (Riemann's theorem)

- (5.26) If $\sum a_n$ is a series, and $\sum b_n$ that obtains by rearranging the terms of $\sum a_n$, then $\sum b_n$ absolutely converges if and only if $\sum a_n$ absolutely converges. In this case, $\sum a_n=\sum b_n$. (Riemann's theorem)

- (5.27) Riemann series theorem for conditional convergence - If $\sum a_n$ converges conditionally, then: 
	- for every $S\in\mathbb{R}$, there exists a series that obtains by rearranging the terms of $\sum a_n$ such that $S$ is its sum. 
	- Also there exists series that obtains by rearranging the terms of $\sum a_n$ that diverges to $\infty$ and $-\infty$.
	- Also, there exists a series that obtains by rearranging the terms of $\sum a_n$ that diverges. (not to $\infty$ or $-\infty$)

# Exmaples

- $\displaystyle\sin x=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}x^{2n+1}$ 
- $\displaystyle\cos x=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n)!}x^{2n}$ 
- $\displaystyle e^x=\sum_{n=0}^{\infty}\frac{1}{n!}x^n$
- $\displaystyle e^{-x}\sum_{n=0}^{\infty}\frac{(-1)^n}{n!}x^n$
- $\displaystyle\ln(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}x^{n}$
- $\displaystyle\ln(1-x)=-\sum_{n=1}^{\infty}\frac{1}{n}x^{n}$


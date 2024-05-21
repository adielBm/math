# Unbounded Integrand

| The **improper integral** of $f$                                                       | $f$ is defined on | $f$ is integ. & bounded in every interval |
| -------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------- |
| $\displaystyle\int _{a}^{b}f(x) \, dx=\lim_{ t \to b^- }\int _{a}^{t}f(x) \, dx$       | $[a,b)$           | $[a,t]$ where $a<t<b$                     |
| $\displaystyle\int _{a}^{b}f(x) \, dx=\lim_{ t \to a^+ }\int _{t}^{b}f(x) \, dx$       | $(a,b]$           | $[t,b]$ where $a<t<b$                     |
| $\displaystyle\int _{a}^{b}f(x) \, dx=\int _{a}^{d}f(x) \, dx+\int _{d}^{b}f(x) \, dx$ | $(a,b)$           | closed subinterval of $(a,b)$             |


- If the limit(s) exist (finite), then the improper integral **converges**; otherwise, it **diverges**.


- (3.2) given $b>0$, then $\displaystyle\int _{0}^b\frac{dx}{x^p}$ converges if and only if $p<1$
- (q3.5)
	-  $\displaystyle\int _{a}^b\frac{dx}{(x-a)^p}$ converges if and only if $p<1$
	- $\displaystyle\int _{a}^b\frac{dx}{(b-a)^p}$ converges if and only if $p<1$
- (3.3) if $f$ is integrable on $[a,b]$ then the improper integral over $(a,b]$ (or $[a,b)$) is equal to the integral over $[a,b]$ 


- $\displaystyle\int ^\infty_{1}\frac{dx}{x^{p}} \, dx=\begin{cases} \frac{1}{p-1} &  p>1 \\ \text{diverges} & {p\leq 1}\end{cases}$


## Comparison Tests


- Cauchy's Criterion
	- Let $f(x)$ be defined on $(a,b]$ and integrable in every subinterval in the form $[t,b]$ (where $a<t<b$). Then:
		- The improper integral $\int ^b_{a}f(x) \, dx$ converges if and only if $\forall\varepsilon>0,\exists \delta>0$ such that for every two numbers $r,s$ in $[a,a+\delta]$ we have $\displaystyle\left|\int ^x_{r}f(x) \, dx\right|<\varepsilon$

### Direct Comparison Test

- (3.5) Let $f$ and $g$ be continuous on $[a,\infty)$ with $0\leq f(x)\leq g(x)$ for all $a\leq x$ then: 
	- if $\int ^{\infty}_{a} g \, dx$ converges then $\int ^{\infty}_{a} f\, dx$ convergent
	- if $\int ^{\infty}_{a} f \, dx$ diverges then $\int ^{\infty}_{a} g\, dx$ diverges

### Limit Comparison Test

- If the positive functions $f$ and $g$ are continuous on $[a, \infty)$, and if $\displaystyle\lim_{ x \to \infty }\frac{f(x)}{g(x)}=L$ where $0<L$ then $\int ^\infty_{a} f \, dx$ and $\int ^\infty_{a} g \, dx$ either both converge or both diverge 


- (3.5') if $f,g$ non-negativeon defined on $(a,b]$ and integrable in every closed subinterval of $(a,b]$. and $\displaystyle\lim_{ x \to a^+ }\frac{f(x)}{g(x)}=L$ then,
	- if $0<L<\infty$ then $\int ^b_{a}g(x) \, dx$ converges if and only if $\int ^b_{a}g(x) \, dx$ converges
	- if $L=0$ and $\int ^b_{a}g(x) \, dx$ converges then $\int ^b_{a}g(x) \, dx$ converges
	- if $L=\infty$ and $\int ^b_{a}g(x) \, dx$ diverge then $\int ^b_{a}g(x) \, dx$ diverge
	- similar test for $[a,b)$

___


- (d3.6) Let $f(x)$ defined on $(a,b]$ and integrable in every closed subinterval, we say that $f(x)$ is **absolutely integrable** on $(a,b]$ if $\int ^b_{a}\left| f(x) \right| \, dx$ is integrable in that case we say that $\int ^b_{a}f(x) \, dx$ **absolutely converges**
- (3.7) if $f$ is absolutely integrable in $(a,b]$ then $f$ is integrable in $(a,b]$


# Infinite Intervals

| The **improper integral** of $f$                                                                               | $f$ is defined on   | $f$ is integ. & bounded in every interval |
| -------------------------------------------------------------------------------------------------------------- | ------------------- | ----------------------------------------- |
| $\displaystyle\int _{a}^{\infty}f(x) \, dx=\lim_{ t \to\infty }\int _{a}^{t}f(x) \, dx$                        | $[a,\infty)$        | $[a,t]$ where $a<t$                       |
| $\displaystyle\int _{-\infty}^{b}f(x) \, dx=\lim_{ t \to -\infty }\int _{t}^{b}f(x) \, dx$                     | $(−\infty, b]$      | $[t,b]$ where $t<b$                       |
| $\displaystyle\int _{-\infty}^{\infty}f(x) \, dx=  \int _{-\infty}^{c}f(x) \, dx+\int _{c}^{\infty}f(x) \, dx$ | $(−\infty, \infty)$ | finite interval                           |

If the limit(s) exist, then the improper integrals **converge**; otherwise, they **diverge**.

- (3.12) if $b>0$ then $\displaystyle\int ^\infty_{b} \frac{dx}{x^c}$ converges iff $c>1$
- (q3.22a) $f$ is defined and integrable in every finite subinterval on $[a,\infty)$, and $F'=f$
	- $\int^\infty_{a} f(x) \, dx$ converges iff $\displaystyle\lim_{ x \to \infty }F(x)$ exists. 
		- in such case $\int^\infty_{a} f(x) \, dx=\displaystyle\lim_{ x \to \infty }(F(x))-F(a)$
- (q3.22b) $f$ is defined and integrable in every finite subinterval on $[a,\infty)$, and $F'=f$
	- $\displaystyle\int^\infty_{-\infty} f(x) \, dx$ converges iff $\displaystyle\lim_{ x \to \infty }F(x)$ and $\displaystyle\lim_{ x \to -\infty }F(x)$ exist. 
		- in such case $\int^\infty_{-\infty} f(x) \, dx=\displaystyle\lim_{ x \to \infty }F(x)-\lim_{ x \to -\infty }F(x)$

## Comparison Tests

- (3.15) Cauchy's Criterion
	- Let $f(x)$ be defined on $[a,\infty)$ and integrable in every subinterval in the form $[a,t]$ (where $a<t$). Then:
		- The improper integral $\int ^\infty_{a}f(x) \, dx$ converges if and only if $\forall\varepsilon>0,\exists M>a$ such that for every two numbers $r,s$ in $[M,\infty)$ we have $\displaystyle\left|\int ^x_{r}f(x) \, dx\right|<\varepsilon$

- Let $f$ and $g$ be continuous on $[a,\infty)$ with $0\leq f(x)\leq g(x)$ for all $a\leq x$ and integrable in every subinterval in the form $[a,t]$ (where $a<t$). 
	- (3.16) given $A\geq a$ such that $0\leq f(x)\leq g(x)$ for all $x$ in $[A,\infty)$ then: 
		- if $\int ^{\infty}_{a} g \, dx$ converges then $\int ^{\infty}_{a} f\, dx$ convergent
		- if $\int ^{\infty}_{a} f \, dx$ diverges then $\int ^{\infty}_{a} g\, dx$ diverges
	- (3.16-limit) given $\displaystyle\lim_{ x \to \infty }\frac{f(x)}{g(x)}=L$ exists (finite or infinite) then:
		- if $0<L<\infty$ then $\int ^b_{a}g(x) \, dx$ converges if and only if $\int ^b_{a}g(x) \, dx$ converges
		- if $L=0$ and $\int ^b_{a}g(x) \, dx$ converges then $\int ^b_{a}g(x) \, dx$ converges
		- if $L=\infty$ and $\int ^b_{a}g(x) \, dx$ diverge then $\int ^b_{a}g(x) \, dx$ diverge










> [!TIP]
> - Vector Space Operations:
>	- _Scalar Multiplication_: ($\textit{scalar}\cdot\mathbf{vector}=\mathbf{vector}$)
>	- _Vector Addition_: ($\mathbf{vector}+\mathbf{vector}=\mathbf{vector}$)
>- _Dot Product_: ($\mathbf{vector}\cdot\mathbf{vector}=\textit{saclar}$)
>- _Cross Product_: ($\mathbf{vector}\times\mathbf{vector}=\mathbf{vector}$)

### Dot Product

> also **scalar product** or **Euclidean inner product**

**Definition:**
- **Coordinate definition:** $\displaystyle  {\displaystyle \mathbf {a} \cdot \mathbf {b} =\sum _{i=1}^{n}a_{i}b_{i}=a_{1}b_{1}+a_{2}b_{2}+\cdots +a_{n}b_{n}}$
- **Geometric definition:** $\displaystyle  {\displaystyle \mathbf {a} \cdot \mathbf {b} =\left\|\mathbf {a} \right\|\left\|\mathbf {b} \right\|\cos \theta }$

**Properties:** (12.1.2)
- Symmetry $\textbf{a}\cdot\textbf{b}=\textbf{b}\cdot\textbf{a}$
- Distributive $(\textbf{a}+\textbf{b})\cdot{\textbf{c}}=\textbf{a}\cdot\textbf{c}+\textbf{b}\cdot\textbf{c}$
- Homogeneity $(t\textbf{a})\cdot\textbf{b}=t(\textbf{a}\cdot\textbf{b})$
- Positivity $\textbf{a}\cdot\textbf{a}\geq 0$
	- $\textbf{a}\cdot\textbf{a}= 0 \iff \textbf{a}=\textbf{0}$
- $\textbf{0}\cdot\textbf{a}=\textbf{a}\cdot\textbf{0}=0$

### Cross Product

- $\displaystyle  \mathbf {a} \times \mathbf {b} =\|\mathbf {a} \|\|\mathbf {b} \|\sin(\theta )\,\mathbf {n}$ #not-in-course 



## Norm of a Vector

- (d12.1.3) - $\| \textbf{a} \|:=\sqrt{\textbf{a} \cdot \textbf{a}}=\sqrt{ \sum_{i=1}^{n}a_{i}^2 }$
- (q12.1.4) $\|\textbf{a} \|=0 \iff \textbf{a}=\textbf{0}$
- Homogeneity (q12.1.5) $\|t \textbf{a} \|=|t|\cdot\| \textbf{a} \|$
- Cauchy–Schwarz inequality (12.1.4) $|\textbf{a}\cdot\textbf{b}| \leq  \| \textbf{a} \| \cdot{\| \textbf{b} \|}$
- (q12.1.7) $|\textbf{a}\cdot\textbf{b}| =  \| \textbf{a} \| \cdot{\| \textbf{b} \|} \iff \textbf{a},\textbf{b}$ are linearly inpendent 
- (q12.1.8) Triangle inequality for vectors $\| \textbf{a} + \textbf{b} \| \leq \| \textbf{a} \| +{\| \textbf{b} \|}$
- Parallelogram Equation for Vectors $\|\textbf{u}+\textbf{v} \|^2+\|\textbf{u}-\textbf{v} \|^2=2(\|\textbf{u}\|^2+\|\textbf{v}\|^2)$


# Orthogonality  

- (d12.2.1) orthogonality of two vectors - $\textbf{a}$ and $\textbf{b}$ are called orthogonal if $\textbf{a}\cdot\textbf{b}=0$ (This relationship is denoted $\textbf{a}\perp\textbf{b}$)
- (q12.2.3) Generalized Theorem of Pythagoras: $\textbf{a}\perp\textbf{b}\implies\| \textbf{a} + \textbf{b} \|^2 = \| \textbf{a} \|^2 +{\| \textbf{b} \|}^2$
- (d12.2.2) $\mathbf{v} \perp U$ if for all vectors $\mathbf{u} \in U$, $\mathbf{v} \cdot \mathbf{u} = 0$

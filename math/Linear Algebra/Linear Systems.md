 $\large A$ is $m\times n$ matrix 


## Equivalence

- (d1.7.1) two linear systems are equivalent if and only if they have the same solution set.

## Consistency 

The following statements are **equivalent**: (For each $\mathbf{b}\in\mathbb{R}^m$)
- $A\mathbf{x}=\mathbf{b}$ is **consistent**
- (8.6.2) **Rouché–Capelli theorem** $\rho([A|\mathbf{b}])=\rho(A)$
- $\text{REF}[A|\mathbf{b}]$ has no row $\left[\begin{array}& 0 & \cdots & 0 & b \end{array}\right]$ in which $b\neq 0$ 
- $\mathbf{b}$ is a linear combination of the colmuns of $A$
- $\mathbf{b}\in \text{column-space}(A)$


- #todo  The colmuns of $A$ span $\mathbb{R}^m$, then Ax=b for each b
- #todo  $A$ has a pivot position in every row, then Ax=b for each b

**Properties of consistent system:**
**number of soltions:**
- if there are no free variables, there is a unique solution
- if there is at least one free variable, there are infinitely many solutions

## Homogeneous system
$$\large A\mathbf{x}=\mathbf{0}$$
- Homogeneous system is **consistent**
- if $m<n$, then it has **infinitely** many solutions
- The following statements are **equivalent**:
	- $A\mathbf{x}=\mathbf{0}$ has a **nontrivial** solution
	- The columns of a matrix $A$ are linearly **dependent**
	- $A\mathbf{x}=\mathbf{0}$ has at least one free variable
- The following statements are **equivalent**:
	- $A\mathbf{x}=\mathbf{0}$ has only the **trivial** solution
	- The columns of a matrix $A$ are linearly **independent**

# Overdetermined Case (m>n)

- if $m>n$ then the $A\mathbf{x}=\mathbf{b}$ is **inconsistent** for at least one vector $\mathbf{b}$ in $\mathbb{R}^m$

# Underdetermined Case (m<n)

- if $m<n$ then for each vector $\mathbf{b}$ in $\mathbb{R}^m$ the system $A\mathbf{x}=\mathbf{b}$ is either **inconsistent** or has infinitely many solutions.
# Square System (m=n)

- The following statements are **equivalent**:
	- $A$ is [[Matrices#Invertibility|Invertible]]
	- For each $\textbf{b}$, the system $A\textbf{x}=\textbf{b}$ has **unique solution**. ($\textbf{x}=A^{−1}\textbf{b}$) 
	- There exists $\textbf{b}$, such that the system $A\textbf{x}=\textbf{b}$ has a **unique solution**
	- $A\mathbf{x}=\mathbf{0}\implies \mathbf{x}=\mathbf{0}$
- The following statements are **equivalent**:
	- $A$ is singular
	- $A\mathbf{x}=\mathbf{0}$ has **non trivial** solution
	- 

- (4.6.1) Cramer's rule: in that case, $\mathbf{x}=(x_{1},\dots,x_{n})$, $x_i = \frac{\det(A_i)}{\det(A)}$, $i = 1, \ldots, n$, where $A_{i}$ is the matrix formed by replacing the $i$-th column of $A$ by the column vector $\mathbf{b}$.


- find a basis for $\text{Sp}(K)\cap\text{Sp}(L)$
# Matrices

- find a $m\times n$ matrix $A$, such that $\text{null}(A)=\text{Sp}(\{ v_{1},v_{2},\dots,v_{m} \})$ 
	- **2019a**85q8b, **2018b**86q5b
- number of eigenvalues - **2023b82**q3b1

- Given a matrix $A$ in which some entries are dependent in varible $a$. 
	- **Q**: find the $a$ values such that $A$ is diagonalizable. 
		 - Find the eigenvalues of $A$ using characteristic polynomial.
		 - Find the values of $a$, for which the algebraic multiplicity of each eigenvalue $\lambda_{i}$ is equal to its geometric multiplicity which is $\dim{(\lambda_{i}I-A)}=n-\text{rank}(\lambda_{i}I-A)$.
	 - **Q:** prove that for each $a$, the matrix $A$ is diagonalizable.
		 - Find the eigenvalues of $A$ using characteristic polynomial. by (11.3.6) if $A$ has $n$ **distinct** eigenvalues, then $A$ diagonalizable
	- **Q:** find $\det(A)$
		- see q11.4.7
 
# Vector Spaces 

## dimension 

- finding dimension 
	- of $V=\text{Sp}(K)$
		- met. 1:
			- put $K$'s vectors as row in A
			- $\text{rank}(\text{REF}(A))=\dim{V}$


___

- (https://youtu.be/uW_vydmTWio) 2020a2 q5b
	- if
		- $U_1, U_2, W$ are subspaces of $V$
		- $V=U_1\oplus U_2$
		- $U_1 \subseteq W$
	- then
		- $W=U_1 \oplus (U_2\cap W)$
- (https://youtu.be/8x8y-3w55SY) 2020a2 
	- Give an example of a vector space $V$ and subspaces $U_1, U_2, W$ of $V$ such that:
		- $V=U_1\oplus U_2$
		- $W \neq (U_1 \cap W) \oplus (U_2 \cap W)$
	- Answer: 
		- $V=\mathbb{R}^2$
		- $U_1=\text{Sp}(\{ (1,0) \})$
		- $U_2=\text{Sp}(\{ (0,1) \})$
		- $W=\text{Sp}(\{ (1,1) \})$
		- $U_1\oplus U_2=\mathbb{R}^2$
		- $U_1 \cap W=\{ (0,0) \}$
		- $U_2 \cap W=\{ (0,0) \}$
		- $(U_1 \cap W) \oplus (U_2 \cap W)=\{ (0,0) \}$
		- $W \neq (U_1 \cap W) \oplus (U_2 \cap W)$
- 2020 a 2a q6
	-  Given $T:V\to F$ ($V$ is a vector space over $F$) and $\exists v \in V: T(v)\neq 0$. Prove that $V=\text{Sp}(v)\oplus \text{Ker}(T)$
	- Proof:
		- (1: $\text{Sp}(v)\cap \text{Ker}(T)=\{ 0 \}$)
			- $w\in \text{Sp}(v)\cap \text{Ker}(T) \implies$
			- $w=av$ for some $a\in F$ and $T(w)=0$
			- $T(w)=T(av)=aT(v)=0\implies$
			- $a=0\implies$
			- $w=0\implies$
			- $\text{Sp}(v)\cap \text{Ker}(T)=\{ 0 \}$
		- (2: $V=\text{Sp}(v)+\text{Ker}(T)$)
			- $\dim \text{Im} T\leq \dim F = 1$
			- $T(v)\neq 0 \implies \dim \text{Im}\neq 0$
			- $\implies \dim \text{Im}=1$ 
			- #todo







- ($A$ is square) $\text{rank}(A)=\text{rank}(A^2)\implies \text{null}(A)=\text{null}(A^2)$
	- ___Proof___: 
	$\begin{aligned} (Ax = 0 \implies A^2x = 0) \implies \text{null}(A) \subseteq \text{null}(A^2) \\ (\text{rank}(A) = \text{rank}(A^2)) \underset{\text{ (by RNT)}}{\implies} (\text{nullity}(A) = \text{nullity}(A^2))  \end{aligned}\quad \overset{\text{ (by 8.3.4b)   }}{\implies} \text{null}(A) = \text{null}(A^2)$
	




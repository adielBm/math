# Syntax

## Alphabet 

The alphabet of a first-order language consists of the following distinct symbols:
### Logical symbols

|                            | Logical symbols                                                      |
| -------------------------- | -------------------------------------------------------------------- |
| Logical connectives        | $\lnot,\rightarrow,\lor,\land,\leftrightarrow$                       |
| Punctuation Symbols        | Comma and Parentheses                                                |
| Variables ($\mathrm{VAR}$) | $v_{0},v_{1},v_{2},\dots$                                            |
| Quantifier symbols         | $∀$ (universal quantification), <br>$∃$ (existential quantification) |
| Equality (optional)        | $=$                                                                  |
### Non-logical symbols

|                             | Non-logical symbols                                               |
| --------------------------- | ----------------------------------------------------------------- |
| Predicate Symbols           | $P_{0}^{n}, P_{1}^{n},P_{2}^{n},\dots$ (For each arity $n\geq 0$) |
| Function Symbols (optional) | $F_{0}^{n}, F_{1}^{n},F_{2}^{n},\dots$ (For each arity $n\geq 0$) |
| Constant Symbols (optional) | $C_{0},C_{1},C_{2},\dots$                                         |
## Language

### Terms

The set of terms is inductively defined by the following rules:

- Each variable and each constant symbol is a **term**
- If $F$ is an $n$-ary function symbol, and $t_{1},\dots, t_{n}$ are terms, then $F(t_{1},\dots,t_{n})$ is a term
### Formulas

The set of **formulas** (also called **well-formed formulas** or **WFFs**) is inductively defined by the following rules:

- *Predicate symbols*. If $P$ is an $n$-ary predicate symbol and $t_{1}, \dots, t_{n}$ are terms then $P(t_{1},\dots,t_{n})$ is a formula. 
- *Negation*. If $φ$ is a formula, then $¬ φ$ is a formula. 
- *Binary connectives*. If $φ$ and $ψ$ are formulas, then $( φ → ψ )$ is a formula. (Similar rules apply to other binary logical connectives). 
- *Quantifiers*. If φ is a formula and $x$ is a variable, then $∀xφ$ (for all $x$, $φ$ holds) and $∃xφ$ (there exists $x$ such that $φ$) are formulas

Only expressions which can be obtained by finitely many applications of rules  are formulas. 

The formulas obtained from the first two rules are said to be **atomic formulas**.

#### Unique Readability

#todo 

#### Induction on wffs principle 

- (Theorem 5.4) 
	- Prove $H(A)$ for all atomic formulas A #todo 


### Free & Bound Variables

- For any quantifier $Q$, and let be a formula $QxB$, we say that $B$ is the **scope** of $Qx$
- The concept that a variable $x$ **occurs free** or **bound** (also: $x$ is a **free** or **bound occurrence**) in formula is defined recursively as follows:
	- Atomic formulas:
		- If $φ$ is an atomic formula, then $x$ occurs free in $φ$ if and only if $x$ occurs in $φ$. 
		- Moreover, there are no bound variables in any atomic formula.
	- Negation:
		- $x$ occurs free in $¬φ$ if and only if $x$ occurs free in φ. 
		- $x$ occurs bound in $¬φ$ if and only if $x$ occurs bound in φ
	- Binary connectives:
		- $x$ occurs free in $(φ → ψ)$ if and only if $x$ occurs free in either $φ$ or $ψ$. 
		- $x$ occurs bound in $(φ → ψ)$ if and only if $x$ occurs bound in either $φ$ or $ψ$. 
		- (The same rule applies to any other binary connective in place of $→$.)
	- Quantifiers: ($Q$ is either $\forall$ or $\exists$)
		- $x$ occurs free in $Qyφ$, if and only if $x$ occurs free in $φ$ and $x$ is a different symbol from $y$. 
		- $x$ occurs bound in $Qyφ$, if and only if $x$ is $y$ or $x$ occurs bound in $φ$. 

- A variable $x$ is a **free variable** in $φ$, if and only if, it has at least one free occurrence in $\varphi$ 
- A variable $x$ is a **bound variable** in $φ$, if and only if, all occurrences of $x$ in $φ$ are bound
##### Sentence

- A formula $\varphi$ is called a **sentence**, if these is no free variable in $\varphi$, i.e. all occurrences of $x$ in $φ$ are bound

### Substitution

- The **substitution** $\varphi[t/x]$ replaces each free occurrence of the variable $x$ in the formula $\varphi$ with the term $t$
- The substitution $\varphi[t/x]$ is a **capture-avoiding substitution** if and only if no variable occur in $t$ become bonud (we say that $t$ is **substitutable** for $x$ in $\varphi$, or the quantifier $Qx$ does not **capture** the variable $x$ in $t$.)

# Semantic

## Structure (Model)

- (C5.4) A **model** or **structure** $M = \langle A; c_1^M, \ldots; F_1^M, \ldots ;P_{1}^{M},\dots\rangle$ is defined as
	- $A$ is a non-empty set called the **domain** ($A$ is sometimes denoted by $|M|$)
	- For each constant symbol $c$, assigns a member $c^M$ of the domain $A$
	- For each each $n$-ary predicate symbol $P$, assigns an $n$-place relation $P^M\subseteq A^n$
	- For each each $n$-ary function symbol $F$, assigns an $n$-ary function $F^{M}: A^{n}\to{A}$. 


> If we don't mention other, we are in **first-order logic with equality**, which means, the equality symbol ̇$=$ is defined as the identity relation $R = \{(x, x) : x \in A\}$


#### Variable Assignment

- $V(\varphi)$ is the set of variables which occur freely in $\varphi$
- A **(variable) assignment** for a structure $M$ with the domain $A$ is a mapping $S:\text{dom}(S)\to A$ where $\text{dom}(S)\subseteq{VAR}$
	- A **(variable) assignment** for a formula $\varphi$ is a mapping $S:\text{dom}(S)\to A$ where $V(\varphi)\subseteq\text{dom}(S)\subseteq{VAR}$ 
		- If $\varphi$ is a sentence, then every assignment is *for a formula* $\varphi$, because $V(\varphi)=\emptyset$
	- If $S$ is an assignment for a structure $M$, and $x \in \text{VAR}$, and $a\in{A}$ we denote $S\langle{x|a}\rangle$ if $S(x)=a$

### Truth Value

#### Truth Value of formula in Assignment

Given structure $M$, and an assignment $S$ for a formula $\varphi$.

- If $\varphi$ is an atomic formula $P(t_{1},\dots,t_{n})$, then $\varphi$ is **true** if $(t_{1}^S,\dots,t_{n}^S)\in{P^M}$, otherwise $\varphi$ is **false**
- If $\varphi$ is the formula $\lnot{\psi}$, then $\varphi$ is **true** if is $\psi$ is false, otherwise $\varphi$ is **false**. (similar way for the other connectives as in as in propositional logic)
- If $\varphi$ is the formula $\exists x\psi$ then $\varphi$ is **true** if and only if there exists an element $a\in A$ such that $\psi$ is true in $S\langle{x|a}\rangle$
- If $\varphi$ is the formula $\forall x\psi$ then $\varphi$ is **true** if and only if for each element $a\in A$ the formula $\psi$ is true in $S\langle{x|a}\rangle$
- The **truth value** of a formula is **truth** if it is true, and **falsity**
- Notaion: if $\varphi$ is true we can denote $S(\varphi)=\mathsf{T}$ or $S\models{\varphi}$ or $M\models_{S}\varphi$. If $\varphi$ is false we denote $S(\varphi)=\mathsf{F}$ or $S\nvDash\varphi$ or $M\nvDash_{S}\varphi$.
- Given structure $M$, and two assignments $S_{1}$ and $S_{2}$ for a formula $\varphi$, such that $S_{1}(x)=S_{2}(x)$ for each $x \in V(\varphi)$, then $S_{1}(\varphi)=S_{2}(\varphi)$.

#### Truth Value of formula in Model

Given a model $M$

- $\varphi$ is a sentence, then all assignments in $M$ give to $\varphi$ the same value. 
	- In case a sentence $\varphi$ is true (in some assignment, and therefore in every assignment) then we say that the sentence $\varphi$ is **true in the structure** $M$, and denote $M\models{\varphi}$. 
	- Otherwise, if a sentence $\varphi$ is false (in some assignment, and therefore in every assignment) then we say that the sentence $\varphi$ is **false in the structure** $M$, and denote $M\nvDash{\varphi}$.
- A formula $\varphi$ is **true in** $M$ if and only if $\varphi$ is true in every assignment $S$ for $\varphi$ 
	- notation: $M\models{\varphi}$, other terminology: $M$ **satisfied** $\varphi$; $M$ is a model of $\varphi$; $\varphi$ holds in $M$
	- If $x$ is a variable, then $\varphi$ is true in structure $M$ if and only if $\forall x\varphi$ is true in $M$


#### Model of Set

- A model $M$ is said to be a **model of** a set of sentences $K$, written $M\models K$, whenever $M\models{\varphi}$ for each $\varphi \in K$

##### Satisfiable Set

- A set of sentences $K$ is said to be **satisfiable** iff there is some $M$ such that $M\models K$.

#### Universal closure

- Given $V(\varphi)=\{ x_{1},\dots,x_{r} \}$, then $\forall x_{1}\dots \forall x_{r}\varphi$ the **universal closure** of the formula $\varphi$
	- The formula $\varphi$ is true in $M$ if and only if its universal closure $\forall x_{1}\dots \forall x_{r}\varphi$ is true in $M$


### Restricted languages

```
If the set of relation symbols, function symbols, and constant symbols of a language $L$ is a subset of the set of alphabet symbols of $L'$, then $L$ is called a **reduction** of the language $L'$, and $L'$ is called an **enrichment** of the language L. Every noun in $L$ is also a noun in $L'$, and every formula in $L$ is also a formula in $L'$. If M is a model in the extended language $L'$, then the reduction of M to the language $L$ is obtained by ignoring the relations and functions that have been named in $L'$ but are not in the language $L$ (on the other hand, if M is a model in the language L, then there are many enrichments of the model to a model in the language $L'$, because there are many functions and relations in the structure to which the additional names can be assigned). It is important to note that the locality of the definition by induction (of the value of a noun in an assignment, and of the truth value of a formula in an assignment) ensures that the definition of the truth value of a formula does not depend on the interpretation that the model gives to the symbols that are not mentioned in the formula. In precise terms, this means:

- (Theorem 5.7) Let $M_{1}$ and $M_{2}$ be two models in the languages $L_{1}$ and $L_{2}$, respectively, whose domain is the same set $A$, such that every assignment in one model is also an assignment in the other model. Let $\varphi$ be a formula that is in the intersection of the two languages. If the two models interpret the relation symbols, the function symbols, and the constant symbols that appear in the formula ϕ in the same way, then for every assignment S in the domain A: $M_{1}⊨_{S}​\varphi\iff M_{2}⊨_{S}​\varphi$
	- In particular, if $L_{2}$ is a reduction of $L_{1}$ and $M_{2}$ is the reduction of $M_{1}$, then for every assignment $S$ and for every formula $\varphi$ in $L_{2}$: we have $M_{1}⊨_{S}​\varphi\iff M_{2}⊨_{S}​\varphi$


```

#todo 5.4.6
#todo 5.4.7


## Logical validity

- A formula $\varphi$ is **logical valid** if and only if it is true in every structure (in particular, and in every assignment of $\varphi$) and denote by $\models \varphi$

## Logical Equivalence

- Two formulas $φ$ and $ψ$ are **logically equivalent** (denoted by $φ\equiv ψ$) if and only if, $\varphi\leftrightarrow\psi$ is logical valid. i.e.
	- $φ\equiv ψ$ if and only if for each structure $M$ and for each assignment $S$, we hold $S\models\varphi$ if and only if $S\models\psi$ 
	- (Theorem 5.8) 
		- if $\varphi\equiv \psi$ then: 
			- $\lnot\varphi\equiv \lnot\psi$
			- $\varphi@\theta\equiv\psi@\theta$ and $\theta@\varphi\equiv\theta@\psi$ (for any binary connective $@$)
			- $\forall x\varphi\equiv \forall x\psi$ and $\exists x\varphi\equiv \exists x\psi$ (for each varaible $x$)
		- If $\varphi'$ is arrived from $\varphi$ by replacing sub-formula $\psi$ in $\psi'$ where $\psi\equiv \psi'$ then $\varphi'\equiv \varphi$

- #todo tautology (5.9)


- #todo like Logical Implication in propositional logic but for predicate logic  
### minimal language

#todo 

#### Prenex Normal Form (5.7.2)

- A formula $\varphi$ is said to be in **prenex form** if it is of the form $Q_{1}x_{1}Q_{2}x_{2} \dots Q_{n} x_{n} B$ where each $Q$ is either $∃$ or $∀$, and where $B$ contains no quantifiers. The sequence of quantifiers and variables at the beginning is called the **prefix**, and the quantifier-free formula that follows the **matrix**.
	- If $\varphi$ is in prenex form and its metrix is DNF then it is said to be in  **prenex normal form**


____
## Theory


- A set of sentences $K$ is said to be **inconsistent** if there exists a sentence $\varphi$ such that $K ⊢ \varphi$ and $K ⊢ ¬\varphi$. Moreover, $K$ is **consistent** if for no sentences $\varphi$ we have $K ⊢ \varphi$ and $K ⊢ ¬\varphi$
- A **theory** is a consistent set of [[Predicate Logic#Free & Bound Variables|sentences]]
- A theory $K$ is said to be **complete** if for every sentence $φ$, either $K \vdash\varphi$ or $K \vdash\lnot\varphi$


- examples:
	- $P$ : [[Peano axioms]] 


- #todo antoher definition  (from *D. Cunningham*)  
	- A set of sentences $K$ is said to be a **theory** if and only if $K$ is closed under logical implication, that is, for any sentence $\varphi$ of the language, if $K \models \varphi$, then $\varphi \in K$
	- A theory $K$ is said to be **complete** if for every sentence $φ$, either $φ ∈ K$ or $¬φ ∈ K$
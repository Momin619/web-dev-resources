============================================================
JavaScript One Liners
Category: JavaScript / Practical Patterns
Description: Collection of useful JavaScript one-liners for common programming tasks and logic shortcuts.
Maintainer: @Momin619
Last Updated: 2026-04-10
============================================================

Introduction
One-liners are compact JavaScript expressions used to solve common problems quickly. They improve development speed and reduce repetitive code.

------------------------------------------------------------

1. Swap Variables

let a = 5, b = 10
[a, b] = [b, a]

Use cases:
- Swap values without temporary variables

------------------------------------------------------------

2. Generate Random Number

Math.floor(Math.random() * 10)

Use cases:
- Random selection
- Testing logic

------------------------------------------------------------

3. Remove Duplicates

[...new Set(arr)]

Use cases:
- Clean arrays
- Filter unique values

------------------------------------------------------------

4. Check Even Number

num % 2 === 0

Use cases:
- Conditional logic
- Filtering data

------------------------------------------------------------

5. String to Number Conversion

+"123"

Use cases:
- Quick type conversion

------------------------------------------------------------

6. Reverse String

str.split("").reverse().join("")

Use cases:
- String manipulation
- Coding problems

------------------------------------------------------------

7. Find Maximum Value

Math.max(...arr)

Use cases:
- Data comparison
- Analytics

------------------------------------------------------------

8. Find Minimum Value

Math.min(...arr)

Use cases:
- Lowest value extraction

------------------------------------------------------------

9. Check Value Exists

arr.includes(value)

Use cases:
- Search operations
- Validation

------------------------------------------------------------

10. Conditional Shortcut

condition ? "yes" : "no"

Use cases:
- Inline decisions
- UI logic

------------------------------------------------------------

11. Generate Array

Array.from({ length: 5 }, (_, i) => i)

Use cases:
- Dummy data generation
- Testing loops

------------------------------------------------------------

12. Remove Falsy Values

arr.filter(Boolean)

Use cases:
- Data cleaning
- Form processing

------------------------------------------------------------

13. Deep Clone Object

structuredClone(obj)

Use cases:
- Safe object copying
- State management

------------------------------------------------------------

Summary
One-liners are powerful shortcuts, but should be used only when they keep code readable and maintainable.

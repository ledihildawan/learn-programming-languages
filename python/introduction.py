# Single line comments start with a number symbol.

""" Multiline strings can be written
    using three "s, and are often used
    as documentation.
"""

####################################################
## 1. Primitive Datatypes and Operators
####################################################

# (is vs. ==) is checks if two variables refer to the same object, but == checks
# if the objects pointed to have the same values.

3
1.5

'abc'
'Hello, world'

True
False

None

1 + 1;
0.1 + 0.3;
8 - 1;
10 * 2;
35 / 5;
5 / 2;
10 % 2;
30 % 2;
18.5 % 7;
2 ** 8
1 + 3 * 2
(1 + 3) * 2

5 // 3
-5 // 3
5.0 // 3.0
-5.0 // 3.0

not True
not False
True and False
False or True
True + True
True * 8
False - 5
0 == False
2 > True
2 == True
-5 != False
1 == 1
2 == 1
1 != 1
2 != 1
1 < 10
1 > 10
2 <= 2
2 >= 2
1 < 2 and 2 < 3
2 < 3 and 3 < 2
1 < 2 < 3
2 < 3 < 2

bool(0)
bool("")
bool([])
bool({})
bool(())
bool(set())
bool(4)
bool(-6)

'Hello ' + 'world'
'a' < 'b';
'5' == 5;

'This is a string'[0]
'Hello world'[0:5]
len('Hello')

fullName = 'Ledi Hildawan'

f"{fullName} is {len(fullName)} characters long."

####################################################
## 2. Variables and Collections
####################################################

print("Hello I'm Python. Nice to meet you!")
input_string_var = input("Enter some data: ")

some_var = 5
some_var += 1
some_var *= 10

"Yey!" if 0 > 1 else "Nay!"

myArray = ['Hello', 45, True]

myArray[1]
myArray.append('World')
len(myArray)

myArray[3] = 'Hello'

some_var = myArray.pop()

myArray0 = [32, False, 'py', '12', 56, '90']

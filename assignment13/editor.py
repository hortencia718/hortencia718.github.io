import json


myColors=['green','orange','blue','lime',15,22]

color=myColors.count('green')
print(color)
# sub, end, start
str.count(sub, start= 0, end=len(color))
# print "str.count(sub, 'green','blue'): ", str.count(sub, 15,40)
# sub ="woop";
# print "str.count(sub) : ", str.count(sub)

#ends with
myMessage = "This is Python"
#check if the message ends with python
print(myMessage.endswith('Python'))
# ends with suffix
text="Learning python is fun"
result= text.endswith(('learning','java'))
print(result)

result= text.endswith(('python', 'fun','css'))
print(result)
#start and end parameter
#learning python string to check 
result= text.endswith(('python','an'),0, 18)
print(result)

#isalnum is a method that r/t true if all characters in the string are alphanumic
#either alphabets or numbers. if not it r/t false
name = "S1234poon"
print(name.isalnum())

name='456'
print(name.isalnum())

#isalpha method r/t true is all characters in the string are alphabets. if not it r/t false 
#does not take parameters 
name1='Ted Lasso'
print(name1.isalpha())

#contains white space
name1= 'Ted Lasso'
print(name1.isalpha())

#isdigit() r/td true if ll characters in a string are digits if not it r/t false 
numbs='7890'
print(numbs.isdigit()) #true

numbs = "Ted"
print(numbs.isdigit()) #false

#islower() method r/t true if all alphabets in a string are lowercase alphabets
#if the string contains at least one uppercase alphabet, it r/t false

h ='this is a letter'
print(h.islower()) #true

h='this is no1 riGHt'
print(h.islower())#false

#isspace() method returns True if there are only whitespace characters in the string. If not, it return False.
h= '  /t'
print(h.isspace()) #true

h= ' a '
print(h.isspace()) #false



#istitle() returns True if the string is a titlecased string. If not, it returns False.
      
 h='My name is hortencia.'  
 print(h.istitle())   

h = 'I Love Python.'
if h.istitle() == True:
  print('Titlecased String')
else:
  print('Not a Titlecased String')

  #isupper()method returns whether or not all characters in a string are uppercased or not.

  string= 'THIS IS UPPER'
  print(string.isupper())

 #join()  string method returns a string by joining all the elements of an iterable separated by a string separator.
 myWord =['It is a hot summer','day', 'in', 'nyc']

# join elements of text with space
print(' '.join(myWord)) # Output: It is a hot summer day in nyc

#lower()method converts all uppercase characters in a string into lowercase characters and returns it.
myMessage="This is Python"
 # convert message to lowercase
 print(myMessage.lower())

 #replace(old,new[,count]) method replaces each matching occurrence of the old character/text in the string with the new character/text.
 #oldChar - the character to be replaced in the string
 #newChar - matching characters are replaced with this character
text='hot day'
#replace h with n
replaced_text =text.replace('h', 'n')
print(replaced_text)

song = 'cause', 'am','savage'
#replace 'cause with not 
song= 'everybody, wants to rule the world '
#replace wants to rule the world
print(song.replace('rule', 'not rule',4 ))

#split method breaks up a string at the specified separator and returns a list of strings.([sep[,maxsplit]])
#separator Delimiter at which splits occur. If not provided, the string is splitted at whitespaces.
#maxsplit Maximum number of splits. If not provided, there is no limit on the number of splits.
text ='learning python is fun'
# split the text from space
print(text.split(' '))

milk= 'oat', 'whole', 'soy', 'hemp'
#maxsplit2
print(milk.spilt(', ', 2))
#maxsplit1
print(milk.split(', ', 1))
#maxsplit5
print(milk.split(', ', 5))

#splitlines method splits the string at line breaks and returns a list of lines in the string.
milk='oat\nwhole\nsoy\r hemp'
print(milk.splitlines())

myMessage="This is Python"
#check if message starts with this
print(myMessage.startswith('this')) #true

#strips  method returns a copy of the string by removing both the leading and the trailing characters (based on the string argument passed).
myMessage='     learning python    '
#remove leading and end whitespace
print('myMessage:', myMessage.strip())

#upper method converts all lowercase characters in a string into uppercase characters and returns it.

myMessage='python is fun'
#make uppercase
print(myMessage.upper())
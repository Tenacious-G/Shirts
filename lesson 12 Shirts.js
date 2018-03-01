12.9
https://classroom.udacity.com/courses/ud304-emea/lessons/3ace947b-b5f6-40c1-bc11-3ec98fd1d936/concepts/1c7f869b-60fd-4746-a90e-5287f4a473dc#

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large)

Then print L to the console.

Hint: You will need to compare a range of values when checking for shirtWidth, shirtLength, and shirtSleeve. For example, if the shirt's width is at least 20", but no more than 22", then the t-shirt should be medium (M) — as long as the other values for the shirt's length and sleeve measurements match up.

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print N/A to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)

Then print N/A to the console because the measurements don't all match up with one particular size.

    TIP: Make sure to test your code with different values. For example,

    If shirtWidth equals 19, shirtLength equals 28 and shirtSleeve equals 8.21, then S should be printed to the console.
    If shirtWidth equals 26, shirtLength equals 33 and shirtSleeve equals 9.63, then 2XL should be printed to the console.
    If shirtWidth equals 18, shirtLength equals 29 and shirtSleeve equals 8.47, then N/A should be printed to the console.

	
//find sizeWidth, sizeLength, sizeSleeve
//test if they are the same
//print size if they are the same
//otherwise print "N/A"

//initialise 
var sizeWidth = "";
var sizeLength = "";
var sizeSleeve = "";
var shirtWidth = 19; // size S (small)
var shirtLength = 28;
var shirtSleeve = 8.21;
//find out sizeWidth
if ((shirtWidth < 20 ) && (shirtWidth >= 18 ))
	{sizeWidth = "S";}
	else if ((shirtWidth < 22) && (shirtWidth >= 20 ))
		{sizeWidth  = "M";}
		else if ((shirtWidth < 24) && (shirtWidth >= 22 ))
			{sizeWidth  = "L";}
			else if ((shirtWidth < 26) && (shirtWidth >= 24 ))
				{sizeWidth  = "XL";}
				else if ((shirtWidth < 28) && (shirtWidth >= 26 ))
					{sizeWidth = "2XL";}
else if (shirtWidth >= 28)
	{sizeWidth = "3XL";}

if ((shirtLength < 29 ) && (shirtLength >= 28 ))
	{sizeLength = "S";}
	else if ((shirtLength < 30) && (shirtLength >= 29 ))
		{sizeLength  = "M";}
		else if ((shirtLength < 31) && (shirtLength >= 30 ))
			{sizeLength  = "L";}
			else if ((shirtLength < 33) && (shirtLength >= 31 ))
				{sizeLength  = "XL";}
				else if ((shirtLength < 34) && (shirtLength >= 33 ))
					{sizeLength = "2XL";}
else if (shirtLength >= 34)
{sizeWidth = "3XL";}

if ((shirtSleeve < 8.38 ) && (shirtSleeve >= 8.13 ))
	{sizeSleeve = "S";}
	else if ((shirtSleeve < 8.63) && (shirtSleeve >= 8.38 ))
		{sizeSleeve  = "M";}
		else if ((shirtSleeve < 8.88) && (shirtSleeve >= 8.63 ))
			{sizeSleeve  = "L";}
			else if ((shirtSleeve < 9.63) && (shirtSleeve >= 8.88 ))
				{sizeSleeve  = "XL";}
				else if ((shirtSleeve < 10.13) && (shirtSleeve >= 9.63 ))
					{sizeSleeve = "2XL";}
else if (shirtSleeve >= 10.13)
{sizeSleeve = "3XL";}

//check if all the same size
if ((sizeWidth === sizeLength) && (sizeLength === sizeSleeve))
	{console.log(sizeWidth);}
else
	{console.log("N/A");}
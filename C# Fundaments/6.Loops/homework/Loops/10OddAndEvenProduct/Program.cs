using System;
//using System.Numerics;



class OddandEvenCompare
{
    static void Main()
    {

        //input with multiple numbers on second line
        int N = int.Parse(Console.ReadLine());
        string input = Console.ReadLine();
        var arrayOfNumbers = input.Split(' ');

        long oddSum = 1;
        long evenSum = 1;

        for (int i = 1; i < arrayOfNumbers.Length + 1; i++)
        {
            if (i % 2 != 0)
            {
                oddSum *= int.Parse(arrayOfNumbers[i - 1]);
            }
            else
            {
                evenSum *= int.Parse(arrayOfNumbers[i - 1]);
            }
        }


        if (oddSum == evenSum)
        {
            Console.WriteLine("yes {0}", evenSum);
        }
        else
        {
            Console.WriteLine("no {0} {1}", oddSum, evenSum);
        }



    }
}
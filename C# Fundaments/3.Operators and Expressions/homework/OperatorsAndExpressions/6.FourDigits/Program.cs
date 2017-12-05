using System;



class FourDigit
{
    static void Main()
    {

        int Input = int.Parse(Console.ReadLine());

        int firstNumber = Input / 1000;
        int secondNumber = (Input / 100) % 10;
        int thirdNumber = (Input / 10) % 10;
        int fourthNumber = Input % 10;

        int sum = firstNumber + secondNumber + thirdNumber + fourthNumber;

        Console.WriteLine(sum);
        Console.WriteLine("{3}{2}{1}{0}", firstNumber, secondNumber, thirdNumber, fourthNumber);
        Console.WriteLine("{3}{0}{1}{2}", firstNumber, secondNumber, thirdNumber, fourthNumber);
        Console.WriteLine("{0}{2}{1}{3}", firstNumber, secondNumber, thirdNumber, fourthNumber);
    }
}


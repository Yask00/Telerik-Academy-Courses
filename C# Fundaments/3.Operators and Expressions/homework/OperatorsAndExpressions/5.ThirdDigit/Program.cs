using System;

namespace _5.ThirdDigit
{
    class Program
    {
        static void Main()
        {

            int input = int.Parse(Console.ReadLine());

            int thirdDigit = (input / 100) % 10;
            int searchedDigit = 7;

            if (thirdDigit == searchedDigit)
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine("false" + " " + thirdDigit);
            }
            Console.WriteLine(7 % 10);
        }
    }
}

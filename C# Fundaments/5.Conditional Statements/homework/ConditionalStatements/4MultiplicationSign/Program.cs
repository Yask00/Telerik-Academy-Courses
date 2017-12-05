using System;



class MultiplicationSign
{
    static void Main()
    {

        double a = double.Parse(Console.ReadLine());
        double b = double.Parse(Console.ReadLine());
        double c = double.Parse(Console.ReadLine());

        int negativeNumbersCount = 0;

        if (a == 0 || b == 0 || c == 0)
        {
            Console.WriteLine(0);
        }

        else
        {
            if (a < 0)
            {
                negativeNumbersCount++;
            }
            if (b < 0)
            {
                negativeNumbersCount++;
            }
            if (c < 0)
            {
                negativeNumbersCount++;
            }
            if (negativeNumbersCount % 2 == 0)
            {
                Console.WriteLine("+");
            }
            else
            {
                Console.WriteLine("-");
            }
        }

    }
}




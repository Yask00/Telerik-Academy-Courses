using System;

class SumOdd
{
    static void Main()
    {
        Console.Write("n = ");
        int n = int.Parse(Console.ReadLine());

        int sum = 0;

        for (int i = 1; i <= n; i += 2)
        {
            if (i % 7 == 0)
            {
                continue; //continue goes back to loop
            }

            sum += i;
        }

        Console.WriteLine("sum = {0}", sum);
    }
}
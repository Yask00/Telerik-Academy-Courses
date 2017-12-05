using System;


class Program
{
    static void Main(string[] args)
    {

        {
            int input = int.Parse(Console.ReadLine());
            int count = 1;
            int zeroes = 0;

            while (input / Math.Pow(5, count) >= 1)
            {
                zeroes += input / (int)(Math.Pow(5, count));
                count++;
            }
            Console.WriteLine(zeroes);
        }

    }
}

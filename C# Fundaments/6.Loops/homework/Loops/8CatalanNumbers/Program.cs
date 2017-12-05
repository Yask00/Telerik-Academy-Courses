using System;
using System.Numerics;



class CatalanNumbers
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());

        if (1 <= N && N <= 100)
        {
            BigInteger numerator = 1;

            for (int i = 1; i <= (2 * N); i++)

            {
                numerator *= i;
            }
            // (2 * n)!
            BigInteger denominator = 1;
            for (int i = 1; i <= (N + 1); i++)

            {
                denominator *= i;
            }
            // (n+1)!
            for (int i = 1; i <= N; i++)
            {
                denominator *= i;
            }
            // n!
            Console.WriteLine(numerator / denominator);
        }

        else //n == 0
        {
            Console.WriteLine(1);
        }
    }
}
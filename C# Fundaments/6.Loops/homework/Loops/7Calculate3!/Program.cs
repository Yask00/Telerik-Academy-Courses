using System;
using System.Numerics;



class Calculate_3
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());
        int K = int.Parse(Console.ReadLine());

        BigInteger facdiv = 1;
        BigInteger facmin = 1;

        for (int i = K + 1; i <= N; i++)
        {

            facdiv *= i;

        }

        decimal minus = N - K;

        for (int j = 2; j <= (N - K); j++)
        {
            facmin *= j;
        }

        BigInteger result = (facdiv / facmin);
        Console.WriteLine(result);
    }
}
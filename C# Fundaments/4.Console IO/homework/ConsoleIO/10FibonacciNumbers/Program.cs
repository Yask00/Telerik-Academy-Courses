using System;

class FibonacciNumbers
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());
        long a = 1;
        long b = 0;

        for (long i = 1; i <= N; i++)
        {

            long temp = a;
            a = b;
            b = temp + b;

            if (i > N - 1)
            {
                Console.Write("{0}", a);
            }
            else
            {
                Console.Write("{0}, ", a);

            }



        }

    }
}


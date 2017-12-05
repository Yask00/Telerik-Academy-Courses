using System;




class Interval
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());
        int M = int.Parse(Console.ReadLine());

        int a = 0;

        int diff = M - N;

        for (int i = N + 1; i < M; i++)

            if (i % 5 == 0)
            {
                a++;
            }

        Console.WriteLine(a);

    }
}
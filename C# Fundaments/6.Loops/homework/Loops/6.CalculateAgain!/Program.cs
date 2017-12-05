using System;




class Calculate
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());
        int K = int.Parse(Console.ReadLine());

        decimal result = 1;

        for (int i = K + 1; i <= N; i++)
        {

            result *= i;

        }
        Console.WriteLine(result);

    }

}

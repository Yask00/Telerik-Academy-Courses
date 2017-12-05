using System;



class Calculate
{
    static void Main()
    {
        // input
        ulong N = ulong.Parse(Console.ReadLine());
        double x = double.Parse(Console.ReadLine());

        ulong factorial = 1;
        double sum = 1 + 1 / x;

        //output
        for (ulong i = 2; i <= N; i++)
        {

            factorial *= i;

            sum += (factorial / Math.Pow(x, i)); // Math.Pow calculates x^N
        }

        Console.WriteLine("{0:F5}", sum);
    }



}

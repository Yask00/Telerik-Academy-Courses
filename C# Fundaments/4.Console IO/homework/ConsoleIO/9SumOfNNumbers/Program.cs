using System;




class Sum_of_N_Numbers
{
    static void Main()
    {

        double result = 0;
        int N = int.Parse(Console.ReadLine());


        for (int i = 1; i <= N; i++)
        {
            double addSum = double.Parse(Console.ReadLine());
            result = result + addSum;
        }
        Console.WriteLine(result);
    }
}

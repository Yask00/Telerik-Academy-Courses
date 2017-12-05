using System;



class Maximal_K_sum
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());
        int K = int.Parse(Console.ReadLine());

        int[] numbers = new int[N];
        int sum = 0;


        for (int i = 0; i < N; i++)
        {
            numbers[i] = int.Parse(Console.ReadLine());

        }
        Array.Sort(numbers); // sort the array increasing order and get last 3 biggest





        for (int i = 0; i < K; i++)
        {

            sum += numbers[numbers.Length - 1 - i];

        }

        Console.WriteLine(sum);




    }
}

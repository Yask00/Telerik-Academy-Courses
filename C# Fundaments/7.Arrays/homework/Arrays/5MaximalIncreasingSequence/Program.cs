using System;



class Maximal_increasing_sequence
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());

        int[] numbers = new int[N];

        for (int i = 0; i < N; i++)
        {
            numbers[i] = int.Parse(Console.ReadLine());
        }

        int max = 1;
        int current = 1;


        for (int i = 1; i < N; i++)
        {
            if (numbers[i] > numbers[i - 1])
            {
                current++;
            }
            else
            {
                current = 1;
            }

            max = current > max ?
            current : max;
        }

        //Output
        Console.WriteLine(max);
    }
}

using System;



class Maximal_sum
{
    static void Main()
    {
        //Input
        int N = int.Parse(Console.ReadLine());

        int[] array = new int[N];

        for (int i = 0; i < N; i++)
        {
            array[i] = int.Parse(Console.ReadLine());
        }

        //Variables

        int maxSum = int.MinValue;
        int currentSum = 0;
        int tmpStart = 0;
        int end = N;
        int start = 0;

        for (int j = 0; j != N; ++j)
        {
            currentSum += array[j];
            end = j;

            //Choice of equal sum - the one with more numbers in it
            if (currentSum > maxSum || (currentSum == maxSum && (end - start) < (j - tmpStart)))
            {
                maxSum = currentSum;
                start = tmpStart;
                end = j;
            }

            if (currentSum < 0)
            {
                currentSum = 0;
                tmpStart = j + 1;
            }
        }
        //Output

        Console.WriteLine(maxSum);

    }
}

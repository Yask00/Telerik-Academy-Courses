using System;




class Binary_search
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());
        int[] array = new int[N];
        for (int i = 0; i < N; i++)
        {
            array[i] = int.Parse(Console.ReadLine());
        }

        int X = int.Parse(Console.ReadLine());

        int counter = 0;
        int startIndex = 0;
        int endIndex = N - 1;
        int midIndex = (endIndex - startIndex) / 2;
        int result = -1;

        while (counter <= N / 2)
        {
            if (array[midIndex] == X)
            {
                result = midIndex;
                break;
            }
            else if (array[midIndex] < X)
            {
                startIndex = midIndex + 1;
                midIndex = (endIndex + startIndex) / 2;
                counter++;
            }
            else
            {
                endIndex = midIndex - 1;
                midIndex = (startIndex + endIndex) / 2;
                counter++;
            }
        }

        Console.WriteLine(result);

    }
}
using System;



class MatrixOfNumbers
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());


        for (int row = 1; row <= N; row++)
        {
            for (int num = row; num < row + N; num++) // num <= (row + N -1)
            {
                Console.Write("{0} ", num);
            }
            Console.WriteLine();
        }
        // Console.WriteLine();
    }
}

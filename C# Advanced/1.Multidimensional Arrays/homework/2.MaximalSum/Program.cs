using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.MaximalSum
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] numbers = Console.ReadLine().Split();

            int nNumber = int.Parse(numbers[0]);
            int mNumber = int.Parse(numbers[1]);

            int[,] matrix = new int[nNumber, mNumber];

            for (int row = 0; row < nNumber; row++)
            {
                string [] line = Console.ReadLine().Split();

                for (int col = 0; col < line.Length; col++)
                {
                    matrix[row, col] = int.Parse(line[col]);
                }
            }

            int bestSum = int.MinValue;
            int currentSum = 0;

            for (int row = 0; row < nNumber - 2; row++)
            {
                for (int col = 0; col < mNumber - 2; col++)
                {
                    currentSum = matrix[row , col] + matrix[row + 1, col] + matrix[row + 2, col]
                               + matrix[row, col + 1] + matrix[row + 1, col + 1] + matrix[row + 2, col +1] 
                               + matrix[row, col + 2] + matrix[row + 1, col + 2] + matrix[row + 2, col + 2];

                    if (currentSum > bestSum)
                    {
                        bestSum = currentSum;
                    }
                }
            }
            Console.WriteLine(bestSum);
        }
    }
}
